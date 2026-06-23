const mongoose = require("mongoose");

const connectedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Error:", error.message);
  }
};

module.exports = connectedDB;