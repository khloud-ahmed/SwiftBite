const Order = require("../../models/order");

/* ===========================
   Get All Orders
=========================== */

exports.getAllOrders = async (req, res) => {
  try {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const filter = {};

    if (req.query.status) {
      filter.status = req.query.status;
    }

    const orders = await Order.find(filter)

      .populate("customerId", "name email")

      .populate("restaurantId", "name")

      .populate("driverId", "name")

      .sort({ createdAt: -1 })

      .skip(skip)

      .limit(limit);

    const total = await Order.countDocuments(filter);

    res.status(200).json({

      success: true,

      page,

      totalPages: Math.ceil(total / limit),

      totalOrders: total,

      data: orders,

    });

  } catch (err) {

    res.status(500).json({

      success: false,

      message: err.message,

    });

  }
};
/* ===========================
   Get Order By Id
=========================== */

exports.getOrderById = async (req, res) => {

  try {

    const order = await Order.findById(req.params.id)

      .populate("customerId", "name email phoneNumber")

      .populate("restaurantId", "name")

      .populate("driverId", "name phoneNumber");

    if (!order) {

      return res.status(404).json({

        success: false,

        message: "Order not found",

      });

    }

    res.status(200).json({

      success: true,

      data: order,

    });

  } catch (err) {

    res.status(500).json({

      success: false,

      message: err.message,

    });

  }
};
/* ===========================
   Update Order Status
=========================== */

exports.updateOrderStatus = async (req, res) => {
  try {

    const { status } = req.body;

    const allowedStatus = [
      "placed",
      "accepted",
      "preparing",
      "ready",
      "picked_up",
      "delivered",
      "cancelled",
    ];

    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid order status",
      });
    }

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    order.status = status;

    await order.save();

    res.status(200).json({
      success: true,
      message: "Order status updated successfully",
      data: order,
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};


/* ===========================
   Delete Order
=========================== */

exports.deleteOrder = async (req, res) => {

  try {

    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    await order.deleteOne();

    res.status(200).json({
      success: true,
      message: "Order deleted successfully",
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};


/* ===========================
   Get Orders By Status
=========================== */

exports.getOrdersByStatus = async (req, res) => {

  try {

    const orders = await Order.find({
      status: req.params.status,
    })
      .populate("customerId", "name")
      .populate("restaurantId", "name")
      .populate("driverId", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};


/* ===========================
   Today's Orders
=========================== */

exports.getTodayOrders = async (req, res) => {

  try {

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const orders = await Order.find({
      createdAt: {
        $gte: today,
      },
    });

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};


/* ===========================
   Recent Orders
=========================== */

exports.getRecentOrders = async (req, res) => {

  try {

    const orders = await Order.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("customerId", "name")
      .populate("restaurantId", "name")
      .populate("driverId", "name");

    res.status(200).json({
      success: true,
      data: orders,
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};
/* ===========================
   search Order
=========================== */
exports.searchOrders = async (req, res) => {

  try {

    const keyword = req.query.keyword || "";

    const orders = await Order.find()

      .populate({
        path: "customerId",
        match: {
          name: {
            $regex: keyword,
            $options: "i",
          },
        },
        select: "name email",
      })

      .populate("restaurantId", "name")

      .populate("driverId", "name");

    const filtered = orders.filter(
      (o) => o.customerId !== null
    );

    res.status(200).json({

      success: true,

      count: filtered.length,

      data: filtered,

    });

  } catch (err) {

    res.status(500).json({

      success: false,

      message: err.message,

    });

  }

};