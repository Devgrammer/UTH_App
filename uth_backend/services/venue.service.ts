const venueModel = require('../models/venue.model')

module.exports.createVenue =async({venueImage, venueName,maxCapacity, minCapacity, location, phoneNumber,desc, amenities, googleProfile, userId, status})=>{

    if(!venueImage || !venueName || !maxCapacity || !minCapacity || !location || !phoneNumber || !desc || !amenities || !googleProfile || !userId || !status){
        throw new Error("All field are required")
    }

    const venue = venueModel.create({
      venueImage,
      venueName,
      maxCapacity,
      minCapacity,
      location,
      phoneNumber,
      status,
      desc,
      amenities,
      googleProfile,
      userId,
    });

    return venue
}