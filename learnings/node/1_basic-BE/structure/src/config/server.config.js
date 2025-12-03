
const dotenv = require("dotenv"); 
dotenv.config(); 
module.exports = {
  PORT: process.env.PORT || 3001,
  JWT_SECRET: process.env.JWT_SECRET || "fallback_secret", 
}; 
