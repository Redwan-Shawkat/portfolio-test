const mongoose = require("mongoose");
const experienceSchema = require("../schemas/experienceSchema");

const experienceModel = mongoose.model("experienceModel", experienceSchema);

module.exports = experienceModel;
