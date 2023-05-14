import { membersCollection } from "$db/mongo";
import { SHOW_CONSOLE_LOGS } from "$lib/constants";
import { error } from "@sveltejs/kit";
import { ObjectId } from "mongodb";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	// BSON ID is always 24
	if (params.slug.length !== 24) {
		throw error(404, {
			message: "Not found",
		});
	}
	const id = new ObjectId(params.slug);
	// console.log(error);

	let member = await membersCollection.findOne({ _id: id });
	member._id = member._id.toString();

	if (SHOW_CONSOLE_LOGS) {
		console.log("Ran load function in dynamic route to load the following member: ", member);
	}

	return {
		member: member,
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	updateMember: async ({ cookies, request }) => {
		const data = await request.formData();

		// console.log("request", request);
		// console.log("data", data);
		// console.log("data", ...data);
		// console.log(data[0]);

		const { name, email, phone, character } = Object.fromEntries(data.entries());
		const id = data.get("id");
		const date = new Date(data.get("date"));

		const member = await membersCollection.findOne({
			_id: new ObjectId(id),
		});
		// get date from member's original data
		// let date = member.date;
		// date = new Date(date);

		const body = {
			name,
			email,
			phone,
			date,
			character,
		};

		if (SHOW_CONSOLE_LOGS) {
			console.log("Ran updateMember with the following: ", member);
		}

		await membersCollection.updateOne(member, { $set: body });
		// res.json(members);
		return {
			updated: true,
			updatedMember: name,
		};
	},
};
