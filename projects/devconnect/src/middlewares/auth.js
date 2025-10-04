// const adminAuth = (req, res, next) => {
//   console.log("Authentication start");
//   const adminToken = "xye";
//   const isAdminAuthorized = adminToken === "xyz";

//   if (!isAdminAuthorized) {
//     res.status(401).send("Unauthorized request");
//   } else {
//     next();
//   }
// };

// const userAuth = (req, res, next) => {
//   console.log("user Authentication start");
//   const userToken = "xyz";
//   const isAdminAuthorized = userToken === "xyz";

//   if (!isAdminAuthorized) {
//     res.status(401).send("Unauthorized user request");
//   } else {
//     next();
//   }
// };

// module.exports = {
//   adminAuth,
//   userAuth
// };

//user middleware
//try
//read token from the deconstruct req.cookies
//validate token jwt.verify
//find the user form findbyid

//catch

const jwt = require("jsonwebtoken");
const User = require("../models/user");

const userAuth = async (req, res, next) => {
  //user middleware
  //try
  try {
    //read token from the deconstruct req.cookies
    const { mycookietoken } = req.cookies;
    if (!mycookietoken) {
      throw new Error("No Token/Token not valid");
    }

    //validate token jwt.verify
    const decoded = await jwt.verify(mycookietoken, "DEV@connect$9");

    const { _id } = decoded;

    //find user using user model
    const user = await User.findById(_id);
    if (!user) {
      throw new Error("User not found");
    }

    req.user = user;
    next();
  } catch (err) {
    //catch
    res.status(401).send("Error :" + err.message);
  }
};

module.exports = {
  userAuth,
};
