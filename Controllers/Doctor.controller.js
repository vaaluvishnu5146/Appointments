const AppointmentModel = require("../Models/Appointment.model");
const DoctorModel = require("../Models/Doctor.model");
const { generateTimeSlots } = require("../utils/Time");

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

async function getDocSlotsAvailable(req, res, next) {
  const { appointmentDate = "", doctorId = "" } = req.body;
  const Appointments = await AppointmentModel.find({
    appointmentDate: appointmentDate,
    doctorId: doctorId,
  });
  const slotsAvailableEveryDay = generateTimeSlots([
    { startTime: "10:00", endTime: "14:00" },
    { startTime: "16:00", endTime: "17:00" },
  ]);
  const timeSlotsBookedAlready = Appointments.map(
    (appointment, index) => appointment.timeSlot
  );
  const balanceSlotsAvailable = [];

  slotsAvailableEveryDay.forEach((slot) => {
    if (timeSlotsBookedAlready.indexOf(slot) < 0) {
      balanceSlotsAvailable.push(slot);
    }
  });

  console.log(
    slotsAvailableEveryDay,
    timeSlotsBookedAlready,
    balanceSlotsAvailable
  );
  return res.status(200).json({
    message: "Success",
  });
}

module.exports = {
  createDoctor,
  getAllDocs,
  getDocbyId,
  getDocSlotsAvailable,
};
