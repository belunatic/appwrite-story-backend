const express = require("express");
const cors = require("cors");
const sdk = require("node-appwrite");
require("dotenv").config();

const app = express();

const client = new sdk.Client();

client
	.setEndpoint("https://cloud.appwrite.io/v1")
	.setProject(process.env.VITE_PROJECT_ID)
	.setKey(process.env.VITE_API_KEY);

const databases = new sdk.Databases(client);

const getDocument = async () => {
	try {
		const result = await databases.listDocuments(
			process.env.VITE_DATABASE_ID, // databaseId
			process.env.VITE_COLLECTION_ID // collectionId
		);
		return result;
	} catch (error) {
		console.error("Error fetching documents:", error);
	}
};

app.get("/", async (req, res) => {
	let docs = await getDocument();
	res.json(docs);
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
