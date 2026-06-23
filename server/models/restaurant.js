const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    cuisineTags: {
      type: [String],
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
      },
      coordinates: {
        type: [Number],
        required: true,
        validate: {
          validator: function (val) {
            return (
              val.length === 2 &&
              val[0] >= -180 &&
              val[0] <= 180 &&
              val[1] >= -90 &&
              val[1] <= 90
            );
          },
          message: "Invalid coordinates",
        },
      },
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
  },
  { timestamps: true }
);

restaurantSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Restaurant", restaurantSchema);