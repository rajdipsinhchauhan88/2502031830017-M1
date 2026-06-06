const express = require("express");
const router = express.Router();

const Contact = require("../models/Contact");

router.post("/contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    return res.redirect("/contact");
  } catch (err) {
    return res.status(400).send(err.message || "Message failed");
  }
});

module.exports = router;
