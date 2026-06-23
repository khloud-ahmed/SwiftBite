const express = require("express");
const router = express.Router();

const createUser = require("../controllers/user.controller");

// Create user (ONLY SUPER ADMIN)
router.post("/", createUser);

module.exports = router;