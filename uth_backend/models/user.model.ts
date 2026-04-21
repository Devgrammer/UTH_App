export {};
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      unique: true,
      required: true,
    },
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      unique: true,
    },
    password: {
      type: String,
      min: [6, "Password must be atleast 6 character long"],
      required: [true, "Password is required"],
    },
      address: {
        street: { 
            type: String, 
            trim: true,
            default: ''
        },
        apartment: { 
            type: String, 
            trim: true,
            default: ''
        },
        city: { 
            type: String, 
            trim: true,
            default: ''
        },
        state: { 
            type: String, 
            trim: true,
            default: ''
        },
        postalCode: { 
            type: String, 
            trim: true,
            default: ''
        },
        country: { 
            type: String, 
            trim: true,
            default: 'India'
        },
        landmark: { 
            type: String, 
            trim: true,
            default: ''
        }
    },
    role: {
      type: String,
      enum: ["superadmin", "owner", "manager", "staff", "customer"],
      required: true,
      default: "owner",
    },
    venueId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Venue",
    },
    permissions: {
      type: mongoose.Schema.Types.Mixed,
      default: {
        inventory: false,
        bookings: false,
        staff: false,
        reports: false,
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// ========== INDEXES ==========

userSchema.index({ role: 1, isActive: 1 });

// ========== INSTANCE METHODS ==========
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "2d",
  });
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};


userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

userSchema.statics.generateUniqueUserId = async function (role) {
  // Role to prefix mapping
  const prefixMap = {
    superadmin: "SA",
    customer: "CUS",
    owner: "OWN",
    manager: "MGR",
    staff: "EMP",
  };

  // Get prefix, default to 'USR' for unknown roles
  const prefix = prefixMap[role] || "USR";

  // Get current date in YYYYMMDD format
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const dateStr = `${year}${month}${day}`;

  // Generate random 4-digit number (1000-9999)
  const random = Math.floor(Math.random() * 9000) + 1000;

  // Return formatted ID (wrapped in Promise.resolve for consistency)
  return `${prefix}-${dateStr}-${random}`;
};


const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
