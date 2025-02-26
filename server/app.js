const express = require("express");
const cors = require("cors");
const sdk = require("node-appwrite");
const storiesRoutes = require("./routes/stories");

const app = express();

app.use(cors());
require("dotenv").config();

app.use("/", storiesRoutes);

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
