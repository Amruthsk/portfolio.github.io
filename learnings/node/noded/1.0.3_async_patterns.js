
//(require){fs(non relative)}@[nodule_modules]------->[fs] 
//(require) @ ['ModuleID'{quality}] → [Module Object]
//(require) @ ['fs'{core}] → [fs Module Object]
const fs = require("fs");

console.log("Commander: Dispatching scout callback with Radio Operator protocol...");


//Asynchronous Hand-off: readFile()
// [fs] @ (readFileSync {path: './...', encoding: 'utf8' , callback{data error}}) → ]
//offload
//(fs.readFile) @ [Call Stack] ⇒ [Callback ] {error,data} @ [[File System API ]]
//return
//[[File System API]] { read Complete} ⇒ [Callback ] @ [[Task Queue]]
////[Callback Function] ↔ [File I/O Event]

////[Callback Function] ↔ [handle error|data processing]
//error-first
//(err exists?) → {handle error} OR {process data}



fs.readFile("./intel.txt", (err, data) => {
  if (err) {
    // If the 'err'  has a value (is not absent), we see the failure.
    console.error("Radio Operator: AMBUSH! Mission failed:", err);
    return;
  }
//if no error [data]{raw binary data}---(.toString)---->(see)@[data]
  console.log("Radio Operator: Report received! Intel callback:", data.toString());
});

console.log("Commander: Scout is in the field callback. I can continue other tasks...");
//main thread[call stackt]--2[task queue]

//promise version
//(require){fs(non relative)}@[nodule_modules]+(promise)------->[fsPromises]

const fsPromises = require("fs").promises;

console.log("\nCommander: Dispatching scout with Promise Token protocol...");


// (readfile)----->return[promise object]
// [promise]{pending}
const missionToken = fsPromises.readFile("./intel.txt");

missionToken
  .then((data) => {//promise{fullfilled}-----(.then)--->data{value}
    console.log("Briefing Officer: Token fulfilled! Intel promise:", data.toString());
  })
  .catch((err) => {
    //promise{rejected}-----(catch)-->{error}
    console.error("Brig: Token rejected! Mission failed promise:", err);
  });

  //distinct separation between initiating the action (readFile) and handling its success (.then) or failure (.catch), which are properties of the returned Promise object


//async - implicit declaration - >return promise
  const conductDebrief = async () => {
    try {
      const data = await fsPromises.readFile("./intel.txt");
      console.log(
        "Aide-de-Camp: Report acquired directly. Intel async & await:",
        data.toString()
      );
    } catch (err) {
      console.error("Aide-de-Camp: The scout's mission failed:", err);
    }
  };

  console.log("\nCommander: Dispatching scout with Aide-de-Camp protocol...");
//without invocation async wont work
  conductDebrief();



//(require){http(non relative)}@[nodule_modules]------->[http] 

const http = require("http");


const listeningPost = http.createServer((req, res) => {
  //request
  console.log("\nListening Post: Incoming transmission!");
  //responds
  res.end("Message received and acknowledged.");
});


//[server]<-->[ports]----->[server]{listen}@[port 3000]
listeningPost.listen(3000, () => {
  console.log(
    "\nListening Post is active on port 3000. Waiting for transmissions..."
  );
});

//1st run node 1.0.3_async_patterns.js - creates [server]<->[port-3000]
//open new shell run curl http://localhost:3000. ---gives response