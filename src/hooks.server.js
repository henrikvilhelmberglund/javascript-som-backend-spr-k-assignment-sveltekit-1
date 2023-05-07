import { startMongo } from "$db/mongo";

async function init() {
	await startMongo();
	console.log("Mongo started!");
}

await init();
