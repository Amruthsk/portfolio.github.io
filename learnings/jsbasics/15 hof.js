function X() {
  console.log("x");
}
function y(x) {
  // y-higher order function
  X();
}

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

const radius = [3, 2, 4, 1];

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

