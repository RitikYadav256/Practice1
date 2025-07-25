const express = require("express");
const { getComments, addComment } = require("../controllers/commentController");

const router = express.Router();

// Route to get all comments
router.get("/", getComments);

// Route to add a new comment
router.post("/", addComment);

module.exports = router;
