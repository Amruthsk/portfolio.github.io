const mongoose = require("mongoose");

//connect db
const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://Node_db_user:CLnpRVFJUi966gvs@nodecluster.ztj1nyo.mongodb.net/devconnect"
  );
};

module.exports = connectDB;
