const express = require("express");
const APP_SERVER = express();

// INJECT ALL THE ROUTERS
APP_SERVER.use("/api/auth", require("./Routers/Users.router"));
APP_SERVER.use("/api/hospital", require("./Routers/Hospital.router"));
APP_SERVER.use("/api/doctor", require("./Routers/Doctor.router"));
APP_SERVER.use("/api/appointment", require("./Routers/Appointment.router"));

module.exports = APP_SERVER;
