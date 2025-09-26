console.log("starting devconnect project");
const express = require("express");
const app = express();
const connectDB = require("./config/database.js");
const User = require("./models/user.js")

//cant directly take in w/o converting to json

app.use(express.json());

app.post("/signup", async (req ,res) => {
const user = new User(req.body);
console.log (req);
//access the body of the req
console.log(req.body);
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


