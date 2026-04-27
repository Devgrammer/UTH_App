
const venueService = require('../services/venue.service')
const venueModel = require('../models/venue.model')
const { validationResult } = require('express-validator')

//Register a venue
module.exports.registerVenue = async (req, res) => {
  try {
    // Validate request
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }

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
      userId,
    } = req.body;

    // Check if venue already exists
    const isVenueAlreadyExist = await venueModel.findOne({
      $or: [{ venueName: venueName }, { phoneNumber: phoneNumber }],
    });

    if (isVenueAlreadyExist) {
      return res.status(409).json({
        success: false,
        message: "Venue already exists with this name or phone number",
      });
    }

    // Validate capacity
    if (minCapacity > maxCapacity) {
      return res.status(400).json({
        success: false,
        message: "Minimum capacity cannot be greater than maximum capacity",
      });
    }

    // Create venue
    const venue = await venueService.createVenue({
      venueImage,
      venueName,
      maxCapacity,
      minCapacity,
      location,
      phoneNumber,
      desc,
      amenities: amenities || [],
      googleProfile,
      userId,
    });

    return res.status(201).json({
      success: true,
      message: "Venue created successfully",
      data: venue,
    });
  } catch (error) {
    console.error("Error creating venue:", error);

    // Handle duplicate key error (MongoDB)
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(409).json({
        success: false,
        message: `${field} already exists. Please use a different value.`,
      });
    }

    return res.status(500).json({
      success: false,
      message: error.message || "Internal server error",
    });
  }
};

//Get user all venue
module.exports.getAllUserVenue = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) { res.status(400).json({ error: error.array() }) };

    const { userId } = req.params;

    const userVenue = await venueModel.find({ userId: userId })
    if (!userVenue) {
      return res.status(404).json({ success: false, message: "Venue not found" })
    }
    return res.status(200).json({ success: true, data: userVenue })
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }

}
