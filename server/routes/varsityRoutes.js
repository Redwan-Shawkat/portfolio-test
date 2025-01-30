const express = require("express");
const {
  getVarsity,
  createVarsity,
} = require("../controllers/varsityController");

const router = express.Router();

router.get("/", getVarsity);

router.post("/", createVarsity);

module.exports = router;
