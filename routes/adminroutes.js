// //admin routes
// const admincontroller = require("../controllers/admincontroller")

// const express = require("express")
// const adminrouter  = express.Router()


// adminrouter.get("/viewusers",admincontroller.viewusers)
// adminrouter.delete("/deleteusers/:email",admincontroller.deleteusers)
// adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)
// adminrouter.post("/addusers",admincontroller.addusers)

// module.exports = adminrouter

const express = require("express");
const admincontroller = require("../controllers/admincontroller");
const adminrouter = express.Router();

// Define routes
adminrouter.get("/viewusers", admincontroller.viewusers); // View all users
adminrouter.delete("/deleteusers/:email", admincontroller.deleteusers); // Delete user by email
adminrouter.post("/checkadminlogin", admincontroller.checkadminlogin); // Check admin login
adminrouter.post("/addusers", admincontroller.addusers); // Add a new user

module.exports = adminrouter;
