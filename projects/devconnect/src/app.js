console.log("starting devconnect project");
const express = require("express");
const app = express();
const connectDB = require("./config/database.js");
const User = require("./models/user.js");
const { validateSignUpData } = require("./utils/validation.js");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
//cant directly take in w/o converting to json
const {userAuth} = require("./middlewares/auth.js");


const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cookieParser());

//post api - signup
app.post("/signup", async (req, res) => {
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
app.post("/login", async (req, res) => {
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
        expires: new Date(Date.now() + 8 * 3600000), // cookie will be removed after 8 hours
      });

      res.status(200).send("Login Successfull");
    }
  } catch (err) {
    res.status(500).send("Server error");
  }
});

//get api - profile
app.get("/profile", userAuth, async (req, res) => {
  try {
    //validate cookie
    //get cookie
    
    //extract token form cookies
    
    //validate cookie response| login invalid
    
    //after authentication form middleware responds
  const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(401).send("Error: " + err.message);
  }
});


//post api - profile api
app.post("/sendConnectionRequest",userAuth, async (req,res) => {
  //connection logic
  console.log("sending connection request");
const user = req.user;
  res.send(user.firstName + " sending request");
})
    
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
