require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/User");

const seedSuperAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");

    const existAdmin = await User.findOne({
      email: process.env.EMAIL_ADMIN,
      role: "super_admin",
    });

    if (existAdmin) {
      console.log("Super Admin already exists");
      return;
    }

    const admin = await User.create({
      username: "Super Admin",
      email: process.env.EMAIL_ADMIN,
      password: process.env.PASSWORD_ADMIN,
      role: "super_admin",
      phoneNumber: process.env.PHONE_ADMIN || "00000000000",
    });

    console.log("Super Admin Created:", admin.email);
  } catch (error) {
    console.log("Seed Error:", error.message);
  } finally {
    await mongoose.connection.close();
    console.log("DB Closed");
    process.exit(0);
  }
};

seedSuperAdmin();