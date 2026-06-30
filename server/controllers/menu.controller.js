const MenuItem = require("../models/menueItem"); // غيري الاسم لو اسم الملف مختلف

// ==========================================
// Create Menu Item
// ==========================================

exports.createMenuItem = async (req, res) => {
  try {
    const {
      restaurantId,
      name,
      description,
      category,
      price,
      isAvailable,
      image,
      preparationTime,
    } = req.body;

    if (!restaurantId || !name || !category || !price) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields.",
      });
    }

    const menuItem = await MenuItem.create({
      restaurantId,
      name,
      description,
      category,
      price,
      isAvailable,
      image,
      preparationTime,
    });

    res.status(201).json({
      success: true,
      message: "Menu item created successfully.",
      data: menuItem,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================================
// Get All Menu Items For Restaurant
// ==========================================

exports.getRestaurantMenu = async (req, res) => {
  try {

    const { restaurantId } = req.params;

    const menuItems = await MenuItem.find({
      restaurantId,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: menuItems.length,
      data: menuItems,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ==========================================
// Test Route
// ==========================================

exports.testMenu = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Menu Route Works Successfully 🚀",
  });
};