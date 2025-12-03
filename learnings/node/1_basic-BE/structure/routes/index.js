// routes/index.js (The API Root Router)
const express = require("express");
const v1Router = require("./v1"); 
const v2Router = require("./v2"); 

const apiRouter = express.Router(); 

// Register the V1 router with the '/v1' prefix (URL is now /api/v1/...)
apiRouter.use("/v1", v1Router); 
// Register the V2 router with the '/v2' prefix (URL is now /api/v2/...)
apiRouter.use("/v2", v2Router); 

module.exports = apiRouter; 