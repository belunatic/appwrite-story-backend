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
	getAStory: async (req, res) => {
		const { id } = req.params;
		const story = await stories.getDocument(id);
		res.json(story);
	},
	createStory: async (req, res) => {
		try {
			console.log("This is the issue", req);
			const result = await stories.createDocument(req.body);
			console.log(result);
			res.json(result);
		} catch (err) {
			console.log("Error in Creating: ", err);
		}
	},
};
