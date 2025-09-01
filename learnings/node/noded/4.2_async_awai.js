//  A (The Async Contract): The async keyword, when used to declare a function, ensures that the function will always return a Promise.
//  B (Implicit Promise Wrapping): If an async function explicitly returns a value (e.g., return 'done'), that value will be automatically wrapped in a Promise that resolves with the returned value.
//  C (The Await Prerequisite): The await keyword is only valid and can only be used inside a function declared with the async keyword.
//  D (The Execution Pause): The await keyword pauses the execution of the async function at that line. It waits for the Promise it is called on to settle (either resolve or reject).
//  E (The Value Unwrapping): Once the awaited Promise resolves, the await expression evaluates to the resolved value of the Promise.
//  F (The Synchronous Appearance): Code inside an async function executes sequentially, statement by statement, making asynchronous logic appear clean and synchronous, even though the Node.js process remains non-blocking.
//  G (The Error Handling Channel): A standard try...catch block can be used around an await expression to handle rejected Promises, channeling asynchronous errors into familiar synchronous error-handling syntax.


//(Async){guarantees return a promise{value}}

async function formulatePlan() {
  return "Operation Cobra: Commence";
}

const plan = formulatePlan();

console.log(plan);


function dispatchScout() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Bridge is clear.");
      }, 2000);
    });
}
//(await){pasuses the execution and extracts value}
async function executePlan() {
  console.log("General: Dispatching scout to the bridge...");
  const scoutReport = await dispatchScout();
  console.log(`General: Received report. Status: "${scoutReport}"`);
}

executePlan();