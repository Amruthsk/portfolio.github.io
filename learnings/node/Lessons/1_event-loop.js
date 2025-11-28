// The Logic: Stack > nextTick > Promise > Macrotask (Timer/Check)

console.log("1. Stack"); 

setTimeout(() => console.log("5. Timer (Macrotask)"), 0); 
setImmediate(() => console.log("6. Check (Macrotask)"));

Promise.resolve().then(() => console.log("4. Promise (Microtask P2)"));

process.nextTick(() => console.log("2. nextTick (Microtask P1)"));



setTimeout(() => console.log('Timer (Phase 1)'), 0);
setImmediate(() => console.log('Check (Phase 3)'));

Promise.resolve().then(() => console.log('Promise (Micro 2)'));
process.nextTick(() => console.log('NextTick (Micro 1)'));

console.log('Main Stack (Start)');

