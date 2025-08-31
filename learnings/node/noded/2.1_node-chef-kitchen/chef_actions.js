//non blocking


//[Thread] (Dispatch Action @ {[Callback]}) → |IMMEDIATE CONTINUATION| ... ⚡ ... ([Callback] @ {Result}) → [Outcome]



//The Event Loop continues executing code while the asynchronous operation is offloaded, and the callback runs later.
//('require' @ {path: 'fs'}) ⇒ [const fs] { All file system }= ⊂ { writeFile,readFile ...}
const fs = require("fs");
//('require' @ {path: 'path'}) ⇒ [const path] { All path system }= ⊂ { join, ...}

const path = require("path");

console.log('Chef: "Starting my shift. First, I will make a quick salad."');


// Part 1 (Dispatch): [Main Thread] --DISPATCH--> (AsyncAction @ {Inputs, [Callback]}) ⇒ |CONTINUES|
// Part 2 (Invocation): [Event Loop] --LATER--> ( [Callback] @ {Result} ) → [Final Outcome]

// Dispatch: [Main Thread] --DISPATCH--> (fs.readFile @ {path, [Callback]}) ⇒ |CONTINUES|
// Invocation: [Event Loop] --LATER--> ( [Callback] @ {err, data} ) → [Buffer Data]


fs.readFile(path.join(__dirname, "order.txt"), "utf8", (data) => {
  console.log('Kitchen Staff: "The slow-cooked roast (order.txt) is ready!"');
  console.log(data);//null 
});



console.log(
  'Chef: "While that roast is cooking, I will prepare a refreshing drink."'
);
