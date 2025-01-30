const mongoose = require("mongoose");
const varsitySchema = require("../schemas/varsitySchema");

const varsityModel = mongoose.model("varsityModel", varsitySchema);

module.exports = varsityModel;
