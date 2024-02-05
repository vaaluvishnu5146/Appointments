const AppointmentModel = require("../Models/Appointment.model");

function createAppointment(req, res, next) {
  const payload = req.body;
  const Appointment = AppointmentModel(payload);

  Appointment.save()
    .then((response) => {
      if (response && response._id) {
        return res.status(201).json({
          success: true,
          message: "Appointment created successfully",
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

module.exports = {
  createAppointment,
};
