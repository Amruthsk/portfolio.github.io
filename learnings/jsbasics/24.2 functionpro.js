

function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

console.log(sum(1, 2, 3, 2, 5));


// circle object using object literal notation
//radius, area read only, 

let circle = {
    radius : 10,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

console.log(circle.area); // 314.1592653589793

circle.radius = 20; // change radius
console.log(circle.area); // 1256.6370614359173+