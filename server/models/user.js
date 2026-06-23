const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phoneNumber: { type: String, required: true },
    password: { type: String, required: true, select: false, minlength: 6 },
    role: {
      type: String,
      enum: ["customer", "driver", "restaurant_admin", "super_admin"],
      default: "customer",
    },
    isActive: { type: Boolean, default: true },
    isOnline: { type: Boolean, default: false },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;