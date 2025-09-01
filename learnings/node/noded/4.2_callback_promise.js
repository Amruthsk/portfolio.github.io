// [callback]{passed to another function}

// [callback]{invoked only when primary operation complete or fail}

// [callback]{control - depends on the funtion to call the call back}


//[Outer Function] ⊂ [Callback Function] ⇒ (Outer  @ [Target]) → (Callback  @ [Result])
// (Callback  @ {[err], [data]}){error first}


// [Promise]{pending,fulfilled,rejected}
// /[Promise]{pending} → [Promise]{fulfilled | rejected}


// [Promise]{immutable}
// [promise](.then{fullfilled})(.catch{rejected})
//[Promise] ↔ { (.then @ [Promise]{fulfilled} ⇒ (1st)) | (.catch @ [Promise]{rejected} ⇒ ()) }



// (Main Script) ⇒ [Sync ] → [Call Stack] → (Async ) ⇒ [Node API]
// ...
// [Node API] → [Callback] → [Callback Queue]
// ...
// [Event Loop]: [Call Stack]{empty?} ⇒ [Callback Queue] → [Callback] → [Call Stack]

const fs = require("fs"); 


//sync
console.log('General: "Scout, report back when you have the intel."');


//async
fs.readFile(
  './intel.txt',          
  'utf8',
  (err, data) => {   
  console.log('Scout (Callback): "General, I have the intel! It reads: ...');
    console.log(data);
  }
);