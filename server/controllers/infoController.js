const infoModel = require("../models/infoModel");

exports.getInfo = async (req, res) => {
  try {
    const info = await infoModel.find();
    res.status(200).json(info);
  } catch (e) {
    res.status(500).json({ message: "Error fetching info", e });
  }
};

exports.createInfo = async (req, res) => {
  try {
    const newInfo = new infoModel(req.body);
    await newInfo.save();
    res.status(201).json(newInfo);
  } catch (e) {
    res.status(500).json({ message: "Error creating info", e });
  }
};
