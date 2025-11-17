function X() {
  console.log("x");
}

function y(x) {
  // y-higher order function
  X();
}

// fuction which takes another function as argument  - higher order function

//how to approach problem
//have array with radius of four circle
//task- area,circumference,diameter

// const radius = [3, 2, 4, 1];
// function calucateArea(radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// }
// console.log(calucateArea(radius));

let radius = [3, 2, 4, 1];

const calucateArea = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};

console.log(calucateArea(radius));



const calucatecircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * 2);
  }
  return output;
};

console.log(calucatecircumference(radius));





const calucatediameter = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push( radius[i] * 2);
  }
  return output;
};

console.log(calucatediameter(radius));


// copy paste code not a good way
//repetation use DYI
// only logic changes


// logic cb 
// repeated higher order 



const radius = [3, 2, 4, 1];

// logic
//area
const area = function (radius) {
  return Math.PI * radius * radius;
};

//circumference
const circumference = function (radius) {
  return Math.PI * radius * 2;
};
//diameter
const diameter = function (radius) {
  return radius * 2;
};

// higher order function similar to map  which iterates over an array
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

//area
console.log(calculate(radius, area));
//circumference
console.log(calculate(radius, circumference));
//diameter
console.log(calculate(radius, diameter));

// similar to map higher order function

console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diameter));

// higher order function similar to map
// put function calculate in Array.prototype
Array.prototype.calculate = function (logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));
