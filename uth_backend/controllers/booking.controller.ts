import { ValidationResult } from './../../uth_app/node_modules/@types/json-schema/index.d';
const bookingModel = require('../models/booking.model')
const bookingService = require('../services/booking.service')
const {validationResult} =require('express-validator')


module.exports.registerBooking =async(req,res)=>{
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const {
    booking,
    client,
    createdBy,
    event,
    finance,
    packages,
    reference,
    venue,
  } = req.body;

  if (!client || !event || !venue || !finance || !createdBy) {
    return res.status(400).json({
      success: false,
      message: "Missing required booking data",
    });
  }

  // More efficient query for date overlap
  const overlappingBooking = await bookingModel.findOne({
    "venue.venueId": venue.venueId,
    "venue.startDate": { $lt: new Date(venue.endDate) },
    "venue.endDate": { $gt: new Date(venue.startDate) },
    "booking.status": { $ne: "cancelled" },
  });

if (overlappingBooking) {
  throw new Error(
    `Booking Conflict: This venue is already booked for "${
      overlappingBooking.event.title
    }" from ${new Date(overlappingBooking.venue.startDate).toLocaleDateString(
      "en-IN",
      { weekday: "long", year: "numeric", month: "long", day: "numeric" }
    )} to ${new Date(overlappingBooking.venue.endDate).toLocaleDateString(
      "en-IN",
      { weekday: "long", year: "numeric", month: "long", day: "numeric" }
    )}.`
  );
}

const bookingId = await bookingModel.generateUniqueBookingId()
  const bookingData = {
    title:event.title,
    type:event.type,
    guestCount:event.guestCount,
    notes:event.notes,

    // Venue Group
    venueId:venue.venueId,
    venueVID:venue.venueVID,
    venueName:venue.venueName,
    selectedHall:venue.selectedHall,
    startDate:venue.startDate,
    endDate:venue.endDate,

    // Client Group
    clientName:client.name,
    clientPhoneNumber:client.phoneNumber,
    clientEmailAddress:client.emailAddress,
    clientWhatsappNumber:client.whatsappNumber,
    clientAddress:client.address,
    aadharLast4:client.aadharLast4,

    // Reference Group
    personOfReference:reference.personOfReference,

    // Finance Group
    totalContractAmount:finance.totalContractAmount,
    advanceAmountPaid:finance.advanceAmountPaid,
    pendingBalance:finance.pendingBalance,
    paymentMode:finance.paymentMode,

    // Package Group
    selectedPackage:packages.selectedPackage,

    // Booking Group
    bookingId:bookingId,
    status:booking.status,
    bookedAt:booking.bookedAt,
    source:booking.source,

    // Created By Group
    userId:createdBy.userId,
    userVID:createdBy.userVID,
    fullName:createdBy.fullName,
    email:createdBy.email,
    phoneNumber:createdBy.phoneNumber,
    role:createdBy.role,
  };


    const newBooking = await bookingService.createBooking(bookingData)

  res.status(201).json({
    success: true,
    message: "Booking created successfully",
    data: newBooking
  });
}