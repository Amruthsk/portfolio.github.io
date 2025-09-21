const fs = require("fs");

console.log("first line");
const a = 100;

setImmediate(() => {
  console.log("setImmediate1(cb)");
}); // libuv - 4

Promise.resolve().then(() => console.log("promise")); // libuv - 2

fs.readFile("./file.txt", "utf8", () => {
  console.log("File reading cb");
  setTimeout(() => {
    console.log("file setTimeout(cb)");
  }, 0);
  process.nextTick(() => console.log("file process.nextTick")); // libuv - 1
  setImmediate(() => {
    console.log("file setImmediate(cb)");
   
  }); // libuv - 4

  console.log("file end");
}); // libuv if takes time goes to check

setTimeout(() => {
  console.log("setTimeou1(cb)");
}, 0); // libuv - 3

process.nextTick(() => console.log("process.nextTick")); // libuv - 1

setTimeout(() => {
  console.log("Chief of Staff presents urgent message (from setTimeout).");
}, 0);

function printA() {
  console.log("a = ", a);
}

printA();
console.log("last line");




// first line
// a =  100
// last line
// process.nextTick
// promise
// setTimeou1(cb)
// File reading cb
// file end
// file process.nextTick
// setImmediate1(cb)
// file setImmediate(cb) eventloop cycle waits at poll so check 1st
// file setTimeout(cb) 2nd timer