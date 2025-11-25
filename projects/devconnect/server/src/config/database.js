const mongoose = require("mongoose");

//connect db
const connectDB = async () => {
  await mongoose.connect(process.env.DB_CONNECTION_SECRET);
};

module.exports = connectDB;
