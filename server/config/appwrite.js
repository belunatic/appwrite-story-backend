const sdk = require("node-appwrite");
require("dotenv").config();
const client = new sdk.Client();

client
	.setEndpoint("https://cloud.appwrite.io/v1")
	.setProject(process.env.VITE_PROJECT_ID)
	.setKey(process.env.VITE_APP_API_KEY);

module.exports = {
	databases: new sdk.Databases(client),
	users: new sdk.Users(client),
	account: new sdk.Account(client),
};
