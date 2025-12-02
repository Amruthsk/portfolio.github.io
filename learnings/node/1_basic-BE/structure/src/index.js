// src/index.js
const express = require("express"); 
const { PORT } = require("../config/server.config"); 
const homePingController = require("../controllers/ping.controller"); 
const v1Router = require("../routes/v1.routes");
const v2Router = require("../routes/v2.routes");

const app = express(); 
// Use the controller directly on the base route
//app.get("/", homePingController); 

app.use("/api/v1", v1Router);  
app.use("/api/v2", v2Router); 


app.listen(PORT, () => {
  console.log(`Started server at port: ${PORT}`);  
}); 
