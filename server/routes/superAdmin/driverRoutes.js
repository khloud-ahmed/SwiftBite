const express = require("express");
const router = express.Router();

const protect = require("../../middlewares/authMiddleware");
const authorize = require("../../middlewares/authorize");

const {
  getAllDrivers,
  getDriverById,
  updateDriver,
  deleteDriver,
  toggleDriverStatus,
} = require("../../controllers/superAdmin/driverController");

router.use(protect);
router.use(authorize("super_admin"));

router.get("/", getAllDrivers);

router.get("/:id", getDriverById);

router.put("/:id", updateDriver);

router.delete("/:id", deleteDriver);

router.patch("/:id/status", toggleDriverStatus);

module.exports = router;