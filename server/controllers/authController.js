const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } =
  require("../controllers/validation/userValidation");
  

const signToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// REGISTER customer for only customer
const register = async (req, res, next) => {
  try {
    const { name, email, password,phoneNumber} = req.body;
// prevent creatien if there is an error
    const { error } = registerValidation(req.body);
    if (error) {
      return res.status(400).json({ msg: error.details[0].message });
    }

    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const user = await User.create({
      name,
      email,
      password,
      phoneNumber,
      role: "customer",
    });

    const token = signToken(user._id, user.role);

    res.status(201).json({
      status: "success",
      token,
      data: user,
      redirectTo: "/home",
    });
  } catch (error) {
    next(error);
  }
};

// LOGIN (all roles)
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { error } = loginValidation(req.body);
    if (error) {
      return res.status(400).json({ msg: error.details[0].message });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = signToken(user._id, user.role);

    let redirectTo = "/";

    switch (user.role) {
      case "super_admin":
        redirectTo = "/dashboard";
        break;
      case "restaurant_admin":
        redirectTo = "/restaurant-dashboard";
        break;
      case "driver":
        redirectTo = "/driver-dashboard";
        break;
      default:
        redirectTo = "/home";
    }

    res.status(200).json({
      status: "success",
      token,
      user,
      redirectTo,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };