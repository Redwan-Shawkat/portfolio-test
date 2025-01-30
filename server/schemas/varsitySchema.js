const mongoose = require("mongoose");

const varsitySchema = new mongoose.Schema({
  title: { type: String, required: true },
  institute: { type: String, required: true },
  department: { type: String, required: true },
  year: { type: String, required: true },
  duration: { type: String, required: true },
  result: { type: String, required: true },
});

module.exports = varsitySchema;
