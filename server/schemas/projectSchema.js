const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  repository: { type: String, required: true },
  video: { type: String, required: true },
  live: { type: String, required: true },
});

module.exports = projectSchema;
