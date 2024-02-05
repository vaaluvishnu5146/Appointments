const DoctorModel = require("../Models/Doctor.model");

function createDoctor(req, res, next) {
  const payload = req.body;
  const doctor = DoctorModel(payload);

  doctor
    .save()
    .then((response) => {
      if (response && response._id) {
        return res.status(201).json({
          success: true,
          message: "Doctor created successfully",
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
function getAllDocs(req, res, next) {
  DoctorModel.find()
    .then((response) => {
      if (response && response.length > 0) {
        return res.status(201).json({
          success: true,
          data: response,
          message: "Doctors fetched successfully",
          length: response.length,
        });
      } else {
        return res.status(500).json({
          success: true,
          message: "No Doctors found",
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
function getDocbyId(req, res, next) {
  const { docId = "" } = req.params;
  DoctorModel.findOne({ _id: docId })
    .then((response) => {
      if (response && response._id) {
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
  createDoctor,
  getAllDocs,
  getDocbyId,
};
