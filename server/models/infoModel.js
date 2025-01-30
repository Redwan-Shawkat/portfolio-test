const mongoose = require("mongoose");
const infoSchema = require("../schemas/infoSchema");

const infoModel = mongoose.model("infoModel", infoSchema);

module.exports = infoModel;
