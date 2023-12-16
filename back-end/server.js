const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");

    app.get("/", (req, res) => {
      res.send("Welcome to the eCommerce backend!");
    });

    // routes
    app.use("/api", taskRoutes);
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
