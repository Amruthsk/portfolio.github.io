// A function that returns a Promise that fulfills after a delay

//console.log@[callstack]
////Asynchronous Hand-off: setTimeout()
//2step journey
//(setTimeout) @ [Call Stack] ⇒ [Callback ] { 0ms delay} @ [[Web Timer API Environment]]

//[[Timer API]] { Timer Complete} ⇒ [Callback ] @ [[Task Queue]]





function getFutureValue() {
  console.log("1. Asynchronous operation initiated.");
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("The future value has arrived.");
    }, 1000); // 1-second delay
  });
}

// --- Build & Observe: .then() ---
console.log("--- Phase 1: Using .then() ---");
const promise = getFutureValue();


// This runs immediately, proving the main thread is NOT blocked.
console.log("2. Main thread continues execution while promise is pending.");

// (readfile)----->return[promise object]
// [promise]{pending}

//[promise]{pending|fulfilled|rejected} ---  (resolve)--[promise]{fullfilled}-->(.then)↔[callback function]↔[Microtask Queue]
//(.then)----> high priority microtask queue

//promise{fullfilled}-----(.then)--->data{value}
promise.then((value) => {
  // This runs last, after the promise fulfills and the event loop processes it.
  console.log("4.", value);
});

//(Inversion) ---
console.log("\n--- Phase 2: The Inversion ---");
console.log("Attempting to use the promise value synchronously...");
// We log the promise object itself, not its future value.
//// [promise]{pending}
console.log("Direct Log:", promise); //  of the {Pending} state
console.log("\n");



//promise{rejected}-----(catch)-->{error}