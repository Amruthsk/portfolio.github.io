// nodeclient.js
const net = require("net"); 

const client = net.createConnection({ port: 8080 }, () => {
  console.log("Client connected"); 
  // Send info to server
  client.write("hello from node client");  
}); 

// To show the received data from server
client.on("data", (serverData) => {
  
  console.log("Data recevied from server", serverData.toString()); 
  client.end();
}); 

client.on("error", (err) => {
  console.error("Client error:", err);
}); 



