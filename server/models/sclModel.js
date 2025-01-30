const mongoose = require("mongoose");
const sclSchema = require("../schemas/sclSchema");

const sclModel = mongoose.model("sclModel", sclSchema);

module.exports = sclModel;
