// --- Sādhana Canto 6: The Engine of Concurrency ---

console.log("1. Synchronous Code Start"); // [Call Stack]

// A Web API call that will place a callback in the Callback Queue.
setTimeout(() => {
  console.log("5. setTimeout (Callback Queue)"); // [Callback Queue]
}, 0);

// A Promise that will place a callback in the Microtask Queue.
Promise.resolve().then(() => {
  console.log("3. Promise .then (Microtask Queue)"); // [Microtask Queue]
});

// Another Promise, to prove the Microtask queue is emptied.
Promise.resolve().then(() => {
  console.log("4. Promise .then 2 (Microtask Queue)"); // [Microtask Queue]
});

console.log("2. Synchronous Code End"); // [Call Stack]

// --- The  (Inversion) ---
// The inversion is not code to write, but a thought experiment.
// What would happen if the Microtask Queue did NOT have priority?
// The expected  would be a different log order (e.g., 1, 2, 5, 3, 4).
// Our actual result will provide proof against this inversion.
