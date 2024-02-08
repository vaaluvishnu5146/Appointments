const {
  createDoctor,
  getAllDocs,
  getDocbyId,
  getDocSlotsAvailable,
} = require("../Controllers/Doctor.controller");
const { getDocbyHospitalId } = require("../Controllers/Hospital.controller");

const DoctorRouter = require("express").Router();

// 1. Create user - Create account
DoctorRouter.post("/create", createDoctor);

// 2. Get all Doctors
DoctorRouter.get("/", getAllDocs);
// 3. Get Doctor by id
DoctorRouter.get("/:docId", getDocbyId);
// 4. Get doctor for particular hospital
DoctorRouter.get("/hospital/:hospitalId/", getDocbyHospitalId);
// 5. Get doctor slots
DoctorRouter.post("/slots/", getDocSlotsAvailable);

module.exports = DoctorRouter;
