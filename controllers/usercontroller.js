const User = require("../models/User");

const insertUser = async (request, response) => {
  try {
    const userData = request.body;
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      return response.status(400).send('User with this email already exists');
    }
    const newUser = new User(userData);
    await newUser.save();
    response.send('Registered Successfully');
  } catch (error) {
    console.error("Error inserting user:", error);
    response.status(500).send("Internal Server Error: " + error.message);
  }
};

const checkUserLogin = async (request, response) => {
  try {
    const input = request.body;
    const user = await User.findOne(input);
    if (!user) {
      return response.status(404).send("User not found");
    }
    response.json(user);
  } catch (error) {
    console.error("Error checking user login:", error);
    response.status(500).send("Internal Server Error: " + error.message);
  }
};

module.exports = { insertUser, checkUserLogin };
