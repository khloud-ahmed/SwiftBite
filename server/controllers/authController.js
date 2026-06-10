const User = require("../models/User");
const Restaurant = require("../models/Restaurant");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("./validation/authValidation");

const signToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const register = async (req, res, next) => {
  try {
    //check if put role or not ✨✨
    const { name, email, password, role } = req.body;

    const result = registerValidation(req.body);
    if (result.error) {
      return res.status(400).json({ msg: result.error.details[0].message });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "Account already exists" });
    }
//same like upper ✨✨
    const userRole = role || "customer";

    const user = await User.create({
      name,
      email,
      password,
      //✨✨
      role: userRole,
     
      
    });
//✨✨
    if (userRole === "restaurant_admin") {
      if (!restaurantName) {
        return res.status(400).json({ msg: "Restaurant name is required for restaurant administrators" });
      }
      
      await Restaurant.create({
        ownerId: user._id,
        name: restaurantName,
        cuisineTags: ["General"],
        location: {
          type: "Point",
          coordinates: [31.2357, 30.0444]
        }
      });
    }

    const token = signToken(user._id, user.role);

    res.status(201).json({
      status: "success",
      message: "Account created successfully",
      token,
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (error) {
    next(error); 
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const result = loginValidation(req.body);
    if (result.error) {
      return res.status(400).json({ msg: result.error.details[0].message });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }
//✨✨
    const token = signToken(user._id, user.role);

    let restaurantId = null;
    if (user.role === "restaurant_admin") {
      const restaurant = await Restaurant.findOne({ ownerId: user._id });
      if (restaurant) restaurantId = restaurant._id;
    }

    res.status(200).json({
      status: "success",
      message: "Logged in successfully",
      token,
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          //✨✨
          role: user.role,
        },
        restaurantId: restaurantId 
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };