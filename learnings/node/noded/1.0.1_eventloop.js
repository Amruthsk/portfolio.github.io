
//[fs]
//('require' @ {path: 'fs'}) ⇒ [const fs] { All file system files imported}
//(require) @ [[Module System]] {Module ID} → [Module Object]
//(require) @ [[Module System]] {path: 'fs'} → [const fs]
const fs = require("fs");

//PUSH(log 'start') → [Stack] → EXECUTE → POP
console.log("Tactician begins briefing.");

//Asynchronous Hand-off: setTimeout()

// [Callback]-->-(setTimeout()){delay}

// [callback]<--->[Timer]
//[Callback Function] ↔ [Timer Event]

//2step journey
//Offload
//(setTimeout) @ [Call Stack] ⇒ [Callback ] { 0ms delay} @ [[[Timer API ]]
//return
//[[Timer API]] { Timer Complete} ⇒ [Callback ] @ [[Task Queue]]

//[Runtime] → hands off (callback, 0) to [libuv] → [callstack continues]
setTimeout(() => {
  console.log("Chief of Staff presents urgent message (from setTimeout).");
}, 0);



//[Callback Function] ↔ [File I/O Event]
//Asynchronous Hand-off: readFile()
// [fs] @ (readFileSync {path: './...', encoding: 'utf8' , callback{data error}}) → ]

//(fs.readFile) @ [Call Stack] ⇒ [Callback ] {data,error} @ [[File System API ]]

//[[File System API]] { read Complete} ⇒ [Callback ] @ [[Task Queue]]

//[Runtime] → hands off (read 'data.txt') to [libuv/OS] → [Tactician continues]
fs.readFile("./data.txt", "utf8", (err, data) => {
  //after reading
  if (err) {
    console.error("⚠️ file not found:", err.message);
    return; // ✅ exit the callback safely
  }
  console.log(`Intel from file room received: "${data}"`);
});

//PUSH(log 'end') → [Stack] → EXECUTE → POP
console.log("Tactician finishes briefing.");
