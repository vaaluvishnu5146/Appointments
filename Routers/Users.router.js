const {
  createUserAccount,
  signInUser,
} = require("../Controllers/Users.controller");
const { signinWithNamespace } = require("../Middlewares/NamespaceShield");

const UsersRouter = require("express").Router();

// 1. Create user - Create account
UsersRouter.post("/create", createUserAccount);

// 2. Signin - Create session for user
UsersRouter.post("/login", signinWithNamespace, signInUser);

// 2. Get all user
// 3. Get user by id
// 4. Update user
// 5. Delete user

module.exports = UsersRouter;
