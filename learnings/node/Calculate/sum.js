//modules are protected by default - variables & functions are not accessible outside the module

 var x = "This is variable from sum.js using cjs module"

// export 
const n = "exporting from  mjs ESM module"

console.log("This is the sum module");

//export 
function addFunction(a, b) {
  sum =  a + b;
  console.log("Sum is: ",sum);
}

//common js module pattern
// module.exports = addFunction; //- exporting function only
 
// module.exports = {
//     x:x,
//     addFunction:addFunction,
    
// }; // - oldway 

// new way
module.exports = {
    x,
    addFunction, 
}; 