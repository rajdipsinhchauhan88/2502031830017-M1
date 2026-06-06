const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");

function requireLogin(req, res, next) {
  if (!req.session || !req.session.userId) {
    return res.redirect("/login");
  }
  next();
}

router.post("/book", requireLogin, async (req, res) => {
  try {
const bookingData = {
      // Always store booking against the logged-in user
      name: req.session.userName,
      email: req.session.userEmail,

      persons: req.body.persons,
      packageName: req.body.packageName,
      bookingDate: req.body.bookingDate,
    };

    const booking = new Booking(bookingData);
    await booking.save();

    return res.redirect("/");
  } catch (err) {
    return res.status(400).send(err.message || "Booking failed");
  }
});

module.exports = router;
