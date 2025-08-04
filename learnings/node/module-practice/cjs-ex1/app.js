// app.js

// This is the  line for IMPORTING
const myMath = require("./math.js");
const data = require("./data.json");

const sum = myMath.add(10, 5);
console.log("The sum is:", sum); // Expected output: 15

const difference = myMath.subtract(10, 5);
console.log("The difference is:", difference); // Expected output: 5

console.log(data);