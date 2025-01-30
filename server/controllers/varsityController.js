const mongoose = require("mongoose");
const varsityModel = require("../models/varsityModel");

exports.getVarsity = async (req, res) => {
  try {
    const varsity = await varsityModel.find();
    console.log("Varsity Info: ", varsity);
    res.status(200).json(varsity);
  } catch (e) {
    res.status(500).json({ message: "Error fetching varsity", e });
  }
};

exports.createVarsity = async (req, res) => {
  try {
    const newVarsity = new varsityModel(req.body);
    await newVarsity.save();
    res.status(201).json(newVarsity);
  } catch (e) {
    res.status(400).json({ message: "Error creating varsity", e });
  }
};
