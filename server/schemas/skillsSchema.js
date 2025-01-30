const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  language: [{ type: String, required: true }],
  framework: [{ type: String, required: true }],
  database: [{ type: String, required: true }],
  tools: [{ type: String, required: true }],
});

module.exports = skillSchema;
