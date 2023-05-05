import { startMongo } from "$db/mongo";

async function init(params) {
	await startMongo();
	console.log("Mongo started!");
}

await init();
