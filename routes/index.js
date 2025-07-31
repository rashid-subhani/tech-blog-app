// File: routes/index.js
const router = require("express").Router();
const authRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");

router.use("/users", authRoutes);
router.use("/posts", postRoutes);

module.exports = router;