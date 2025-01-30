const mongoose = require("mongoose");
const skillSchema = require("../schemas/skillsSchema");

const skillModel = mongoose.model("skillModel", skillSchema);

module.exports = skillModel;
