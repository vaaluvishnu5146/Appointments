const mongoose = require("mongoose");

function initiateDatabaseConnection() {
  mongoose
    .connect("mongodb://localhost:27017/ump")
    .then((response) => {
      if (response.connections.length > 0) {
        console.log("Database connection succesfull");
      }
    })
    .catch((error) => {
      if (error) {
        console.log("Error connecting database", error);
      }
    });
}

module.exports = initiateDatabaseConnection;
