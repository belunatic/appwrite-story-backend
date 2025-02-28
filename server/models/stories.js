const { ID } = require("node-appwrite");
const { databases, users } = require("../config/appwrite");

// The logic of the database data retrieval is moved to the model
// The controller will call the model to get the data
module.exports = {
	getAllDocument: async () => {
		try {
			const result = await databases.listDocuments(
				process.env.VITE_DATABASE_ID, // databaseId
				process.env.VITE_COLLECTION_ID // collectionId
			);
			return result;
		} catch (error) {
			console.error("Error fetching documents:", error);
		}
	},

	getAllUser: async () => {
		try {
			const result = await users.list();
			return result;
		} catch (error) {
			console.error("Error fetching user:", error);
		}
	},

	getAUser: async (id) => {
		try {
			const result = await users.get(id);
			return result;
		} catch (error) {
			console.error("Error fetching user:", error);
		}
	},
	getDocument: async (documentId) => {
		try {
			const result = await databases.getDocument(
				process.env.VITE_DATABASE_ID,
				process.env.VITE_COLLECTION_ID,
				documentId
			);
			return result;
		} catch (error) {
			console.error("Error fetching document:", error);
		}
	},
	createDocument: async (data) => {
		try {
			const result = await databases.createDocument(
				process.env.VITE_DATABASE_ID,
				process.env.VITE_COLLECTION_ID,
				ID.unique(),
				data
			);
			return result;
		} catch (error) {
			console.error("Error creating document:", error);
		}
	},
	updateDocument: async (id, data) => {
		try {
			const result = await databases.updateDocument(
				process.env.VITE_DATABASE_ID,
				process.env.VITE_COLLECTION_ID,
				id,
				data
			);
			return result;
		} catch (error) {
			console.error("Error creating document:", error);
		}
	},
};
