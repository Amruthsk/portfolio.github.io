//  A (The Single Thread): Node.js applications execute JavaScript code on a single main thread, managed by an "Event Loop."
//  B (The Non-Blocking Principle): The core design philosophy of Node.js is to be non-blocking. Potentially slow operations, especially Input/Output (I/O) like reading files or making network requests, should not halt the execution of other code.
//  C (The Offloading Mechanism): To achieve non-blocking I/O, Node.js uses the underlying libuv library to delegate these slow operations to a worker pool (a set of threads separate from the main JavaScript thread).
//  D (The Callback Pattern): When an asynchronous operation is initiated, a callback function is provided. This function is not executed immediately; instead, it is placed in a queue and is only executed by the Event Loop after the offloaded operation is complete.
//  E (The Event Loop's Role): The Event Loop's primary karma is to continuously check the main call stack and the callback queue. If the call stack is empty, it takes the first available task from the queue and executes it.
//  F (The Synchronous Exception): Node.js provides synchronous alternatives for most asynchronous methods (e.g., fs.readFileSync). These synchronous methods will block the single main thread, halting the Event Loop and all other execution until they complete.


