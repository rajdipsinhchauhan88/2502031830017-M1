const express = require("express");
const session = require("express-session");
const connectDB = require("./config/db");

const pageRoutes = require("./routes/pageRoutes");
const userRoutes = require("./routes/userRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

connectDB();

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use(
  session({
    secret: "travelsby-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60, // 1 hour
    },
  })
);

app.use(express.static("public"));

app.set("view engine","ejs");

app.use("/", pageRoutes);
app.use("/", userRoutes);
app.use("/", bookingRoutes);
app.use("/", contactRoutes);

app.listen(3000,()=>{
    console.log("Server Running on Port 3000");
});
