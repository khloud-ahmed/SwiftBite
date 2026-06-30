const User = require("../../models/user");
const Restaurant = require("../../models/restaurant");
const Order = require("../../models/order");

exports.getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({
      role: "customer",
    });

    const totalDrivers = await User.countDocuments({
      role: "driver",
    });

    const totalRestaurants = await Restaurant.countDocuments();

    const totalOrders = await Order.countDocuments();

    const deliveredOrders = await Order.countDocuments({
      status: "delivered",
    });

    const pendingOrders = await Order.countDocuments({
      status: "pending",
    });

    const revenue = await Order.aggregate([
      {
        $match: {
          status: "delivered",
        },
      },
      {
        $group: {
          _id: null,
          total: {
            $sum: "$totalPrice",
          },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: {
        totalUsers,
        totalDrivers,
        totalRestaurants,
        totalOrders,
        deliveredOrders,
        pendingOrders,
        revenue: revenue.length ? revenue[0].total : 0,
      },
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};