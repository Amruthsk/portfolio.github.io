//  A (The Creator ()): The http.createServer() method is the action (()) that creates and returns a new instance of an http.Server object ([]).
//  B (The Callback <--->): The createServer() method accepts a request listener callback function. This function is automatically added to the 'request' event, creating an inseparable relationship (<--->) between the server's creation and its primary function.
//  C (The Listening ()): The server.listen() method is the action (()) that binds the server to a specific network port and hostname, enabling it to begin actively listening for incoming connections.
//  D (The Inseparable Pair): When the 'request' event is emitted, the listener callback is invoked with two specific arguments: an http.IncomingMessage object (the Request) and an http.ServerResponse object (the Response). They are always provided as a pair.
//  E (The Nature of Request): The Request object (http.IncomingMessage) is a ReadableStream. It contains the Guṇas (qualities) of the client's request, such as the URL (.url), the HTTP method (.method), and the headers (.headers).
//  F (The Nature of Response): The Response object (http.ServerResponse) is a WritableStream. It is the substance used to construct and send data back to the client.
//  G (The Concluding ()): The response.end() method is a mandatory final action (()) on the Response object. It signifies that all response headers and body have been sent and the server should consider this message complete.

//http.createServer() creates a server [], and it has a  (inseparable relationship) with a callback function."

//[Server] ↔ {Request_Handling_Logic} --(perceives a [Request])--> (executes Logic @ {[Request], [Response]})

//[Request] ⊂ { .url, .method, .headers}

//[Response] --(write/end @ {Data})→ [Client]

//('require' @ {path: 'http'}) ⇒ [const http] { All http system }= ⊂ { createServer, ...}

//(http.createServer {request,response}) → [server  @ Disk]<->{ sop //(CallbackFn @ {request}) → [Final Outcome] }

//(CallbackFn @ {server siderequest}{client side response}) → [Final Outcome] }

////[Server]{listening} ... [Event Loop]{spinning}

//[External Client] --(sends request)→ [Operating System] ⇒ 'request' Event
//('request' Event @ [Server]{listening}) ⇒ (execute{SOP} @ {[Request], [Response]})

//[Request] ⊂ {.url, .method, .headers, ...}


//(require)→[Module]--(createServer)→[Server]--(listen)→ ... [Event Loop] ... ⇐ ('request' Event) ⇒ ({SOP} @ {[Req],[Res]}) --(.end)→ [Client]

// (require)→[Module] ∋ (createServer)→[Server]↔{SOP} --(listen)→ [Server]{Listening}... ⇐ ('request' Event) ⇒ ({SOP} @ {[Req],[Res]}) --(res.end @ {Data})→ [Client]
// Terminal 1 - server
// //netstat -ano | findstr :3008
// //taskkill /PID 29052 /F

// //node 1.7_http.js



// Terminal 2 - client
// //curl http://localhost:3008/



//('require' @ {path: 'http'}) ⇒ [const http] { All http system }= ⊂ { createServer, ...}

//  null ----(http.createServer())----[server]<--->{callback function}
//('require' @ {path: 'http'}) ⇒ [const http] { All http system }= ⊂ { createServer, ...}

const http = require("http");

//(http.createServer {request,response}) → [server  @ Disk]<->{ sop }
const server = http.createServer((request, response) => {
  //(CallbackFn @ {request}) → [Final Outcome]
  //The callback is invoked with a Request/Response pair, and the Request object contains  like URL and method."
  console.log("Transmission Received!");
  console.log(`Request Type (Method): ${request.method}`);
  console.log(`Target (URL): ${request.url}`);
  //The Response object is a WritableStream that is finalized with .end().
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Message received. Orders to follow. Over.");
});

console.log("Command Post substance has been created.");

// server.listen() makes the server actively listen on a port."

// [server]{inactive}----(server.listen(3008))--->[server]{active,listening to port,callback function}

server.listen(3008, () => {
  console.log("Radio channels open on frequency 3008. Awaiting transmissions.");
});

//[Server]{listening} ... [Event Loop]{spinning}

//[External Client] --(sends request)→ [Operating System] ⇒ 'request' Event
//('request' Event @ [Server]) ⇒ ({SOP} @ {[Request], [Response]})

// [Request] ⊂ {.url, .method, .headers, ...}
//[Response]{empty} --(writeHead, write, end)→ [Client]

//(require)→[Module]--(createServer)→[Server]--(listen)→ ... [Event Loop] ... ⇐ ('request' Event) ⇒ ({SOP} @ {[Req],[Res]}) --(.end)→ [Client]


// Terminal 1 - server
// //netstat -ano | findstr :3008
// //taskkill /PID 29052 /F

// //node 1.7_http.js



// Terminal 2 - client
// //curl http://localhost:3008/
