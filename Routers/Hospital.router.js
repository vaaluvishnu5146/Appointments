const {
  createHospital,
  getDocbyHospitalId,
} = require("../Controllers/Hospital.controller");

const HospitalRouter = require("express").Router();

// 1. Create user - Create account
HospitalRouter.post("/create", createHospital);

// 2. Get all doctors for the hospital
HospitalRouter.get("/:hospitalId/doctors", getDocbyHospitalId);

module.exports = HospitalRouter;
