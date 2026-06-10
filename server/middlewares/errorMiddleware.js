const globalErrorHandler = (err, req, res, next) => {

  const statusCode = err.statusCode || 500;
  const status = err.status || "error";

  console.error("Error Hooked Successfully:", err.message);

  res.status(statusCode).json({
    status: status,
    msg: err.message || "Internal Server Error",
 
    stack: process.env.NODE_ENV === "dev" ? err.stack : undefined
  });
};

module.exports = globalErrorHandler;