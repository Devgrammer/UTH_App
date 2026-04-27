
const venueService = require('../services/venue.service')
const venueModel = require('../models/venue.model')
const {validationResult}=require('express-validator')


module.exports.registerVenue = async(req,res)=>{
    const error = validationResult(req);
    if(!error.isEmpty()){res.status(400).json({error:error.array()})};
    const {
      venueImage,
      venueName,
      maxCapacity,
      minCapacity,
      location,
      phoneNumber,
      desc,
      amenities,
      googleProfile,
      userId

    } = req.body

    const isVenueAlreadyExist = await venueModel.findOne({
      venueName: venueName,
      phoneNumber: phoneNumber,
    });

    if(isVenueAlreadyExist){
       res.status(400).json({ message: "Venue already exist" });
    }

    const venue = await venueService.createVenue({
      venueImage,
      venueName,
      maxCapacity,
      minCapacity,
      location,
      phoneNumber,
      desc,
      amenities,
      googleProfile,
      userId
    });

    res.status(201).json({message:'success', data:venue});
}
