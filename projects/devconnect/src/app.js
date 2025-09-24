console.log("starting a new project");
const express = require("express");
const app = express();
const {adminAuth, userAuth} = require("./middlewares/auth.js")


app.use("/admin", adminAuth);

app.get("/admin/getdata",(req,res) => {
  res.send("data send")
})


app.get("/user/getdata",userAuth, (req, res) => {
  res.send("user data send");
});

app.get("/user/login", (req, res) => {
  res.send("Login");
});

app.get("/user/profile",userAuth, (req, res) => {
  res.send("profile data send");
});





// Start server
app.listen(9999, () => {
  console.log("Server is successfully listening on port 9999");
});
