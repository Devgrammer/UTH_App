const express = require('express');
const router = express.Router();
const {body} = require('express-validator')
const venueController = require('../controllers/venue.controller');

router.post('/register',venueController.registerVenue)


module.exports=router