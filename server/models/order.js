const mongoose = require("mongoose");


const orderItemSchema = new mongoose.Schema({
  menuItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MenuItem",
    required: [true, "Menu Item ID is Required"],
  },
  name: {
    type: String,
    required: [true, "Item name is Required"],
    trim: true,
  },
  priceAtOrder: {
    type: Number,
    required: [true, "Price at order is Required"],
    min: [0, "Price cannot be negative"],
  },
  quantity: {
    type: Number,
    required: [true, "Quantity is Required"],
    min: [1, "Quantity must be at least 1"],
  },
});


const orderSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Customer ID is Required"],
    },

    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: [true, "Restaurant ID is Required"],
    },

    driverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null, 
    },

    items: {
      type: [orderItemSchema],
      validate: {
        validator: function (val) {
          return val && val.length > 0;
        },
        message: "Order must contain at least one item",
      },
    },

    status: {
      type: String,
      enum: {
        values: ["placed", "accepted", "preparing", "ready", "picked_up", "delivered", "cancelled"],
        message: "{VALUE} is not a valid order status",
      },
      default: "placed",
    },

    totalPrice: {
      type: Number,
      required: [true, "Total price is Required"],
      min: [0, "Total price cannot be negative"],
    },

    deliveryAddress: {
      type: String,
      required: [true, "Delivery address is Required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;