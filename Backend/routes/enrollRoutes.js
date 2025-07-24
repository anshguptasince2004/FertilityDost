const express = require("express");
const router = express.Router();
const Enroll = require("../models/Enroll");

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, mobile, email, gender } = req.body;

    const newEntry = new Enroll({ firstName, lastName, mobile, email, gender });
    await newEntry.save();

    res.status(201).json({ message: "Your Enrollment submitted successfully." });
  } catch (error) {
    console.error("Error saving form data:", error.message);
    res.status(500).json({ error: "Something went wrong." });
  }
});

module.exports = router;