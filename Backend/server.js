const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const enrollRoutes = require("./routes/enrollRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/enroll", enrollRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("MongoDB connection error:", err.message));
