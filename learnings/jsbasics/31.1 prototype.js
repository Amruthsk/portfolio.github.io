let x = {};

let y = {};

// first looks member inside the object
// second looks memeber inside the object base/prototype/ root object

// multilevel inheritance

//empty array
let myArray = [];

// myarray-->prototype array base--->prototype object base


function Circle(radius) {
  this.radius = radius;
  
  this.draw = function () {
    console.log("draw");
  };
  // happens automatically when using new kw
}

const circle = new Circle(10);
// hide the details show the essentials-absraction
//circle.computeOptimumLocation();
circle.draw(); // draw

let obj = {};

console.log(obj.__proto__);// parent of my object

console.log(Object.prototype); // Constructor.prototype both are same

let array = [];

console.log(array.__proto__);

console.log(Array.prototype);

console.log(circle);

console.log(Circle.prototype);
console.log(circle.prototype);