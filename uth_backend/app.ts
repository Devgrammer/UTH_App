export {};
const dotenv = require("dotenv");
dotenv.config({ override: true });
const cors = require("cors");
const express = require("express");
const app = express();
const connectToDB = require('./db/db')
const cookieParser = require('cookie-parser')
const userRoutes=require('./routes/user.route')
const venueRoutes=require('./routes/venue.route')
const bookingRoutes=require('./routes/booking.route')


connectToDB();

app.use(cors());
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.get("/", (req, res) => {
  res.send("Hello UTH");
});

app.use('/api', userRoutes)
app.use('/api/venue', venueRoutes)
app.use('/api/booking', bookingRoutes)

module.exports = app;
