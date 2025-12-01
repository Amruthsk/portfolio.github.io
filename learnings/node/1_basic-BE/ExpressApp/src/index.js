// src/index.js
const express = require("express");

const app = express(); 
const PORT = 3000; 

// Server binding to port
app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
}); 


