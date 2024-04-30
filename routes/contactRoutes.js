// routes/contactRoutes.js

const express = require("express");
const router = express.Router();
const { addContact } = require("../controllers/contactController");

router.post("/addcontact", addContact);

module.exports = router;
