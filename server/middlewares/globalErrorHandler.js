const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  console.error("🔥 Error:", err.message);

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",

    // show stack only in development
    stack: process.env.NODE_ENV === "dev" ? err.stack : undefined,
  });
};

module.exports = globalErrorHandler;