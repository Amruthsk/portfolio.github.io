console.log("starting a new project");
const express = require("express");
const app = express();
const {adminAuth, userAuth} = require("./middlewares/auth.js")


app.use("/admin", adminAuth);




app.get("/admin/getdata",(req,res) => {
  res.send("data send")
})

app.get("/connect/getdata", (req, res) => {
  try{
    //(Throw Error) @ [Sync Execution Path]
    throw new Error("Synchronous Boom!");
    res.send("data send");
  }
  catch(err){

    res.status(500).send("server went wrong");
  }
  
});


//async errorhandling
app.get("/user/getdata",userAuth, (req, res,next) => {
   setTimeout(() => {
      try {
          //throw new Error("Async error!");
          res.send("user gets data")
      } catch(err) {
          // (Propagate Error) / [next(err)]
          next(err); 
      }
  }, 0);
});



app.get("/user/login", (req, res) => {
  res.send("Login");
});

app.get("/user/profile",userAuth, (req, res) => {
  res.send("profile data send");
});


app.use("/",(err,req,res,next) => {
  if(err){
      res.status(500).send("something went wrong");

  }
})




// Start server
app.listen(9999, () => {
  console.log("Server is successfully listening on port 9999");
});
