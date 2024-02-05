const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const initiateDatabaseConnection = require("./dbConfig");

// Configuring ENV variables
require("dotenv").config();

const HTTP_SERVER = express();
const PORT = 5000;
const HOSTNAME = "0.0.0.0";

// Enable cors
HTTP_SERVER.use(cors());

// ENABLING BODYPARSER
HTTP_SERVER.use(parser.json());

// INJECT APP_SERVER
HTTP_SERVER.use("/", require("./app"));

// LISTENING TO SERVER
HTTP_SERVER.listen(PORT, HOSTNAME, () => {
  console.log(`Server started listening at ${PORT}`);
  initiateDatabaseConnection();
});
