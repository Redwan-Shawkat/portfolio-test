const mongoose = require("mongoose");
const sclModel = require("../models/sclModel");

exports.getSchool = async (req, res) => {
  try {
    const school = await sclModel.find();
    res.status(200).json(school);
  } catch (e) {
    res.status(500).json({ message: "Error fetching school", e });
  }
};

exports.createSchool = async (req, res) => {
  try {
    const newSchool = new sclModel(req.body);
    await newSchool.save();
    res.status(201).json(newSchool);
  } catch (e) {
    res.status(400).json({ message: "Error creating school", e });
  }
};
