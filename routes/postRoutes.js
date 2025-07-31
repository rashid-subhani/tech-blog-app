// File: routes/postRoutes.js
const router = require("express").Router();
const { Post } = require("../models");
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET || "supersecret";

function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    req.user = jwt.verify(token, SECRET);
    next();
  } catch {
    res.status(403).json({ message: "Invalid token" });
  }
}

router.get("/", async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

router.post("/", auth, async (req, res) => {
  const { title, content, category } = req.body;
  const newPost = await Post.create({ title, content, category, user_id: req.user.id });
  res.json(newPost);
});

router.put("/:id", auth, async (req, res) => {
  const updated = await Post.update(req.body, { where: { id: req.params.id, user_id: req.user.id } });
  res.json({ message: "Post updated", updated });
});

router.delete("/:id", auth, async (req, res) => {
  await Post.destroy({ where: { id: req.params.id, user_id: req.user.id } });
  res.json({ message: "Post deleted" });
});

module.exports = router;
