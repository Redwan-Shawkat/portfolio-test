const express = require("express");
const { getSkill, createSkill } = require("../controllers/skillController");

const router = express.Router();

router.get("/", getSkill);
router.post("/", createSkill);

module.exports = router;
