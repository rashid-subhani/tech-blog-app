// File: routes/userRoutes.js
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { User } = require("../models");
const SECRET = process.env.JWT_SECRET || "supersecret";

router.post("/register", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({ message: "User registered", user });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });

  if (!user || !user.checkPassword(password)) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, SECRET, { expiresIn: "1h" });
  res.json({ message: "Login successful", token });
});

module.exports = router;