//Node.js executes JavaScript code on a single main thread

//The Synchronous Path (Sequential Execution)
//[Script] ⇒ (push 'Task 1') → [Call Stack] (execute 'Task 1') → (pop 'Task 1') ⇒ ...repeat

//The Asynchronous Path (The Core of Node.js)
//[Call Stack](setTimeout) ⇒ [Node API]{Timer} → [Callback Queue] ⊂ [Callback] ... {Empty Call Stack} ⇒ [Event Loop](move_callback) → [Call Stack] ⊂ [Callback]

//The Blocking Path 
//[Call Stack] ⊂ [Blocking Loop] ↔ (Execution Monopoly) ⇒ [Event Loop]{Stalled} ∵ ¬[Empty Call Stack]

//[Call Stack] ← (log "Start...") → [Output]
//[Call Stack] ← (setTimeout) ⇒ [Node API]{Timer}
//[Call Stack] ← (log "End...") → [Output]
//[Call Stack]{Empty}
//[Node API]{Timer Fires} ↩ [Callback Queue]
//[Callback Queue] → [Event Loop] → [Call Stack] ← (log "Async...") → [Output]

//[Call Stack]{Monopolized by (Sync_CPU_Task)} X→ [Event Loop] ... [Callback Queue]{Filling Up...}



//{single thread} (execute one line at a time - line by line)
//[callstack[mainscript]] <->[eventloop] <->[[micro task queue[callbackfunction]],[macro task queue[setTimeout]]]
//non-sequential execution - mainscript 1st 

console.log("First: Commander begins tactical assessment.");
console.log("Second: Commander analyzes satellite imagery.");
console.log("Third: Commander finalizes the mission plan.");

//The Engine of Concurrency & Order of Operations
// The Event Loop enables concurrency by offloading tasks, and callbacks run only when the call stack is empty

console.log(
  "Commander: 'Dispatch scout team. Report back when in position.' (Start of script)"
);

setTimeout(() => {
  console.log("Radio Operator: 'Scout team is in position.' (Async callback executed)");
}, 0); // The 0ms delay means "as soon as possible," but it is still an offloaded .

//appears before async last - 1
console.log(
  "Commander: 'While they travel, I will review the main objective.' (End of script)"
);


console.log("Commander: 'An urgent report must arrive in 2 seconds.'");

setTimeout(() => {
  // This callback is waiting in the In-Tray, but the Commander is too busy to look.
  console.log(">>> URGENT REPORT ARRIVES! (This should have been seen at 2s)");
}, 2000);

console.log(
  "Commander: 'I will now personally assemble this rifle. It will take 5 seconds.'"
);
const blockUntil = Date.now() + 5000;
while (Date.now() < blockUntil) {
  // This loop is a pure, (blocking) . No other JavaScript can run.
}

console.log("Commander: 'Rifle assembly complete.' (This happens at 5s)");