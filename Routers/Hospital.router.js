const {
  createHospital,
  getDocbyHospitalId,
  getAllHospitals,
} = require("../Controllers/Hospital.controller");

const HospitalRouter = require("express").Router();

// 1. Create user - Create account
HospitalRouter.post("/create", createHospital);

// 2. Get all doctors for the hospital
HospitalRouter.get("/:hospitalId/doctors", getDocbyHospitalId);

// 3. Get all doctors for the hospital
HospitalRouter.get("/all", getAllHospitals);

module.exports = HospitalRouter;
