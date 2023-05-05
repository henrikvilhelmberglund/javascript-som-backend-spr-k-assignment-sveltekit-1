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
