const express = require("express");
const router = express.Router();
const Post = require("../models/post.model");

// Post API
router.post("/posts", async (req, res) => {
  try {
    const { userId, content } = req.body;
    const post = new Post({ userId, content });
    await post.save();
    res.status(200).json({ message: "Post created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete Post API
router.delete("/deletepost/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    await Post.findByIdAndDelete(postId);
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Fetch User's Posts API
router.get("/posts/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const posts = await Post.find({ userId });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
