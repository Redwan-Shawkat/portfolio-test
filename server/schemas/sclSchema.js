const mongoose = require("mongoose");

const sclSchema = new mongoose.Schema({
  title: { type: String, required: true },
  institute: { type: String, required: true },
  board: { type: String, required: true },
  group: { type: String, required: true },
  year: { type: String, required: true },
  result: { type: String, required: true },
});

module.exports = sclSchema;
