const express = require("express");
const {
  getExperience,
  createExperience,
} = require("../controllers/experienceController");

const router = express.Router();

router.get("/", getExperience);

router.post("/", createExperience);

module.exports = router;
