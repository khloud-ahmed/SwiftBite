require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const morgan = require("morgan");
const globalErrorHandler = require("./middlewares/errorMiddleware");

const authRoute = require("./routes/authRoutes"); 

app.use(express.json());

// simple logger 
if(process.env.NODE_ENV === "dev"){
  app.use(morgan("dev"));
}
app.use(morgan("dev"));

app.get("/test", (req, res) => {
    res.json({msg: "Test route"})
});

const connectDB = require("./config/db");
connectDB();



app.use("/api/auth", authRoute); 

app.use(globalErrorHandler);
app.use((err, req, res, next) => {
  console.error(" Error Hooked:", err.message);
  res.status(err.status || 500).json({
    status: "error",
    msg: err.message || "Internal Server Error",
  });
});

const port = process.env.PORT || 3000; 

app.listen(port, () => {
     console.log(`server is running  ${port}`);
});