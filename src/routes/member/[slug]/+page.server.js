import { membersCollection } from "$db/mongo";
import { ObjectId } from "mongodb";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	console.log(params);
	let member = await membersCollection.findOne({ _id: new ObjectId(params.slug) });
	member._id = member._id.toString();

	console.log(member);

	return {
		member: member,
	};
}
