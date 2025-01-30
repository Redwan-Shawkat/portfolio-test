const express = require("express");
const {
  getProject,
  createProject,
} = require("../controllers/projectController");

const router = express.Router();

router.get("/", getProject);
router.post("/", createProject);

module.exports = router;
