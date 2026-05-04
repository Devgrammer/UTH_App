const BookingModel = require("../models/booking.model");

module.exports.createBooking = async ({
  // Event Group
  title,
  type,
  guestCount,
  notes,

  // Venue Group
  venueId,
  venueVID,
  venueName,
  selectedHall,
  startDate,
  endDate,

  // Client Group
  clientName,
  clientPhoneNumber,
  clientEmailAddress,
  clientWhatsappNumber,
  clientAddress,
  clientAadharLast4,

  // Reference Group
  personOfReference,

  // Finance Group
  totalContractAmount,
  advanceAmountPaid,
  pendingBalance,
  paymentMode,

  // Package Group
  selectedPackage,

  // Booking Group
  bookingId,
  status,
  bookedAt,
  source,

  // Created By Group
  userId,
  userVID,
  fullName,
  email,
  phoneNumber: createdByPhoneNumber,
  role,

}) => {
  // ========== VALIDATION ==========
  const missingFields = [];

  // Client validation
  if (!clientName) missingFields.push("Client name");
  if (!clientPhoneNumber) missingFields.push("Client phone number");
  if (!clientAddress) missingFields.push("Client email address");

  // Created by validation
  if (!userId) missingFields.push("Created by user ID");
  if (!fullName) missingFields.push("Created by user name");

  // Event validation
  if (!title) missingFields.push("Event title");
  if (!type) missingFields.push("Event type");
  if (!guestCount || guestCount <= 0) missingFields.push("Valid guest count");

  // Venue validation
  if (!venueId) missingFields.push("Venue ID");
  if (!venueName) missingFields.push("Venue name");
  if (!selectedHall) missingFields.push("Hall selection");
  if (!startDate) missingFields.push("Start date");
  if (!endDate) missingFields.push("End date");

  if (missingFields.length > 0) {
    throw new Error(`Missing required fields: ${missingFields.join(", ")}`);
  }

  // Finance validation
  if (!totalContractAmount || totalContractAmount <= 0) {
    throw new Error("Valid total contract amount is required");
  }

  // Calculate pending balance if not provided
  const calculatedPendingBalance =
    pendingBalance !== undefined
      ? pendingBalance
      : totalContractAmount - (advanceAmountPaid || 0);



  // ========== CREATE BOOKING ==========
  const newBooking = {
    event: {
      title,
      type,
      guestCount,
      notes: notes || "",
    },
    venue: {
      venueId,
      venueVID,
      venueName,
      selectedHall,
      startDate,
      endDate,
    },
    client: {
      name:clientName,
      phoneNumber:clientPhoneNumber,
      emailAddress:clientEmailAddress,
      whatsappNumber: clientWhatsappNumber || "",
      address: clientAddress || "",
      aadharLast4: clientAadharLast4 || "",
    },
    reference: {
      personOfReference: personOfReference || "",
    },
    finance: {
      totalContractAmount,
      advanceAmountPaid: advanceAmountPaid || 0,
      pendingBalance: calculatedPendingBalance,
      paymentMode: paymentMode,
    },
    packages: {
      selectedPackage: selectedPackage || "",
    },
    booking: {
      bookingId:bookingId,
      status: status || "pending",
      bookedAt: bookedAt || new Date(),
      source: source,
    },
    createdBy: {
      userId,
      userVID,
      fullName,
      email,
      phoneNumber: createdByPhoneNumber,
      role: role ,
    },
  };

  const booking = await BookingModel.create(newBooking);

  return booking;
};
