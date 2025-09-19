// process.nextTick(cb);
// Promise.resolve(cb);
// setTimeout(cb,0);
// setInterval(cb,0);
// fs.readFile("./file.txt",cb);
// https.get("url", cb);
// setImmediate(cb);
const fs = require("fs");

console.log("first line");
const a = 100;

setImmediate(() => {
  console.log("setImmediate(cb)");
}); // libuv - 4

Promise.resolve().then(() => console.log("promise")); // libuv - 2

fs.readFile("./file.txt", "utf8", () => {
  console.log("File reading cb");
}); // libuv if takes time goes to check

setTimeout(() => {
  console.log("setTimeout(cb)");
}, 0); // libuv - 3

process.nextTick(() => console.log("process.nextTick")); // libuv - 1

function printA() {
  console.log("a = ", a);
}

printA();
console.log("last line");
