const User = require("../../models/user");
const Restaurant = require("../../models/restaurant");

/* ===========================
   Get All Restaurant Admins
=========================== */

exports.getAllRestaurantAdmins = async (req, res) => {
  try {
    const admins = await User.find({
      role: "restaurant_admin",
    }).select("-password");

    const data = await Promise.all(
      admins.map(async (admin) => {
        const restaurant = await Restaurant.findOne({
          ownerId: admin._id,
        });

        return {
          ...admin.toObject(),
          restaurant,
        };
      })
    );

    res.status(200).json({
      success: true,
      count: data.length,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* ===========================
   Get Restaurant Admin By Id
=========================== */

exports.getRestaurantAdminById = async (req, res) => {
  try {
    const admin = await User.findOne({
      _id: req.params.id,
      role: "restaurant_admin",
    }).select("-password");

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Restaurant admin not found",
      });
    }

    const restaurant = await Restaurant.findOne({
      ownerId: admin._id,
    });

    res.status(200).json({
      success: true,
      data: {
        ...admin.toObject(),
        restaurant,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* ===========================
   Update Restaurant Admin
=========================== */

exports.updateRestaurantAdmin = async (req, res) => {
  try {
    const admin = await User.findOneAndUpdate(
      {
        _id: req.params.id,
        role: "restaurant_admin",
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Restaurant admin not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Restaurant admin updated successfully",
      data: admin,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* ===========================
   Delete Restaurant Admin
=========================== */

exports.deleteRestaurantAdmin = async (req, res) => {
  try {
    const admin = await User.findOne({
      _id: req.params.id,
      role: "restaurant_admin",
    });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Restaurant admin not found",
      });
    }

    // حذف المطعم المرتبط به
    await Restaurant.findOneAndDelete({
      ownerId: admin._id,
    });

    await admin.deleteOne();

    res.status(200).json({
      success: true,
      message: "Restaurant admin deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/* ===========================
   Suspend / Activate Restaurant Admin
=========================== */

exports.toggleRestaurantAdminStatus = async (req, res) => {
  try {
    const admin = await User.findOne({
      _id: req.params.id,
      role: "restaurant_admin",
    });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Restaurant admin not found",
      });
    }

    admin.isActive = !admin.isActive;

    await admin.save();

    res.status(200).json({
      success: true,
      message: admin.isActive
        ? "Restaurant admin activated successfully"
        : "Restaurant admin suspended successfully",
      data: admin,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};