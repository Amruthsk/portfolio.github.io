// src/index.js
const express = require("express"); 
const { PORT } = require("../config/server.config"); 
const homePingController = require("../controllers/ping.controller"); 

const app = express(); 
// Use the controller directly on the base route
app.get("/", homePingController); 

app.listen(PORT, () => {
  console.log(`Started server at port: ${PORT}`);  
}); 
