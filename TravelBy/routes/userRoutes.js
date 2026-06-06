const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();

const User = require("../models/User");

function getErrorMessage(err) {
  if (!err) return "Something went wrong";
  // Mongo duplicate key error code
  if (err.code === 11000) return "Email already registered";
  return err.message || "Something went wrong";
}

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send("All fields are required");
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({ name, email, passwordHash });
    await user.save();

    return res.redirect("/login");
  } catch (err) {
    return res.status(400).send(getErrorMessage(err));
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(401).send("Invalid Login");

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) return res.status(401).send("Invalid Login");

    req.session.userId = user._id;
    req.session.userEmail = user.email;
    req.session.userName = user.name;

    return res.redirect("/");
  } catch (err) {
    return res.status(500).send("Login failed");
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login");
  });
});

module.exports = router;
