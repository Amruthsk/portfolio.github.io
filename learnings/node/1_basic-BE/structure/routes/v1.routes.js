// routes/v1.routes.js
const express = require("express"); 
const homePingController = require("../controllers/ping.controller"); 

const v1Router = express.Router(); 
// Register the controller function to a specific path on the router
v1Router.get("/ping", homePingController); 

module.exports = v1Router; 
