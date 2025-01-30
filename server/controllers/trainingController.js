const mongoose = require("mongoose");
const trainingModel = require("../models/trainingModel");

exports.getTraining = async (req, res) => {
  try {
    const training = await trainingModel.find();
    res.json(training);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.createTraining = async (req, res) => {
  try {
    const training = new trainingModel(req.body);
    await training.save();
    res.status(201).json(training);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
