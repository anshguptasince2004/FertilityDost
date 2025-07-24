const mongoose = require("mongoose");

const enrollSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female"], required: true },

});

module.exports = mongoose.model("Enroll", enrollSchema);
