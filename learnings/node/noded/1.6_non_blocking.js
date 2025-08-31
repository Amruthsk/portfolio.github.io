
// Part 1 (Dispatch): [Main Thread] --DISPATCH--> (AsyncAction @ {Inputs, [Callback]}) ⇒ |CONTINUES|
// Part 2 (Invocation): [Event Loop] --LATER--> ( [Callback] @ {Result} ) → [Final Outcome]


// Concept: Writing a file asynchronously.
// Dispatch: [Main Thread] --DISPATCH--> (fs.writeFile @ {path, data, [Callback]}) ⇒ |CONTINUES|
// Invocation: [Event Loop] --LATER--> ( [Callback] @ {err} ) → [Effect: Log to Console]
// Concept: Reading a file asynchronously (returning a Buffer).
// Dispatch: [Main Thread] --DISPATCH--> (fs.readFile @ {path, [Callback]}) ⇒ |CONTINUES|
// Invocation: [Event Loop] --LATER--> ( [Callback] @ {err, data} ) → [Buffer Data]
// Concept: Reading a file asynchronously (returning a string).
// Dispatch: [Main Thread] --DISPATCH--> (fs.readFile @ {path, 'utf8', [Callback]}) ⇒ |CONTINUES|
// Invocation: [Event Loop] --LATER--> ( [Callback] @ {err, data} ) → [String Data]
// Concept: Deleting a file asynchronously.
// Dispatch: [Main Thread] --DISPATCH--> (fs.unlink @ {path, [Callback]}) ⇒ |CONTINUES|
// Invocation: [Event Loop] --LATER--> ( [Callback] @ {err} ) → [Effect: Confirm Deletion]







//null ->(fs.writeFile();) --> [new file]/[overwritten file]

//[file]---(fs.readFile())---> see [content of file] binary
//[file]---(fs.readFile(){utf8})---> see [content of file] human readable

//node.js has 2 distinct parts
//dispatch main thread issues a command and moves on.
//[Main Thread] -DISPATCH→ (Action @ [Target] {Inputs, CallbackFn}) 1st do primary ⇒ |NON-BLOCK|

//2nd do secondary
//callback  Later, the event loop executes the callback with the result.
//[Event Loop] ↩ (CallbackFn @ {Result}) → [Final Outcome]

// async action as a pair of Dispatch (-DISPATCH→) and Callback (↩)

//{callbackfun()}{not immediately executed,executed secondarly}

//(require @ {path: 'fs'}) → [ fs module]
const fs = require("fs");


//[Main Thread] → (console.log) ⇒ [Effect: Output to Terminal]
console.log(
  "Commander: Dispatch scout to create mission-plan.txt. I will attend to other matters."
);
//[Commander] --DISPATCH--> [Scout leaves with mission plan]
//[Main Thread] -DISPATCH→ (writeFile @ [File] {data, callback}) ⇒ |NON-BLOCK| order to libuv
//gives both the data-mission order and the callback-reporting protocol at the same time.
fs.writeFile("./mission-plan.txt", "Proceed to objective alpha.", (err) => {
  //This code runs ONLY when the scout returns (the write is complete)
  if (err) throw err;
  //[Event Loop] ↩ (CallbackFn @ {err}) → (console.log) ⇒ [Effect: Output to Terminal]
  console.log("Scout (via radio): Sir, the mission plan has been planted.");
});

//[Main Thread] → (console.log) ⇒ [Effect: Output to Terminal]
console.log(
  "Commander: While the scout is out, I am planning troop movements."
);


//[Commander] --DISPATCH--> [Second scout leaves to retrieve plan]
//[Main Thread] -DISPATCH→ (readFile @ [File] {callback}) ⇒ |NON-BLOCK|
fs.readFile("./mission-plan.txt", (err, data) => {
  // / // This scout returns AFTER the file is written and read.
  //[Event Loop] ↩ (CallbackFn @ {err, data}) → (console.log) ⇒ [Effect: Output to Terminal]
  if (err) {
    console.log("Scout (via radio): Sir, error retrieving plan!", err);
    return;
  }
  console.log(
    "Scout (via radio): Sir, retrieved the plan, it is a raw Buffer:",
    data
  );
});


// async action as a pair of Dispatch (-DISPATCH→) and Callback (↩)

//fs.unlink() causes the permanent absence of [file]

//[file]-------(fs.unlink())--------> null
// [Commander] --DISPATCH--> [Engineer leaves to demolish structure]
// fs.unlink("./intel-report.txt", (err) => {
//   //after demolition
//   if (err) throw err;
//   console.log(
//     "Engineer (via radio): Demolition complete. intel-report.txt no longer exists."
//   );
// });