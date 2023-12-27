import mongoose from "mongoose";
import app from "./app";
import config from "./config";
async function dbConnected() {
	await mongoose.connect(config.database_url as string);
	console.log("Database Connected Successfull");
	app.listen(config.port, () => {
		console.log(`Application listening on port  ${config.port}`);
	});

	try {
	} catch (err) {
		console.log("database connected failed!", err);
	}

	
}

dbConnected();