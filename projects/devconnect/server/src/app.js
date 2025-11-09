console.log("mainhub devconnect project");
const express = require("express");
const app = express();
const connectDB = require("./config/database.js");
const cookieParser = require("cookie-parser");
const cors = require('cors');
//cant directly take in w/o converting to json

const jwt = require("jsonwebtoken");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());


const authRouter = require("./routes/auth.js");
const profileRouter = require("./routes/profile.js");
const requestRouter = require("./routes/request.js");
const userRouter = require("./routes/user.js");

//connection link to miniapplication
app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);
app.use("/", userRouter);


//success|error
connectDB()
  .then(() => {
    console.log("database connected");

    // Start server
    app.listen(9999, () => {
      console.log("Server is successfully listening on port 9999");
    });
  })
  .catch((err) => {
    console.log("database not connected");
  });
