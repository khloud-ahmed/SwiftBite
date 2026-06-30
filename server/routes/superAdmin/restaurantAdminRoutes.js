const express = require("express");
const router = express.Router();

const protect = require("../../middlewares/authMiddleware");
const authorize = require("../../middlewares/authorize");

const {
  getAllRestaurantAdmins,
  getRestaurantAdminById,
  updateRestaurantAdmin,
  deleteRestaurantAdmin,
  toggleRestaurantAdminStatus,
} = require("../../controllers/superAdmin/restaurantAdminController");

router.use(protect);
router.use(authorize("super_admin"));

router.get("/", getAllRestaurantAdmins);

router.get("/:id", getRestaurantAdminById);

router.put("/:id", updateRestaurantAdmin);

router.delete("/:id", deleteRestaurantAdmin);

router.patch("/:id/status", toggleRestaurantAdminStatus);

module.exports = router;