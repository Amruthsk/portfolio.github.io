
// type conversion
console.log(10 == 10);
console.log('10' == 10);
console.log("---------------------------------------------------")

// No type conversion
console.log(10 === 10);
console.log("10" === 10);
console.log("---------------------------------------------------");



console.log(10 != 10);
console.log("10" != 10);
console.log("---------------------------------------------------");


console.log(10 !== 10);
console.log("10" !== 10);
console.log("---------------------------------------------------");



let x = "0";
let y = false;
console.log(x == y);   // true  (Abstract conversion equates the string "0" to the boolean false)
console.log(x === y);  // false (Strict comparison correctly differentiates String from Boolean)