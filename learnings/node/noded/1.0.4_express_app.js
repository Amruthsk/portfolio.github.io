
//(require) @ ['express'{core}] → [express Module Object]
const express = require("express");

// (express()) → [app]
const app = express();

//[express]{[port]}
const PORT = 3006;

//(listen){3006} @ [app] ⇒ [Server Process]{Listening}-->[app]listening
app.listen(PORT, () => {
  console.log(`Universe forged. Server listening on port ${PORT}`);
});

//[server app]{active,listening}


//first transaction
//get<->[handler[req],[res]]
// (get) @ [app] with ([Path], [Handler]) ⇒ [New Routing Rule] ⊂ [app]
//[Path] ↔ [Handler(req, res)]

//*(get){'/hello', [Handler-function]} @ [app] ⇒ [New Routing Rule] ⊂ [app]
//[Path: '/hello'] ↔ [Handler]
app.get("/hello", (req, res) => {
  //[req]{path"hello"}
  //[res](send)
  //(send){"....."} @ [res] → [HTTP Response]
  res.send("Perception confirmed. The transaction is complete.");
});


//fallback - any req that has'nt been matched
//(use){[Handler]} @ [app] ⇒ [General Rule] ⊂ [app]
//"catch-all" 
//[[(use)]]@[app]  --> request recieved but dont get into the get
app.use((req, res) => {
    //[req]{no path}
  //[res](status)
  //(status){404} @ [res] → [res'], then (send){'...'} @ [res'] → [HTTP Response]

  console.log("Request received:", req.method, req.url);
  res.status(404).send("No route matched here!");
});


//(Get-Process ) @ all node [ports]
//Get-Process node

//(stop-process)@ all node [ports]
//Get-Process node | Stop-Process

// (get) @ [app] with ([Path], [Handler]) ⇒ [New Routing Rule] ⊂ [app]
////*(get){'/details', [Handler-function]} @ [app] ⇒ [New Routing Rule] ⊂ [app]

app.get("/details", (req, res) => {
//[req]{path"details"}
  //[res](send)
  //(send){"........"}@ [res] → [HTTP Response]
  res.send(`The {} of your request path is: ${req.path}`);
});


//abscence of response - no response
////*(get){'/hang', [Handler-function]} @ [app] ⇒ [New Routing Rule] ⊂ [app]

app.get("/hang", (req, res) => {
  ////[req]{path"details"}
  // (nosend | nojson | nostatus) @ [res] ⇒ [no HTTP Response]

  console.log(
    `Request received at ${new Date().toISOString()}. absence  of response will now occur.` // appears instantly in node terminal
  );
});