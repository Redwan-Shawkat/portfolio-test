const express = require("express");
const projectModel = require("../models/projectModel");

exports.getProject = async (req, res) => {
  try {
    const project = await projectModel.find();
    res.status(200).json(project);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.createProject = async (req, res) => {
  try {
    const newProject = new projectModel(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
