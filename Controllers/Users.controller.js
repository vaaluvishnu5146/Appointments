const UserModel = require("../Models/User.model");

function createUserAccount(req, res, next) {
  const payload = req.body;
  const User = UserModel(payload);

  User.save()
    .then((response) => {
      if (response && response._id) {
        return res.status(201).json({
          success: true,
          message: "User created successfully",
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
  createUserAccount,
};
