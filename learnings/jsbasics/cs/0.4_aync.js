// A function that returns a Promise that fulfills after a delay
function getFutureValue() {
  console.log("1. Asynchronous operation initiated.");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("The future value has arrived.");
    }, 1000); // 1-second delay
  });
}


async function runAsyncFunction() {
  console.log("--- Phase 3: Using async/await ---");
  // This looks synchronous but behaves asynchronously.
  const asyncPromise = getFutureValue();
  console.log("2. Async function continues until the 'await' keyword.");

  // The function execution PAUSES here, but the main thread is free.
  const value = await asyncPromise;

  // This line only runs after the promise has fulfilled.
  console.log("4.", value);
}

// Call the async function and add a final log to prove non-blocking
runAsyncFunction();
console.log("3. Code outside the async function runs BEFORE await completes.");

