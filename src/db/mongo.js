import { MongoClient, ObjectId } from "mongodb";

// ?  MongoDB init
const client = new MongoClient("mongodb://127.0.0.1:27017");

export function startMongo() {
	console.log("Starting mongo...");
	return client.connect();
}

export const db = client.db("memberList");
export const membersCollection = db.collection("members");
