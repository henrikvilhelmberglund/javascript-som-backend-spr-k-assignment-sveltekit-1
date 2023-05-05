import { membersCollection } from "$db/mongo";
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

	console.log(member);

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

		const id = data.get("id");
		const member = await membersCollection.findOne({
			_id: new ObjectId(id),
		});
		console.log(member);

		await membersCollection.updateOne(member, { $set: body });
		// res.json(members);
		return {
			updated: true,
			updatedMember: name,
		};
	},
};
