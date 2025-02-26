const express = require("express");
const cors = require("cors");
const sdk = require("node-appwrite");
const storiesRoutes = require("./routes/stories");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
require("dotenv").config();

app.use("/", storiesRoutes);

app.listen(process.env.PORT || 5000, () => {
	console.log("Server is running on port 3000");
});
