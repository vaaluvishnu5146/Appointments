const DoctorModel = require("../Models/Doctor.model");
const HospitalModel = require("../Models/Hospital.model");

function createHospital(req, res, next) {
  const payload = req.body;
  const hospital = HospitalModel(payload);

  hospital
    .save()
    .then((response) => {
      if (response && response._id) {
        return res.status(201).json({
          success: true,
          message: "Hospital created successfully",
        });
      } else {
        return res.status(500).json({
          success: false,
          message: "Something went wrong",
        });
      }
    })
    .catch((error) => {
      if (error) {
        console.log(error);
        return res.status(400).json({
          success: false,
          message: "Something went wrong",
          error: error,
        });
      }
    });
}

function getDocbyHospitalId(req, res, next) {
  const { hospitalId = "" } = req.params;
  DoctorModel.find({ workingFor: { $elemMatch: { $in: hospitalId } } })
    .then((response) => {
      if (response && response.length > 0) {
        return res.status(201).json({
          success: true,
          data: response,
          message: "Doctor fetched successfully",
        });
      } else {
        return res.status(500).json({
          success: true,
          message: "No Doctor found",
        });
      }
    })
    .catch((error) => {
      if (error) {
        return res.status(400).json({
          success: false,
          message: "Something went wrong",
          error: error,
        });
      }
    });
}

module.exports = {
  createHospital,
  getDocbyHospitalId,
};
