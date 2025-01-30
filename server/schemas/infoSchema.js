const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: String, required: true },
  iconsLink: [
    {
      platform: { type: String, required: true },
      url: { type: String, required: true },
    },
  ],
  image: { type: String },
});

module.exports = infoSchema;
