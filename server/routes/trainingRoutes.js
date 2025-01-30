const express = require("express");
const {
  getTraining,
  createTraining,
} = require("../controllers/trainingController");

const router = express.Router();

router.get("/", getTraining);

router.post("/", createTraining);

module.exports = router;
