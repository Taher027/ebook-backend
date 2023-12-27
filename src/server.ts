import mongoose from "mongoose";
import { Server } from 'http';
import app from "./app";
import config from "./config";
import { errorlogger } from "./shared/logger";
let server: Server;
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
	process.on('unhandledRejection', error => {
		if (server) {
		  server.close(() => {
			errorlogger.error(error);
			process.exit(1);
		  });
		} else {
		  process.exit(1);
		}
	  });
	
}

dbConnected();