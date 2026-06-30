const express = require("express");
const router = express.Router();

const protect = require("../../middlewares/authMiddleware");
const authorize = require("../../middlewares/authorize");

const {
  getDashboardStats,
} = require("../../controllers/superAdmin/dashboardController");

router.get(
  "/",
  protect,
  authorize("super_admin"),
  getDashboardStats
);

module.exports = router;