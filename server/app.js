require("dotenv").config();

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const express = require("express");
const app = express();

const morgan = require("morgan");
const cors = require("cors");

// =======================
// General Middlewares
// =======================

app.use(cors());
app.use(express.json());

// =======================
// Debug Logger (Temporary)
// =======================

app.use((req, res, next) => {
  console.log("APP =>", req.method, req.originalUrl);
  next();
});

// =======================
// DB
// =======================

const connectDB = require("./config/db");

// =======================
// Middlewares
// =======================

const globalErrorHandler = require("./middlewares/globalErrorHandler");

// =======================
// Routes
// =======================

const authRoutes = require("./routes/authRoutes");

const menuRoutes = require("./routes/menu.routes");
// Super Admin Routes
const dashboardRoutes = require("./routes/superAdmin/dashboardRoutes");
const customerRoutes = require("./routes/superAdmin/customerRoutes");
const driverRoutes = require("./routes/superAdmin/driverRoutes");
const restaurantAdminRoutes = require("./routes/superAdmin/restaurantAdminRoutes");
const restaurantRoutes = require("./routes/superAdmin/restaurantRoutes");

// =======================
// API Routes
// =======================
// Authentication
app.use("/api/auth", authRoutes);

// Menu
app.use("/api/menu", menuRoutes);

// ==========================
// Super Admin Modules
// ==========================

// Dashboard
app.use("/api/super-admin/dashboard", dashboardRoutes);

// Customers
app.use("/api/super-admin/customers", customerRoutes);

// Drivers
app.use("/api/super-admin/drivers", driverRoutes);

// Restaurant Admins
app.use("/api/super-admin/restaurant-admins", restaurantAdminRoutes);

// Restaurants
app.use("/api/super-admin/restaurants", restaurantRoutes);

// Logger (development only)
if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}

// =======================
// Database Connection
// =======================

connectDB();

// =======================
// Test Route
// =======================

app.get("/test", (req, res) => {
  res.json({
    msg: "API is working 🚀",
  });
});

// =======================
// Swagger
// =======================

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

// =======================
// 404 Handler
// =======================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// =======================
// Global Error Handler
// =======================

app.use(globalErrorHandler);

// =======================
// Start Server
// =======================

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});