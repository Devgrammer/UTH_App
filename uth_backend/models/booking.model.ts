const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    // Event Group
    event: {
      title: {
        type: String,
        required: [true, "Event title is required"],
        trim: true,
        minlength: [3, "Event title must be at least 3 characters"],
        maxlength: [200, "Event title cannot exceed 200 characters"],
      },
      type: {
        type: String, // ✅ Changed from enum to String
        required: [true, "Event type is required"],
        trim: true,
      },
      guestCount: {
        type: Number,
        required: [true, "Guest count is required"],
        min: [1, "Guest count must be at least 1"],
        max: [10000, "Guest count cannot exceed 10000"],
      },
      notes: {
        type: String,
        maxlength: [2000, "Event notes cannot exceed 2000 characters"],
        default: "",
      },
    },

    // Venue Group
    venue: {
      venueId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Venue",
        required: [true, "Venue ID is required"],
      },
      venueVID: {
        type: String,
        required: [true, "Venue VID is required"],
      },
      venueName: {
        type: String,
        required: [true, "Venue name is required"],
        trim: true,
      },
      selectedHall: {
        type: String, // ✅ Changed from enum to String
        required: [true, "Hall selection is required"],
        trim: true,
      },
      startDate: {
        type: Date,
        required: [true, "Start date is required"],
      },
      endDate: {
        type: Date,
        required: [true, "End date is required"],
        validate: {
          validator: function (v) {
            return v > this.venue.startDate;
          },
          message: "End date must be after start date",
        },
      },
    },

    // Client Group
    client: {
      name: {
        type: String,
        required: [true, "Client name is required"],
        trim: true,
      },
      phoneNumber: {
        type: String,
        required: [true, "Client phone number is required"],
        match: [/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"],
      },
      emailAddress: {
        type: String,
        required: [true, "Client email is required"],
        lowercase: true,
        trim: true,
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Please enter a valid email",
        ],
      },
      whatsappNumber: {
        type: String,
        match: [/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"],
        default: "",
      },
      address: {
        type: String,
        default: "",
      },
      aadharLast4: {
        type: String,
        match: [/^[0-9]{4}$/, "Aadhar last 4 digits must be 4 digits"],
        default: "",
      },
    },

    // Reference Group
    reference: {
      personOfReference: {
        type: String,
        trim: true,
        default: "",
      },
    },

    // Finance Group
    finance: {
      totalContractAmount: {
        type: Number,
        required: [true, "Total contract amount is required"],
        min: [0, "Amount cannot be negative"],
      },
      advanceAmountPaid: {
        type: Number,
        default: 0,
        min: [0, "Amount cannot be negative"],
      },
      pendingBalance: {
        type: Number,
        default: 0,
        min: [0, "Amount cannot be negative"],
      },
      paymentMode: {
        type: String,
        enum: [
          "cash",
          "creditCard",
          "debitCard",
          "upi",
          "bankTransfer",
          "cheque",
          "pending",
        ],
        default: "pending",
      },
    },

    // Package Group
    packages: {
      selectedPackage: {
        type: String, // ✅ Changed from enum to String
        trim: true,
        default: "",
      },
    },

    // Booking Group
    booking: {
      bookingId: {
        type: String,
        unique: true,
      },
      status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled", "completed", "rescheduled"],
        default: "pending",
      },
      bookedAt: {
        type: Date,
        default: Date.now,
      },
      source: {
        type: String,
        enum: ["ios", "android", "web", "unknown"],
        default: "unknown",
      },
    },

    // Created By Group
    createdBy: {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      userVID: {
        type: String,
        required: true,
      },
      fullName: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        lowercase: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        enum: ["superadmin", "owner", "manager", "staff", "customer"],
        default: "customer",
      },
    },
  },
  {
    timestamps: true,
  }
);

bookingSchema.index({ "createdBy.userId": 1 });
bookingSchema.index({ "venue.venueId": 1 });
bookingSchema.index({ "venue.startDate": 1 });
bookingSchema.index({ "booking.status": 1 });
bookingSchema.index({ "event.type": 1 }); // For filtering by event type
bookingSchema.index({ "venue.selectedHall": 1 }); // For filtering by hall
bookingSchema.index({ "packages.selectedPackage": 1 }); 

bookingSchema.statics.generateUniqueBookingId = async function () {
  // Fixed prefix for bookings
  const prefix = "BKG";

  // Get current date in YYYYMMDD format
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const dateStr = `${year}${month}${day}`;

  // Generate random 4-digit number (1000-9999)
  const random = Math.floor(Math.random() * 9000) + 1000;

  // Return formatted ID: BKG-20241218-4732
  return `${prefix}-${dateStr}-${random}`;
};

const Booking =  mongoose.model('booking', bookingSchema);

module.exports = Booking