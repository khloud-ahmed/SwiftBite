const express = require("express");
const { register, login } = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

//just for testing
router.get("/me", authMiddleware, (req, res) => {

  res.status(200).json({
    status: "success",
    data: {
      userId: req.user.id,
      role: req.user.role
    }
  });
});

module.exports = router;