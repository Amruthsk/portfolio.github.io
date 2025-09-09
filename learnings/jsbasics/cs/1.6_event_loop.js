// [Call Stack] is Empty? ⇒ ( Event Loop) → Pushes [Callback from Queue] to [Call Stack]


// // The System Architecture:
// //[[JS Runtime]] ⊃ {[JS Engine] ⊃ [Call Stack]} + {[Web/Node APIs]} + {[Microtask Queue]} + {[Task Queue]} + {[Event Loop]}

// [General's Desk Clear] ⇒ (Radio Operator Checks) → Hands Over ALL [Priority Messages] THEN ONE [Field Message] → [General's Desk]


// [JS Engine] ↔ [Call Stack] ↔ [Web API / Node API] ↔ [Callback Queue] ↔ [Event Loop]↔[Microtask Queue]{high priority,Promise}


// [Call Stack]<-[Event Loop](monitor)-> [Microtask Queue]{high priority,Promise}/[Callback Queue or task Queue]
//[Event Loop] ⇔ {: The orchestrator that moves [Callbacks] from [Queues] → [Call Stack]}

// [Call Stack]{single threaded}
//[Call Stack] ⇔ {: Single, LIFO (Last-In, First-Out) execution context}

//[Web API (setTimeout, DOM events, or network requests via fetch)/ Node API(C++ api)]{handle async}
//[Web/Node API] ⇔ {: Concurrent environment, separate from [Call Stack], for long-running tasks}

//[Callback Function] ↔ (Instructional  for future execution)

//[Promise] ↔ [Internal State {pending|fulfilled|rejected}] → (.then) ⇒ [Callback] @ [Microtask Queue]

//Asynchronous Handoff (Dispatching the Mission)
// (Execute Async Fn @ [Call Stack]) → (Task Handoff) → [Web/Node API]

// // The Queuing Action (Mission Complete, Awaiting Debrief)
// (API Finishes Task) → [Callback] @ {[Microtask Queue] for promise| [Task Queue]for others}

// [Event Loop] ⇔ {The Bridge triggered by Emptiness}

// [Task Queue] ⇔ {FIFO & Processed ONE-per-Loop}

// [Microtask Queue] ⇔ {High-Priority & Drained COMPLETELY-per-Task}


// eventloop cycle
// [?[Value] @ Call Stack] ⇒ (Event Loop Dequeues: (1st) ALL from [Microtask Queue], (2nd) ONE from [Task Queue]) → [Callback] @ [Call Stack]
//(console.log) @ [Call Stack]

console.log('Start of eloop1');


//[callback function]{delay of 0 milliseconds}  (setTimeout)@[Web API]
//[callback function]{delay of 0 milliseconds} <-> (setTimeout)
//[Engine] → Hands off [Callback] to [Timer API]

//Asynchronous Hand-off: setTimeout()
//2step journey
//(setTimeout) @ [Call Stack] ⇒ [Callback ] { 0ms delay} @ [[Web API Environment]]

//[[Timer API]] { Timer Complete} ⇒ [Callback ] @ [[Task Queue]]

setTimeout(() => {
  console.log('Perception: The Field Radio message arrives.');
}, 0);


console.log('End of eloop1 ');

//1st[Callstack] 2nd[external api]




//[promise]{pending|fulfilled|rejected} ---  (resolve)--[promise]{fullfilled}-->(.then)↔[callback function]↔[Microtask Queue]
//(.then)----> high priority microtask queue


//[Engine] → Schedules [Callback] in [Microtask Queue]


Promise.resolve().then(() => {
  console.log("Perception: The ENCRYPTED message arrives.");
});