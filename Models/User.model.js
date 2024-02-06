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
  password: {
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
    required: false,
  },
  addressDetails: {
    addressLine1: {
      type: String,
      required: false,
    },
    addressLine2: {
      type: String,
      required: false,
    },
    town: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    pincode: {
      type: String,
      required: false,
    },
  },
  bloodGroup: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  isKYCCompleted: {
    type: String,
    default: false,
  },
  profileImage: {
    type: String,
    required: false,
  },
  roles: {
    type: Array,
    default: ["patient"],
  },
});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;
