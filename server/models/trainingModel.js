const mongoose = require("mongoose");
const trainingSchema = require("../schemas/trainingSchema");

const trainingModel = mongoose.model("trainingModel", trainingSchema);

module.exports = trainingModel;
