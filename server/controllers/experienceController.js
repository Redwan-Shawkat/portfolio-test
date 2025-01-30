const mongoose = require("mongoose");
const experienceModel = require("../models/experienceModel");

exports.getExperience = async (req, res) => {
  try {
    const experience = await experienceModel.find();
    res.status(200).json(experience);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.createExperience = async (req, res) => {
  try {
    const newExperience = new experienceModel(req.body);
    await newExperience.save();
    res.status(201).json(newExperience);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
