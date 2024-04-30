const express = require("express");
const userController = require("../controllers/usercontroller");
const userRouter = express.Router();

// Define routes
userRouter.post("/insertuser", userController.insertUser); // Insert a new user
userRouter.post("/checkuserlogin", userController.checkUserLogin); // Check user login

module.exports = userRouter;
