// nodeserver.js
const net = require("net");

const server = net.createServer((socket) => {
  socket.on("data", (clientData) => {
    console.log("Data recevied from client", clientData.toString());
    socket.write("received on server thank you");
  });
  socket.on("error", (err) => {
    console.error("Socket error:", err);
  });
});

server.listen(8080, () => {
  console.log("new server up on 8080");
});
