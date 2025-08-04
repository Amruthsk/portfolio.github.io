//common js module pattern
//require('./xyz.js'); //one module into another
// requires the xyz.js file -firstrunning the file- after that it will  run all code in this file

//require('./sum.js'); //one module into another -wont work, because sum.js is not exported
//const add = require('./sum.js'); //1st importing the add function only from sum.js
//const obj = require("./sum.js"); // 2nd import
//const { x, addFunction } = require("./sum.js"); //destructuring - 3rd

// ESM module patter
// import {n,addFunction} from "./Calculate/sum.js";

//import multiply
// const {calculateMultiplication} = require("./Calculate/multiply.js")
const{addFunction,calculateMultiplication} = require("./Calculate")

var name = "NodejS is easy";

var a = 3;
var b = 9;

console.log(name);
console.log(a + b);
 
// 1st import - only function
// addFunction(a, b); // 1st import calling the function directly from sum.js
// requires the sum.js file -firstrunning the file- after that it will  run all code in this file

//2nd import - both function & variable - access using obj
// obj.addFunction(a,b);// 2nd import  calling 
// console.log(obj.x);//2nd importing variable

// //3rd import using // destructuring- direct access
// console.log(x);
// addFunction(a,b);

// // 4th import using ESM modules
// console.log(n);
// addFunction(a, b);

//5th import from a folder
// calculateMultiplication (a, b);

//from index.js file
calculateMultiplication(a,b);
addFunction(a,b);


