const User = require("../models/User");
const { createUserSchema } = require("./validation/userValidation");

// CREATE USER (by super admin only)
const createUser = async (req, res) => {
  try {
    const { error, value } = createUserSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        msg: error.details.map((e) => e.message),
      });
    }

    const exist = await User.findOne({ email: value.email });

    if (exist) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const user = await User.create({
      ...value,
      role: value.role || "customer",
    });

    res.status(201).json({
      msg: "User created successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = createUser;