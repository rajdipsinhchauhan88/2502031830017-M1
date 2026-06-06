const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");
const Contact = require("../models/Contact");

function requireLogin(req, res, next) {
  if (!req.session || !req.session.userId) {
    return res.redirect("/login");
  }
  next();
}

router.get("/", (req,res)=>{
    res.render("index", { userName: req.session?.userName });
});

router.get("/about",(req,res)=>{
    res.render("about", { userName: req.session?.userName });
});

router.get("/package",(req,res)=>{
    res.render("package", { userName: req.session?.userName });
});

router.get("/place",(req,res)=>{
    res.render("place", { userName: req.session?.userName });
});

router.get("/contact",(req,res)=>{
    res.render("contact", { userName: req.session?.userName });
});

router.get("/login",(req,res)=>{
    res.render("login");
});

router.get("/register",(req,res)=>{
    res.render("register");
});

router.get("/goa",(req,res)=>{
    res.render("goa", { userName: req.session?.userName });
});

// Show only logged-in user's bookings
router.get("/mybookings", requireLogin, async (req, res) => {
  const bookings = await Booking.find({ email: req.session.userEmail }).sort({ bookingDate: -1 });
  res.render("mybookings", { userName: req.session.userName, bookings });
});

// Show only logged-in user's contact messages (based on email)
router.get("/mycontacts", requireLogin, async (req, res) => {
  const contacts = await Contact.find({ email: req.session.userEmail }).sort({ _id: -1 });
  res.render("mycontacts", { userName: req.session.userName, contacts });
});

module.exports = router;
