const mongoose = require("mongoose");

const DoctorSchema = mongoose.Schema({
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
  speciality: {
    type: String,
    required: false,
  },
  qualification: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  consultMode: {
    type: String,
    required: true,
  },
  isKYCCompleted: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    required: false,
  },
  workingFor: {
    type: Array,
    required: false,
  },
});

const DoctorModel = mongoose.model("doctor", DoctorSchema);
module.exports = DoctorModel;
