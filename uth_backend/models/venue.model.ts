import { Schema } from "mongoose"

const mongoose = require('mongoose')
const User = require('../models/user.model')

const VenueSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // ✅ Use string reference, not variable
      required: [true, "User ID is required"],
      index: true,
    },
    venueId: {
      type: String,
      unique: true,
      required: true,
      default: function () {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 10000);
        return `VEN-${timestamp}-${random}`;
      },
    },
    venueImage: {
      type: String,
      trim: true,
      validate: {
        validator: function (v) {
          return !v || /^https?:\/\/.+/.test(v);
        },
        message: "Invalid image URL format",
      },
    },
    venueName: {
      type: String,
      required: [true, "Venue name is required"],
      trim: true,
      minlength: [3, "Venue name must be at least 3 characters"],
      maxlength: [100, "Venue name cannot exceed 100 characters"],
      index: true,
    },
    minCapacity: {
      type: Number,
      required: [true, "Minimum capacity is required"],
      min: [0, "Minimum capacity cannot be negative"],
      validate: {
        validator: function (v) {
          return v <= this.maxCapacity;
        },
        message: "Minimum capacity cannot be greater than maximum capacity",
      },
    },
    maxCapacity: {
      type: Number,
      required: [true, "Maximum capacity is required"],
      min: [0, "Maximum capacity cannot be negative"],
    },
    desc: {
      type: String,
      maxlength: [1000, "Description cannot exceed 1000 characters"],
      trim: true,
    },
    amenities: {
      type: [String],
      default: [],
      validate: {
        validator: function (v) {
          return Array.isArray(v);
        },
        message: "Amenities must be an array",
      },
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
      index: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      unique: true,
      match: [/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"],
      index: true,
    },
    status:{
      type:String,
       enum: ['active', 'inactive', 'maintenance'],
       default:'active',
       required:true
    },
    googleProfile: {
      type: String,
      trim: true,
      validate: {
        validator: function (v) {
          return /^https:\/\/maps\.app\.goo\.gl\/[A-Za-z0-9_-]+$/.test(v);
        },
        message: "Invalid Google profile URL",
      },
    },
  },
  {
    timestamps: true, // ✅ Adds createdAt & updatedAt automatically
  }
);
const VenueModel = mongoose.model('venue',VenueSchema)

module.exports=VenueModel;