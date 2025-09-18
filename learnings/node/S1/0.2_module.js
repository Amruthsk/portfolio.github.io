// import { availableMemory } from "process";
// import { emitKeypressEvents } from "readline";

// module.exports = { myFunction, myVar };

// export function myFunction() { /* ... */ }
// export const myVar = 42;



// Node.js give code to v8 -> execute

// Before giving code to v8  - wrapping 
// wrapping inside the IIFE

// function x(){

//     //all within scope
// //

// }

// // global scope





// (Assignment) @ [privateVariable]
const privateVariable = "This is encapsulated.";

// (Assignment) @ [module.exports] / [=] ⇒ [Module] {Public Interface}
module.exports.getSecret = function() {
  return privateVariable;
};





// require(/path)
// (require) @ [Path] ⇔ {(Resolve) ⇒ (Load) ⇒ (Wrap) ⇒ (Evaluate) ⇒ (Cache)}

let wrap = function(script) { // eslint-disable-line func-style
  return Module.wrapper[0] + script + Module.wrapper[1];
};

const wrapper = [
  '(function (exports, require, module, __filename, __dirname) { ',
  '\n});',
];


