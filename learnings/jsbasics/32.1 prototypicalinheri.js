// function Shape(){

// }
// Shape.prototype.duplicate = function(){
//     console.log("duplicate");
// }

// const s = new Shape();

//s-object
//shape base/shape.prototype
//object base

// function Circle(radius){
//     this.radius = radius;
// }


// Circle.prototype.draw = function(){
//     console.log("draw");
// }

// //Circle.prototype=Object.create(Object.prototype)// object base

// const c = new Circle(1);




//2 Inherit
// function Circle(radius) {
//   this.radius = radius;
// }
//   // Inherit
//   Circle.prototype = Object.create(Shape.prototype);
  

// Circle.prototype.draw = function () {
//   console.log("draw");
// };

// //Circle.prototype=Object.create(Object.prototype)// object base

// const c = new Circle(1);
// console.log(c.constructor);

//3fix constructor
// function Circle(radius) {
//   this.radius = radius;
// }
// // Inherit
// Circle.prototype = Object.create(Shape.prototype);

// // 🔧 Fix constructor
// Circle.prototype.constructor = Circle;

// Circle.prototype.draw = function () {
//   console.log("draw");
// };

// //Circle.prototype=Object.create(Object.prototype)// object base

// const c = new Circle(1);
// console.log(c.constructor);

// //c-object
// //circle base/circle.prototype
// //object base













//4 calling the super constructor


function Shape() {
    this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

const s = new Shape();

//calling shape constructor




function Circle(radius,color) {//every function is object so shape obj use call method to use color property
  Shape.call(this,color);
  this.radius = radius;
}
// Inherit from shape
Circle.prototype = Object.create(Shape.prototype);

// 🔧 Fix constructor from shape to circle
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log("draw");
};

//Circle.prototype=Object.create(Object.prototype)// object base

const c = new Circle(1,'red');
console.log(c.constructor);