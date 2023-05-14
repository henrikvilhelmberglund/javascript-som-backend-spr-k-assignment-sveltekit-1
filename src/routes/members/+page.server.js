import { membersCollection } from "$db/mongo";
import { SHOW_CONSOLE_LOGS } from "$lib/constants";
import { ObjectId } from "mongodb";

let sortType = "Default";

async function getMembers(sortType) {
	let members = await membersCollection.find({}).toArray();

	const sortNumber = sortType === "Asc" ? 1 : -1;

	if (sortType !== "Default") {
		members = await membersCollection
			.find({})
			.collation({ locale: "en" })
			.sort({ name: sortNumber })
			.toArray();
	} else {
		members = await membersCollection.find({}).toArray();
	}
	members.forEach((item) => {
		item._id = item._id.toString();
	});

	return members;
}

/** @type {import('./$types').PageLoad} */
export async function load({ cookies }) {
	const members = await getMembers(sortType);

	if (SHOW_CONSOLE_LOGS) {
		console.log("Ran load function in members route: ", members);
	}
	return {
		members,
		sortAlternatives: ["Default", "Asc", "Desc"],
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	sort: async ({ cookies, request }) => {
		const data = await request.formData();
		sortType = data.get("sortType");
		if (SHOW_CONSOLE_LOGS) {
			console.log("Ran sort: ", sortType);
		}

		// if you want to get the value from the name
		// sortType = data.keys().next().value;
	},
	delete: async ({ cookies, request }) => {
		const data = await request.formData();
		if (SHOW_CONSOLE_LOGS) {
			console.log(request);
		}

		const id = data.get("id");
		const member = await membersCollection.findOne({
			_id: new ObjectId(id),
		});

		await membersCollection.deleteOne(member);
		if (SHOW_CONSOLE_LOGS) {
			console.log("Ran delete action in members route on this member: ", member);
		}

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
		if (SHOW_CONSOLE_LOGS) {
			console.log("data", ...data);
		}
		// console.log(data[0]);

		const { name, email, phone, character } = Object.fromEntries(data.entries());

		const date = new Date();

		const body = {
			name,
			email,
			phone,
			date,
			character,
		};

		// console.log(body);

		await membersCollection.insertOne(body);
		if (SHOW_CONSOLE_LOGS) {
			console.log("Ran addMember action in members route on this member: ", body);
		}
		// res.json(members);
		return {
			added: true,
			addedMember: name,
		};

		// ? was better to just change the location of the action than to redirect so I can use the return statement above
		// throw redirect(303, "/members");

		// ? this is a temporary redirect which will keep the form method which screws things up
		// throw redirect(307, "/members");
	},
};
