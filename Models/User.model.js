const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  emergencyEmail: {
    type: String,
    required: false,
  },
  emergencyPhoneNumber: {
    type: String,
    required: false,
  },
  aadharNumber: {
    type: String,
    required: true,
  },
  addressDetails: {
    addressLine1: {
      type: String,
      required: true,
    },
    addressLine2: {
      type: String,
      required: true,
    },
    town: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  isKYCCompleted: {
    type: String,
    default: false,
  },
  profileImage: {
    type: String,
    required: false,
  },
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
