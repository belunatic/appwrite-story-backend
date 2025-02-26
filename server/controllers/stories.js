const sdk = require("node-appwrite");
const stories = require("../models/stories");

module.exports = {
	getStories: async (req, res) => {
		const users = await stories.getAllUser();
		const documents = await stories.getAllDocument();

		//add an author property to each document
		documents.documents.forEach((doc) => {
			doc.author = users.users.find((user) => user.$id === doc.userId).name;
		});

		// console.log("Documents:", documents);
		res.json(documents);
	},
};
