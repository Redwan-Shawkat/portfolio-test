const mongoose = require("mongoose");

exports.getSkill = async (req, res) => {
  try {
    const skill = await skillModel.find();
    res.status(200).json(skill);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.createSkill = async (req, res) => {
  try {
    const newSkill = new skillModel(req.body);
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
