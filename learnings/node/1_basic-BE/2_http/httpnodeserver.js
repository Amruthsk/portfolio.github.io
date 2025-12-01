// http-server-node.js
const http = require("http"); 
const server = http.createServer((req, res) => {
  console.log("new connection created"); 

 
  // console.log(req) 

  // Routing is done here (Deciding the Action based on the URL )
  if (req.url === "/home") {
    res.statusCode = 200; 
    res.setHeader("Content-Type", "text/plain");
    return res.end("You are in home");
  }

  res.end("Hello connected"); 
}); 

// Binding the server to a specific port
server.listen(3004, () => {
  console.log("server starte at port 3004"); 
}); 
