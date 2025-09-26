console.log("starting devconnect project");
const express = require("express");
const app = express();
const connectDB = require("./config/database.js");
const User = require("./models/user.js")

app.post("/signup", async (req ,res) => {
  const user = new User({
    firstName:"Krish"  ,
    lastName: "v" ,
    emailId:  "krish@1234",
    password: "45698",
});
try{
  //throw new Error("Async error!");
   await user.save();
    res.send("user adder succesfully");
}
catch(err){
  res.status(500).send({ message: "Error creating user", error: err.message });
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


