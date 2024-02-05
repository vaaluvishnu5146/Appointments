const { createAppointment } = require("../Controllers/Appointment.controller");

const AppointmentRouter = require("express").Router();

// 1. Create user - Create account
AppointmentRouter.post("/create", createAppointment);

// 2. Get all user
// 3. Get user by id
// 4. Update user
// 5. Delete user
// 6. Signin - Create session for user

module.exports = AppointmentRouter;
