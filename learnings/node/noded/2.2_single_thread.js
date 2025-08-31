//  A (The Core Quality): Node.js executes user-written JavaScript code on a single main thread. It can only perform one action at a time.
//  B (The Engine of Concurrency): The Event Loop is the mechanism that allows Node.js to perform non-blocking I/O operations, despite being single-threaded, by offloading operations to the system kernel whenever possible.
//  C (The Order of Operations): The main thread executes code from the "call stack." Only when the call stack is completely empty does the event loop process the "callback queue," moving the next queued function onto the call stack for execution.
//  D (The Cardinal Sin - Blocking): A synchronous, computationally expensive operation (e.g., a complex loop) will monopolize the single main thread. This is known as "blocking the event loop" because no other code, including asynchronous callbacks, can run until it is finished.


//Node.js executes JavaScript code on a single main thread

// The Call Stack (The "Now")
// The Microtask Queue (The "Immediately After Now")
// The Callback Queue / Macrotask Queue (The "Later")


//[[callback]]
//[callstack]{Last-In, First-Out (LIFO)}{synchronous,[1,2,3].forEach(callback)}
//[Macrotask]{ First-In, First-Out (FIFO) }{I/O,timers,setTimeout(callback)}
//[microtask]{Promise.then(callback),process}

//[Call Stack] {Must Be Empty} ⇒ (Event Loop) ?→ [Microtask Queue] ?→ [Macrotask Queue]

//[Call Stack](http.get @ [Callback]) ⇒ [Node API]{Network Thread ⏳} → [Macrotask Queue] ⊂ [Callback]
//Asynchronous
//[Call Stack](Async ) ⇒ [API] ⏳ → [Queue] ⊂ [Callback] … {Stack Empty} ⇒ (Event Loop) → [Call Stack] ⊂ [Callback]
//blocking
//[Call Stack] ⊂ [Slow Sync occupying] ↔ (Execution Monopoly) 🚫⇒ (Event Loop)

////[callstack[mainscript]] <->[eventloop] <->[[micro task queue{}],[macro task queue{setTimeout}]]
//[callstack]{Last-In, First-Out (LIFO)}{setTimeout}
//[Macrotask]{ First-In, First-Out (FIFO) }
//[microtask]{Promise,process}

//where callback lies  in callstack or Macrotask or microtask
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





console.log("START: General begins briefing.");


//(setTimeout) ⇒ [Node API]{Timer}-> [macro task queue{setTimeout}]]
//[Call Stack](setTimeout @ [Callback]) ⇒ [Node API]{Timer} → [Macrotask Queue] ⊂ [Callback]
setTimeout(() => {
  console.log("LATER: Report from Field Radio (setTimeout)");
}, 0);


//(Promise) ⇒ [Node API]{Promise}-> [Micro task queue{Promise}]]
//[Call Stack](.then @ [Callback]) ⇒ [Microtask Queue] ⊂ [Callback]
Promise.resolve().then(() => {
  console.log("IMMEDIATELY AFTER: Message from Red Phone (Promise)");
});


//[Call Stack](nextTick @ [Callback]) ⇒ [Microtask Queue]{Priority #1} ⊂ [Callback]
process.nextTick(() => {
  console.log("URGENT WHISPER: Aide interrupts (nextTick)");
});

console.log("END: General finishes briefing.");


//Event Loop Awakens
// State: [Call Stack]{EMPTY!}
// Visual Model: [Call Stack]{Empty} ⇒ (Event Loop Awakens!)
// Event Loop Action 1 (Microtasks):
// Visual Model: [Microtask Queue] → (Event Loop moves nextTick) → [Call Stack] ⊂ [nextTick Callback] → [Output]
// Visual Model: [Microtask Queue] → (Event Loop moves Promise) → [Call Stack] ⊂ [Promise Callback] → [Output]
// State: [Microtask Queue]{EMPTY!}
// Event Loop Action 2 (Macrotask):
// Visual Model: [Macrotask Queue] → (Event Loop moves setTimeout) → [Call Stack] ⊂ [setTimeout Callback] → [Output]