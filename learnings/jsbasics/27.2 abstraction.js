// function Circle(radius) {
//   this.radius = radius;
  
//   this.defaultLocation = {x:0, y:0};

//   this.computeOptimumLocation = function(){ // helps to draw the circle user no need to know
//     console.log("compute");
   

//   };
//   this.draw = function () {

//      this.computeOptimumLocation(); //no need to be accessed/ called outside
    

//     console.log("draw");
//   };
//   // happens automatically when using new kw
// }

// const circle = new Circle(10);
// // hide the details show the essentials-absraction
// //circle.computeOptimumLocation();
// circle.draw(); // draw


//hide the details not accessable-absraction(computeOptimumLocation)
//show only the essentials(draw,radius)
function Circle(radius) {
  let color = "red"; // private variable local variable not property of the object

  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 }; //private members of circle object

  let computeOptimumLocation = function () {//private method 
    console.log("compute");
  };
// closure - function inside a function - access the outer function variable
  this.draw = function () {
    let x,y; // local variable not property of the object
    computeOptimumLocation(); // using symbols to hide computeOptimumLocation
    console.log("draw");
  };
}