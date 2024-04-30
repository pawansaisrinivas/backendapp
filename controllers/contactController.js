// controllers/contactController.js

const Contact = require("../models/Contact");

const addContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({
      name,
      email,
      message,
    });
    await contact.save();
    res.status(200).send("Contact added successfully");
  } catch (error) {
    console.error("Error adding contact:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { addContact };
