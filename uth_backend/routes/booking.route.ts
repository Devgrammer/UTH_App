const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const bookingController = require("../controllers/booking.controller");


router.post('/register',bookingController.registerBooking)

module.exports=router;
