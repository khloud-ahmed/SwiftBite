const express = require("express");
const router = express.Router();

const protect = require("../../middlewares/authMiddleware");
const authorize = require("../../middlewares/authorize");

const {
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
  toggleCustomerStatus,
} = require("../../controllers/superAdmin/customerController");

router.use(protect);
router.use(authorize("super_admin"));

router.get("/", getAllCustomers);

router.get("/:id", getCustomerById);

router.put("/:id", updateCustomer);

router.delete("/:id", deleteCustomer);

router.patch("/:id/status", toggleCustomerStatus);

module.exports = router;