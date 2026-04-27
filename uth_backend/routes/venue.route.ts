const express = require('express');
const router = express.Router();
const {body} = require('express-validator')
const venueController = require('../controllers/venue.controller');

router.post('/register',venueController.registerVenue)
router.get('/my-venues/:userId', venueController.getAllUserVenue);


module.exports=router