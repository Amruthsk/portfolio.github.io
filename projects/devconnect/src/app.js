console.log("starting devconnect project");
const express = require("express");
const app = express();
const connectDB = require("./config/database.js");
const User = require("./models/user.js")

//cant directly take in w/o converting to json

app.use(express.json());

//post api - signup
app.post("/signup", async (req ,res) => {
const user = new User(req.body);
console.log (req);
//access the body of the req
console.log(req.body);
  try{
  //throw new Error("Async error!");
   await user.save();
    res.status(201).send("user adder succesfully");
}
catch(err){
  res.status(500).send({ message: "Error creating user", error: err.message });
}

});

//get api - get user by id
app.get("/user", async ( req, res) => {
  const userid = req.body._id;//get
  try{

    //find
    const user = await User.find({ _id: userid });

    //send possibilites from the database
    if(!user|| user.length === 0){
      res.status(404).send("User of no match found")

    }else{
      res.send(user);
    }
    

  }catch(err){
    res.status(500).send("Server error");

  }
})

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
app.patch("/user", async(req, res) => {
//get
  const userId = req.body._id; //get
  const data = req.body;
  try{
//update
    const user = await User.findOneAndUpdate({ _id: userId }, data);
    
      res
        .status(200)
        .send({ message: "User updated successfully", updatedUser: user });
    
  }
  catch (err){
    console.error("Error updating user:", err);

    res.status(500).send("Server side error")

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


