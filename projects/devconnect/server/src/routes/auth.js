// authRouter 
// - POST / signup 
// - Post / login 
// - Post / logout;

const express = require('express');
const authRouter = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user.js");
const { validateSignUpData } = require("../utils/validation.js");
const jwt = require("jsonwebtoken");




//post api - signup
authRouter.post("/signup", async (req, res) => {
  try {
    //1 validation of the data
    validateSignUpData(req);

    //extract
    const { firstName, lastName, emailId, password } = req.body;
    //2 Encrypt the password
    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);

    //3 creating a new instanc of the user model
    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });
    console.log(req);
    //access the body of the req
    console.log(req.body);

    //throw new Error("Async error!");
    await user.save();
    res.status(201).send("user adder succesfully");
  } catch (err) {
    res
      .status(500)
      .send({ message: "Error creating user", error: err.message });
  }
});

//post api  - login
authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    //email check
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      return res.status(401).send("Invalid credentials");
    }

    // password compare frpm user schema
    const isPasswordValid = await user.validatePassword(password);
    if (!isPasswordValid) {
      return res.status(401).send("Invalid credentials");
    } else {
      //generate Token using userid _ secret key form userschema
      const token = await user.getJWT();
      console.log(token);
      // creating cookie using token & send cookie to browser
      // res.cookie("myToken", "qwewelwqejwlkejqlkwjelqjwelqkjwelqj");
      res.cookie("mycookietoken", token, {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        secure: false, // (for localhost)
        expires: new Date(Date.now() + 8 * 3600000), // cookie will be removed after 8 hours
      });

      res.status(200).send(user);
    }
  } catch (err) {
    res.status(500).send("Server error");
  }
});


authRouter.post("/logout",(req,res) => {
res.clearCookie("mycookietoken");
res.status(200).send("Logout successful");

})

module.exports = authRouter;