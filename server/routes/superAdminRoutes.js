const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/authMiddleware");
const authorize = require("../middlewares/authorize");

const User = require("../models/User");
const Restaurant = require("../models/Restaurant");


router.use(authMiddleware);
router.use(authorize("super_admin"));


router.post("/create-driver", async (req, res) => {
  const { username, email, password, phoneNumber } = req.body;

  const driver = await User.create({
    username,
    email,
    password,
    phoneNumber,
    role: "driver",
  });

  res.json({
    message: "Driver created",
    driver,
  });
});


router.post("/create-restaurant-admin", async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phoneNumber,
      restaurantName,
    } = req.body;

    const user = await User.create({
      name,
      email,
      password,
      phoneNumber,
      role: "restaurant_admin",
    });

    const restaurant = await Restaurant.create({
      ownerId: user._id,
      name: restaurantName,
      cuisineTags: ["General"],
      location: {
        type: "Point",
        coordinates: [31.2357, 30.0444],
      },
    });

    res.status(201).json({
      message: "Restaurant admin created",
      user,
      restaurant,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


router.get("/users", async (req, res) => {
  const users = await User.find().select("-password");

  res.json(users);
});

module.exports = router;