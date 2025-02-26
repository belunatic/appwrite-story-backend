const { databases, users } = require("../config/appwrite");

//controller the logic of the database
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
};
