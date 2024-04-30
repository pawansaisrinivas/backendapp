const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const dbUrl = "mongodb+srv://Admin:<password>@cluster0.0mslnwk.mongodb.net/sdpproject13?retryWrites=true&w=majority";
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to DB Successfully");
    }).catch((err) => {
        console.error("Error connecting to DB:", err.message);
    });

const app = express();
app.use(cors());
app.use(express.json()); // to parse JSON data

// Require routes
const adminRouter = require("./routes/adminRoutes");
const userRouter = require("./routes/userRoutes");
const contactRoutes = require("./routes/contactRoutes");

// Use routes
app.use("/admin", adminRouter); // Admin routes
app.use("/user", userRouter); // User routes
app.use("/contact", contactRoutes); // Contact routes

const port = process.env.PORT || 2014; // Allow using environment port or default 2014
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
});
