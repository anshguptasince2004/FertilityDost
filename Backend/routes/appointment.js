const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Appointment = require("../models/Appointment");


router.post("/book", auth, async (req, res) => {
  try {
    const { firstName, lastName, mobile, email, gender, callType, slotDate, slotTime } = req.body;

    const newAppointment = new Appointment({
      userId: req.user.id,
      firstName,
      lastName,
      mobile,
      email,
      gender,
      callType,
      slotDate,
      slotTime,
    });

    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully" });

  } catch (err) {
    console.error("Appointment booking error:", err.message);
    res.status(500).json({ error: "Server error while booking appointment" });
  }
});

module.exports = router;