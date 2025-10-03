console.log("starting devconnect project");
const express = require("express");
const app = express();
const connectDB = require("./config/database.js");
const User = require("./models/user.js");
const { validateSignUpData } = require("./utils/validation.js");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
//cant directly take in w/o converting to json

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
      res.status(401).send("Invalid credentials");
    }

    // password compare
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(401).send("Invalid credentials");
    } else {
      //generate Token using userid _ secret key
      const token = await jwt.sign({ _id: user.id }, "DEV@connect$9");
      console.log(token);
      // creating cookie using token & send cookie to browser
      // res.cookie("myToken", "qwewelwqejwlkejqlkwjelqjwelqkjwelqj");
      res.cookie("myTokencookie", token);

      res.status(200).send("Login Successfull");
    }
  } catch (err) {
    res.status(500).send("Server error");
  }
});

//get api - profile api
app.get("/profile", async (req, res) => {
  //validate cookie
  //get cookie
  const cookies = req.cookies;
  console.log(cookies);
  //extract token form cookies
  const { myTokencookie } = cookies;
  //validate cookie response| login invalid
  const decoded = await jwt.verify(myTokencookie, "DEV@connect$9");

  console.log(decoded);
  const{_id} = decoded;
  console.log("Logged in id is "+ _id)
 
  //responds
  res.send("cookie deliverd");
});

//get api - get user by id
app.get("/user", async (req, res) => {
  const userid = req.body._id; //get
  try {
    //find
    const user = await User.find({ _id: userid });

    //send possibilites from the database
    if (!user || user.length === 0) {
      res.status(404).send("User of no match found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(500).send("Server error");
  }
});

//get api - get user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId; //get
  try {
    console.log(userEmail);

    //find
    const user = await User.find({ emailId: userEmail });

    //send possibilites from the database
    if (!user || user.length === 0) {
      res.status(404).send("User of no match found");
    } else {
      res.status(200).send(user);
    }
  } catch (err) {
    res.status(500).send("Server error");
  }
});

//delete api - delete user by id
app.delete("/user", async (req, res) => {
  const userId = req.body._id; //get
  if (!userId) {
    return res.status(400).send("User ID is required");
  }
  try {
    console.log(userId);
    //find and delete
    const user = await User.findByIdAndDelete(userId);

    //send possibilites from the database
    if (!user) {
      res.status(404).send("User of no match found");
    } else {
      res.status(200).send("User deleted successfully");
    }
  } catch (err) {
    res.status(500).send("Server error");
  }
});

//update api - update user by id
app.patch("/user/:id", async (req, res) => {
  //get
  const userId = req.params?.id; //get
  const data = req.body;
  try {
    const ALLOWED_UPDATES = ["photoUrl", "about", "gender", "age", "skills"];
    //LOOP  ---->FIND boolean true/false
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );
    if (!isUpdateAllowed) {
      //throw new Error("Update not allowed");
      return res.status(400).send({ error: "Invalid updates!" });
    }
    if (data?.skills.length > 10) {
      //throw new Error("more than 10 skills are  not allowed");
      return res.status(400).send({ error: "Cannot add more than 10 skills." });
    }

    //update
    const user = await User.findOneAndUpdate({ _id: userId }, data, {
      runValidators: true,
    });

    if (!user) {
      return res.status(404).send("User of no match found");
    }
    res
      .status(200)
      .send({ message: "User updated successfully", updatedUser: user });
  } catch (err) {
    console.error("Error updating user failed:");

    res.status(500).send("Server side error:" + err.message);
  }
});

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
