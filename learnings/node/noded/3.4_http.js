//[Server] ↔ {Request_Handling_Logic} --(perceives a [Request])--> (executes Logic @ {[Request], [Response]})
//(require)→[Module]--(createServer)→[Server]--(listen)→ ... [Event Loop] ... ⇐ ('request' Event) ⇒ ({SOP} @ {[Req],[Res]}) --(.end)→ [Client]


//[Request] ⊂ { .url, .method, .headers}
//req (request) <---> res (response) 
//[Response] --(write/end @ {Data})→ [Client]


//('require' @ {path: 'http'}) ⇒ [const http] { All http system }= ⊂ { createServer, ...}

//(http.createServer {request,response}) → [server  @ Disk]<->{ sop //(CallbackFn @ {request}) → [Final Outcome] }

//(CallbackFn @ {server siderequest}{client side response}) → [Final Outcome] }


////[Server]{listening} ... [Event Loop]{spinning}

//[External Client] --(sends request)→ [Operating System] ⇒ 'request' Event

//('request' Event @ [Server]{listening}) ⇒ (execute{SOP} @ {[Request], [Response]})

//[Response]{empty} --(writeHead, write, end)→ [Client]


// Terminal 1 - server
// //netstat -ano | findstr :3008
// //taskkill /PID 29052 /F

// //node 1.7_http.js



// Terminal 2 - client
// //curl http://localhost:3008/


const http = require("http");

const server = http.createServer();
console.log("An http.[Server]  has been created.");


const server2 = http.createServer((req, res) => {
  console.log("A request has been perceived!");
});
server.listen(3070, () => {
  console.log("Server Dravya is now active and listening on port 3070.");
});