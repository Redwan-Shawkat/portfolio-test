const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  description: { type: String },
});

module.exports = experienceSchema;
