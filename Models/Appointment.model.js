const mongoose = require("mongoose");

const AppointmentSchema = mongoose.Schema({
  patientId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  doctorId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  hospitalId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  problem: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  appointmentDate: {
    type: String,
    required: true,
  },
  isAssistanceNeeded: {
    type: Boolean,
    default: false,
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
  tokenNumber: {
    type: Number,
    required: false,
  },
});

const AppointmentModel = mongoose.model("appointment", AppointmentSchema);
module.exports = AppointmentModel;
