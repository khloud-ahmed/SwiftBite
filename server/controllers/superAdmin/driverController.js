const User = require("../../models/user");

/* ===========================
   Get All Drivers
=========================== */

exports.getAllDrivers = async (req, res) => {
  try {
    const drivers = await User.find({
      role: "driver",
    })
      .select("-password")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: drivers.length,
      data: drivers,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* ===========================
   Get Driver By Id
=========================== */

exports.getDriverById = async (req, res) => {
  try {
    const driver = await User.findOne({
      _id: req.params.id,
      role: "driver",
    }).select("-password");

    if (!driver) {
      return res.status(404).json({
        success: false,
        message: "Driver not found",
      });
    }

    res.status(200).json({
      success: true,
      data: driver,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* ===========================
   Update Driver
=========================== */

exports.updateDriver = async (req, res) => {
  try {
    const driver = await User.findOneAndUpdate(
      {
        _id: req.params.id,
        role: "driver",
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    if (!driver) {
      return res.status(404).json({
        success: false,
        message: "Driver not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Driver updated successfully",
      data: driver,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* ===========================
   Delete Driver
=========================== */

exports.deleteDriver = async (req, res) => {
  try {
    const driver = await User.findOne({
      _id: req.params.id,
      role: "driver",
    });

    if (!driver) {
      return res.status(404).json({
        success: false,
        message: "Driver not found",
      });
    }

    await driver.deleteOne();

    res.status(200).json({
      success: true,
      message: "Driver deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* ===========================
   Suspend / Activate Driver
=========================== */

exports.toggleDriverStatus = async (req, res) => {
  try {
    const driver = await User.findOne({
      _id: req.params.id,
      role: "driver",
    });

    if (!driver) {
      return res.status(404).json({
        success: false,
        message: "Driver not found",
      });
    }

    driver.isActive = !driver.isActive;

    await driver.save();

    res.status(200).json({
      success: true,
      message: driver.isActive
        ? "Driver activated successfully"
        : "Driver suspended successfully",
      data: driver,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};