const express = require("express");
const { getInfo, createInfo } = require("../controllers/infoController");

const router = express.Router();

router.get("/", getInfo);
router.post("/", createInfo);

module.exports = router;
