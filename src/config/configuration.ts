import "./dotenv";
import jsonConfig from "./config.json";

const config = {
	db: {
		dialect: "mysql",
		host: process.env.DB_HOST || "localhost",
		user: process.env.DB_USER || "root",
		password: process.env.DB_PASSWORD || "",
		name: process.env.DB_NAME || "webcod",
	},
	address: {
		SSL: jsonConfig.address.SSL,
		domain: jsonConfig.address.domain,
		port: jsonConfig.address.port,
		url: `${jsonConfig.address.SSL ? "https" : "http"}://${jsonConfig.address.domain}${
			jsonConfig.address.port !== 80 ? `:${jsonConfig.address.port}` : ""
		}`,
	},
	session: {
		secret: process.env.SESSION_SECRET || "Test Secret",
	},
	appIds: {
		CoD4x: "CoD4x",
	},
};

export default config;
