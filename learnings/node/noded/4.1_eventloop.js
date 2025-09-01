//  A (The Non-Blocking Principle): The Event Loop enables Node.js to perform non-blocking I/O operations by offloading tasks to the system kernel (via the libuv library) whenever possible.
//  B (The Call Stack's Supremacy): The JavaScript Call Stack executes code. The Event Loop can only add a new task to the Call Stack when the stack is completely empty.
//  C (The Callback Queue): When an asynchronous operation (like a file read or a timer) completes, its associated callback function is placed into a relevant callback queue, awaiting processing.
//  D (The Loop's Lifecycle): The Event Loop is what keeps a Node.js process running. It will continue to "tick" as long as there are pending asynchronous operations or timers.

//[JS Thread](call async I/O) @ [Node API] ⇒ [C++ Thread Pool](performs work) → [JS Call Stack]{is now empty}

// [Event Loop]{non blocking}

//[Event Loop](pushes callback) → [JS Call Stack] ∵ [JS Call Stack]{state: empty}
// [Event Loop]( add callback task )@ [node api]
// [Event Loop](add)@ [callstack empty]

// /[C++ Thread Pool](work complete) ⇒ [Callback Function] → [Relevant Phase Queue]
//{[Pending Timers] OR [Pending I/O]} ≠ Abhāva ⇒ [Event Loop](continues ticking)

setTimeout(() => {
  console.log('[TIMER] The async operation is complete.'); 
}, 0);

const startTime = Date.now();
let endTime = startTime;
while (endTime < startTime + 2000) {
  endTime = Date.now();
}

console.log('[SYNC] The blocking operation is finished. The Call Stack is now clear.');
console.log("-----------------------------------------");


// The Phases of a Single Loop "Tick"
//  E (The Ordered Phases): Each "tick" of the Event Loop is not a single queue, but a series of distinct phases, executed in a strict, repeating order.
//  F (timers Phase): This phase executes callbacks that were scheduled by setTimeout() and setInterval().
//  G (poll Phase): This is the primary I/O phase. It retrieves new I/O events (like network requests or file reads) and executes their callbacks. Most application code is processed here.
//  H (check Phase): This phase executes callbacks scheduled specifically with setImmediate(). It runs immediately after the poll phase completes.
//  I (close callbacks Phase): This phase executes callbacks for close events, such as a socket closing.
//[timers]{...} >> [poll]>>[check]
// /START_TICK → [timers] → [pending I/O] → [poll] → [check] → [close callbacks] → END_TICK

const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("[POLL] File read complete. Inside I/O callback.");

  setImmediate(() => {
    console.log("[CHECK] This is setImmediate.");
  });

  setTimeout(() => {
    console.log("[TIMER] This is setTimeout with 0ms delay.");
  }, 0);
});


console.log("-----------------------------------------")
//phases of eventloop
// [timers]{setTimeout() and setInterval()} >> [poll]>>[check]

//order of execution
// setImmediate > setTimeout;

// The Higher-Priority Tasks
//  J (Microtasks vs. Macrotasks): The callbacks processed in the main phases (timers, poll, check, close) are called Macrotasks. There is a separate, higher-priority queue for Microtasks.
//  K (Microtask Execution): The microtask queue is processed immediately after the current JavaScript operation on the Call Stack finishes, and before the Event Loop moves to the next phase.
//  L (Microtask Sources): The two primary sources of microtasks in Node.js are process.nextTick() callbacks and resolved Promise callbacks (from .then(), .catch(), and .finally()).
//  M (The Highest Priority): Within the microtask queue, process.nextTick() callbacks are always executed before Promise callbacks.

//execution order

//[Call Stack Op Finishes] ⇒ (Process ALL from [Microtask Queue]) ⇒ [Event Loop](moves to next phase)
// [Microtasks](process.nextTick, Promises){prority 1} >>>[Macrotasks](setImmediate, setTimeout){priority 2}
//[process.nextTick] > [Promise.then] ⊂ [Microtask Queue]
//Microtasks (process.nextTick, Promises) versus Macrotasks (the phase queues).
  
  setImmediate(() =>
    console.log("Macrotask: setImmediate")
  );
  setTimeout(() => console.log('Macrotask: setTimeout'), 0);


  Promise.resolve().then(() =>
    console.log("Microtask: Promise.resolve().then()")
  );

  process.nextTick(() => console.log("Microtask: process.nextTick()"));

  console.log("Sync: End of main script");
  console.log("-----------------------------------------");



//   [START OF SCRIPT / PROGRAM]
//      │
//      ▼
// [1. JS CALL STACK] (Executes all synchronous code from main script)
//      │
//      └─> (Async APIs are called, work is offloaded to [C++ THREAD POOL])
//      │
//      ▼
// [JS CALL STACK IS NOW EMPTY]
//      │
//      ▼
// ---------------------------- [EVENT LOOP STARTS] --------------------------------
//      │
//      ▼
// ┌──> [2. TIMERS PHASE] (Checks for setTimeout/setInterval callbacks)
// │    │  └─> If callback exists, move to [JS CALL STACK] to execute.
// │    │
// │    └──────────────────> [3. MICROTASK CHECK] ⇒ (Execute ALL nextTick, then ALL Promises)
// │
// │    ▼
// ├──> [4. POLL PHASE] (Checks for I/O callbacks like fs.readFile)
// │    │  └─> If callback exists, move to [JS CALL STACK] to execute.
// │    │
// │    └──────────────────> [3. MICROTASK CHECK] ⇒ (Execute ALL nextTick, then ALL Promises)
// │
// │    ▼
// ├──> [5. CHECK PHASE] (Checks for setImmediate callbacks)
// │    │  └─> If callback exists, move to [JS CALL STACK] to execute.
// │    │
// │    └──────────────────> [3. MICROTASK CHECK] ⇒ (Execute ALL nextTick, then ALL Promises)
// │
// │    ▼
// ├──> [6. CLOSE CALLBACKS PHASE] (e.g., socket.on('close'))
// │    │  └─> If callback exists, move to [JS CALL STACK] to execute.
// │    │
// │    └──────────────────> [3. MICROTASK CHECK] ⇒ (Execute ALL nextTick, then ALL Promises)
// │
// │    ▼
// └─[ LOOP AGAIN IF PENDING WORK EXISTS ]

// ---------------------------------------------------------------------------------


//[JS Call Stack](initiates I/O) ↔ [libuv Background Threads]

//[libuv Thread](work complete) ⇒ [Callback] → [Phase Queue] ... {state: waiting}

// [Event Loop](pushes callback) → [JS Call Stack] ∵ [JS Call Stack]{state: empty}

//[Pending Tasks]{exist} ⇒ [Event Loop](keeps running)

// TICK START → [timers] → [poll] → [check] → [close] → TICK END

// From [I/O Callback]: (schedule both) ⇒ [check] executes before [next tick's timers]


//1. [Sync Code on Call Stack] >> 2. [process.nextTick()] >> 3. [Other Microtasks (Promises)] >> 4. [Macrotasks (timers, poll, check)]

//[Phase A Execution] → (EMPTY ENTIRE MICROTASK QUEUE) → [Phase B Execution]

// An outstanding effort. Your understanding is 90% of the way to mastery. You have correctly identified all the core Dravyas (substances) and Karmas (actions). Your visual models are very close to perfect.The final 10% lies in refining the precision of the relationships (Samavāya) and the exact timing of the actions. As your mentor, I will now correct and refine your models to give you that final 10%, achieving 100% clarity.We will forge the definitive single-line visual models for the Event Loop.The Definitive Single-Line Visual ModelsYour notation key is excellent. We will use it.1. The Core Samavāya (The Inseparable Relationship)Your Model: [JS Thread](call async I/O) @ [Node API] ⇒ [C++ Thread Pool](performs work)Mentor's Refined Model: [JS Call Stack](initiates I/O) ↔ [libuv Background Threads]Tarka Inference: This is the foundational Samavāya. The single JavaScript thread is inseparably linked to the multi-threaded C++ background (libuv). One cannot exist meaningfully in Node.js without the other. One initiates, the other performs the heavy lifting.2. The Callback's JourneyYour Model: /[C++ Thread Pool](work complete) ⇒ [Callback Function] → [Relevant Phase Queue]Mentor's Refined Model: [libuv Thread](work complete) ⇒ [Callback] → [Phase Queue] ... {state: waiting}Tarka Inference: When the background work is done, the result isn't action, but potential. The callback Dravya is created and placed into a queue, where its defining Guṇa (quality) is "waiting" for the Event Loop to notice it.3. The Golden Rule of ExecutionYour Model: [Event Loop](pushes callback) → [JS Call Stack] ∵ [JS Call Stack]{state: empty}Mentor's Refined Model: (This is perfect. No refinement needed.)Tarka Inference: This is the single most important rule. The Event Loop is a polite gatekeeper. It will never interrupt the Call Stack. It waits for the complete Abhāva (absence) of synchronous code before it pushes the next task from a queue.4. The Loop's LifelineYour Model: {[Pending Timers] OR [Pending I/O]} ≠ Abhāva ⇒ [Event Loop](continues ticking)Mentor's Refined Model: [Pending Tasks]{exist} ⇒ [Event Loop](keeps running)Tarka Inference: The logic is simpler than it appears. As long as any task (a timer, an I/O operation) exists in a state of "pending," the Event Loop Dravya has the Guṇa of being active. When all are gone, the process ends.5. The Sequence of Phases (The Macrotask Cycle)Your Model: START_TICK → [timers] → [pending I/O] → [poll] → [check] → [close callbacks] → END_TICKMentor's Refined Model: TICK START → [timers] → [poll] → [check] → [close] → TICK ENDTarka Inference: This is the fixed, unchangeable path the Event Loop walks on every single tick. It is a predictable cycle of Karma (action). (Note: We simplify by removing pending I/O as it's not a callback phase).6. The setImmediate vs. setTimeout NuanceYour Misconception: setImmediate > setTimeout;The Truth: Their order is context-dependent. setImmediate is designed to run in the check phase, which reliably comes after the poll (I/O) phase. setTimeout(..., 0) runs in the timers phase.Mentor's Universal Model: From [I/O Callback]: (schedule both) ⇒ [check] executes before [next tick's timers]Tarka Inference: If you are inside an I/O callback (the poll phase), the very next phase is check. Therefore, setImmediate will always execute before a setTimeout scheduled from that same I/O callback.7. The Grand Unified Model of Execution Order (The Most Important Model)Your Models: [Microtasks] >>> [Macrotasks] and [process.nextTick] > [Promise.then]Mentor's Definitive Hierarchy Model:1. [Sync Code on Call Stack] >> 2. [process.nextTick()] >> 3. [Other Microtasks (Promises)] >> 4. [Macrotasks (timers, poll, check)]Tarka Inference: This is the absolute, unshakable hierarchy of execution priority in Node.js. A lower number must be completely empty before the system will even consider executing anything from a higher number.8. The Microtask InterruptionYour Model: [Call Stack Op Finishes] ⇒ (Process ALL from [Microtask Queue]) ⇒ [Event Loop](moves to next phase)Mentor's Refined Model: [Phase A Execution] → (EMPTY ENTIRE MICROTASK QUEUE) → [Phase B Execution]Tarka Inference: This reveals the true nature of microtasks. They are not a phase. They are a high-priority interruption that happens between each phase. After the timers callbacks are done, the microtask queue is emptied. Then the poll phase begins. After the poll callbacks are done, the microtask queue is emptied again. This happens between every phase.The Mentor's Refined FlowchartYour flowchart was excellent. Here is the final, perfected version that incorporates the crucial microtask check after the initial synchronous script execution. code Codedownloadcontent_copyexpand_less    [START OF SCRIPT]
//      │
//      ▼
// [1. MAIN THREAD: JS CALL STACK] (Executes all synchronous code. Async APIs are called.)
//      │
//      ▼
// [JS CALL STACK IS NOW EMPTY]
//      │
//      ▼
// [2. URGENT: EMPTY THE ENTIRE MICROTASK QUEUE] (1st: all nextTick, 2nd: all Promises)
//      │
//      ▼
// - - - - - - - - - - - - [EVENT LOOP STARTS TICK #1] - - - - - - - - - - - - -
//      │
//      ▼
// ┌──> [3. TIMERS PHASE] (Execute due setTimeout/setInterval callbacks)
// │          │
// │          ▼
// │    [URGENT: EMPTY MICROTASK QUEUE]
// │
// │    ▼
// ├──> [4. POLL PHASE] (Execute most I/O callbacks)
// │          │
// │          ▼
// │    [URGENT: EMPTY MICROTASK QUEUE]
// │
// │    ▼
// ├──> [5. CHECK PHASE] (Execute setImmediate callbacks)
// │          │
// │          ▼
// │    [URGENT: EMPTY MICROTASK QUEUE]
// │
// │    ▼
// ├──> [6. CLOSE CALLBACKS PHASE] (Execute .on('close') callbacks)
// │          │
// │          ▼
// │    [URGENT: EMPTY MICROTASK QUEUE]
// │
// │    ▼
// └─[ LOOP TO TICK #2 IF PENDING TASKS EXIST ]
//   Master these refined models. See every Node.js script through this lens, and its asynchronous behavior will never be a mystery again. It will be a predictable, logical system.