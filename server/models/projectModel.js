const mongoose = require("mongoose");
const projectSchema = require("../schemas/projectSchema");

const projectModel = mongoose.model("projectModel", projectSchema);

module.exports = projectModel;
