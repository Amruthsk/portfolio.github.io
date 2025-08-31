// blocking
// [Thread] (fs.readFileSync) ═══|| WAITING for file ||═══❯ [const data]

//The Event Loop continues executing code while the asynchronous operation is offloaded, and the callback runs later.
//('require' @ {path: 'fs'}) ⇒ [const fs] { All file system }= ⊂ { writeFile,readFile ...}
const fs = require("fs");
//('require' @ {path: 'path'}) ⇒ [const path] { All path system }= ⊂ { join, ...}

const path = require("path");

console.log('Chef: "Starting my shift. First, I will make a quick salad."');


// Part 1 (Dispatch): [Main Thread] --DISPATCH--> (AsyncAction @ {Inputs, [Callback]}) ⇒ |CONTINUES|
// Part 2 (Invocation): [Event Loop] --LATER--> ( [Callback] @ {Result} ) → [Final Outcome]


// [fs] @ (readFileSync {path, encoding: 'utf8'}) → [const report] { 'message'}

try {
  // The Chef is now stuck at the stove, whisking. He can do nothing else.
  const data = fs.readFileSync(path.join(__dirname, "order.txt"), "utf8");
  console.log('Chef: "The Hollandaise sauce (order.txt) is finally done!"');
} catch (err) {
  console.error(err);
}

//only at last
console.log(
  'Chef: "Now that the sauce is done, I can finally attend to other tasks."'
);