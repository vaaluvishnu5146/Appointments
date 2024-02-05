const mongoose = require("mongoose");

const HospitalSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
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
    branchId: {
      type: String,
      required: false,
    },
  },
  servicesProvided: {
    type: Array,
    required: true,
  },
  isKYCVerified: {
    type: Boolean,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: Number,
    default: 1,
  },
});

const HospitalModel = mongoose.model("hospital", HospitalSchema);
module.exports = HospitalModel;
