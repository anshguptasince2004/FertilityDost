const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Enroll = require("../models/Enroll");
const Appointment = require("../models/Appointment");
const User = require("../models/User");
const adminAuth = require("../Middleware/admin");

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.role !== "admin") {
      return res.status(401).json({ error: "Unauthorized: Not an admin" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ token });
  } catch (err) {
    console.error("Admin login error:", err.message);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/enrollments", adminAuth, async (req, res) => {
  const enrollments = await Enroll.find().sort({ _id: -1 });
  res.json(enrollments);
});

router.get("/appointments", adminAuth, async (req, res) => {
  const appointments = await Appointment.find().sort({ _id: -1 });
  res.json(appointments);
});

module.exports = router;
