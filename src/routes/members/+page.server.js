// server only code here

import { membersCollection } from "$db/mongo";
import { redirect } from "@sveltejs/kit";
import { ObjectId } from "mongodb";

async function getMembers(sortType) {
	let members = await membersCollection.find({}).toArray();

	const sortNumber = sortType === "Asc" ? 1 : -1;

	if (sortType !== "Default") {
		members = await membersCollection
			.find({})
			.collation({ locale: "en" })
			.sort({ name: sortNumber })
			.toArray();
		members.forEach((item) => {
			item._id = item._id.toString();
		});
	} else {
		members = await membersCollection.find({}).toArray();
		members.forEach((item) => {
			item._id = item._id.toString();
		});
	}

	return members;
}

/** @type {import('./$types').PageLoad} */
export async function load({ cookies }) {
	const sortType = cookies.get("sortType") || "Default";
	return {
		members: await getMembers(sortType),
		sortAlternatives: ["Default", "Asc", "Desc"],
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	sort: async ({ cookies, request }) => {
		const data = await request.formData();
		const sortType = data.keys().next().value;
		cookies.set("sortType", sortType);
	},
	delete: async ({ cookies, request }) => {
		const data = await request.formData();
		console.log(request);

		const id = data.get("id");
		const member = await membersCollection.findOne({
			_id: new ObjectId(id),
		});
		console.log(member);

		await membersCollection.deleteOne(member);
		// res.json(members);
		// throw redirect(307, "/members");
		return {
			delete: true,
			deletedMember: member.name,
		};
	},
	addMember: async ({ cookies, request }) => {
		const data = await request.formData();

		// console.log("request", request);
		// console.log("data", data);
		console.log("data", ...data);
		// console.log(data[0]);

		const { name, email, phone, date, character } = Object.fromEntries(data.entries());

		const body = {
			name,
			email,
			phone,
			date,
			character,
		};

		// console.log(body);

		await membersCollection.insertOne(body);
		// res.json(members);
		return {
			added: true,
			addedMember: name,
		};

		// ? was better to just change the location of the action than to redirect so I can use the return statement above
		// throw redirect(303, "/members");

		// ? this is a temporary redirect which will keep the form method which screws things up
		// throw redirect(307, "/members");

		// db.createTodo(cookies.get('userid'), data.get('description'));
	},
};
