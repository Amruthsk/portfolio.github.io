// routes/v1.routes.js
const express = require("express"); 
const homePingController = require("../controllers/ping.controller"); 

const v2Router = express.Router(); 
// Register the controller function to a specific path on the router
v2Router.get("/check", homePingController); 

module.exports = v2Router; 
