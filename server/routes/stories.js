const express = require("express");
const router = express.Router();
const storiesController = require("../controllers/stories");

router.get("/", storiesController.getStories);
router.get("/:id", storiesController.getAStory);
router.get("/userStories/:id", storiesController.getUserStories);
router.post("/addStory", storiesController.createStory);
router.put("/:id", storiesController.updateStory);
router.delete("/:id", storiesController.deleteStory);

module.exports = router;
