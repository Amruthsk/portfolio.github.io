//  


const express = require('express');
const requestRouter = express.Router();
const { userAuth } = require("../middlewares/auth.js");


//post api - profile api
requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  //connection logic
  console.log("sending connection request");
  const user = req.user;
  res.send(user.firstName + " sending request");
});
    

module.exports = requestRouter;