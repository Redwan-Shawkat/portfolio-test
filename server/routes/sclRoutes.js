const express = require("express");
const { getSchool, createSchool } = require("../controllers/sclController");

const router = express.Router();

router.get("/", getSchool);
router.post("/", createSchool);

module.exports = router;
