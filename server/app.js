require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const express = require("express");
const app = express();

const morgan = require("morgan");
const cors = require("cors");
app.use(cors()); // قبل الـ Routes بتاعتك

// DB
const connectDB = require("./config/db");

// Middlewares
const globalErrorHandler = require("./middlewares/globalErrorHandler");

// Routes
const authRoutes = require("./routes/authRoutes");
const superAdminRoutes = require("./routes/superAdminRoutes");

// =======================
// 🔗 Middlewares General
// =======================

app.use(express.json());


// Logger (development only)
if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

// =======================
// 📦 DB Connection
// =======================
connectDB();

// =======================
// 🧪 Test Route
// =======================
app.get("/test", (req, res) => {
  res.json({ msg: "API is working 🚀" });
});
//swager
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

// =======================
// 🔐 Routes
// =======================

app.use("/api/auth", authRoutes);
app.use("/api/super-admin", superAdminRoutes);

// =======================
// ❌ 404 Handler (IMPORTANT FIX)
// =======================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// =======================
// ⚠️ Global Error Handler
// =======================

app.use(globalErrorHandler);

// =======================
// 🚀 Server
// =======================

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});