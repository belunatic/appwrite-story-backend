const express = require("express");
const router = express.Router();
const storiesController = require("../controllers/stories");

router.get("/", storiesController.getStories);
router.get("/:id", storiesController.getAStory);
router.post("/addStory", storiesController.createStory);
router.put("/:id", storiesController.updateStory);

module.exports = router;
