//name of global object in node - global
//console.log(global);// prints the global object

console.log(this); //empty object
console.log(this === global); //false in node  true, in the global scope, 'this' refers to the global object
//true for browser, but in node 'this' refers to the module.exports object
console.log(this === module.exports); // true, in the global scope, 'this' refers to the module.exports object
console.log(globalThis === global); // true, globalThis is the global object in all environments

console.log(globalThis === globalThis.globalThis); // true (everywhere)
//console.log(window === window.window); // true (in a browser)
//console.log(self === self.self); // true (in a browser or a Web Worker)
//console.log(frames === frames.frames); // true (in a browser)
console.log(global === global.global); // true (in Node.js)
