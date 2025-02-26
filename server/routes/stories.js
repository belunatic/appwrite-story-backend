const express = require("express");
const router = express.Router();
const storiesController = require("../controllers/stories");

router.get("/", storiesController.getStories);

module.exports = router;
