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
