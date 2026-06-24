/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login User
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Invalid credentials
 */



const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../controllers/validation/userValidation");

const signToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// REGISTER customer
// REGISTER customer 
const register = async (req, res, next) => {
  try {
    const { name, email, password, phoneNumber } = req.body;

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

    res.status(201).json({
      status: "success",
      data: user,
      redirectTo: "/login", // التحويل إلى صفحة تسجيل الدخول
    });
  } catch (error) {
    next(error);
  }
};

// LOGIN 
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

    // توجيه المستخدم للصفحة الرئيسية بعد تسجيل الدخول الناجح
    let redirectTo = "/"; 

    if (user.role === "super_admin") {
      redirectTo = "/dashboard";
    }

    res.status(200).json({
      status: "success",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      redirectTo, 
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };