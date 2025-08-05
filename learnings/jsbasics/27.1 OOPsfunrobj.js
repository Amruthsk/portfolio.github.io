// function Circle(radius) {
  
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
//   // happens automatically when using new kw
// }

// const cir1 = new Circle(1);

// // cir1
// // Circle {radius: 1, draw: ƒ}



// // cir1.constructor
// // ƒ Circle(radius) {
  
// //   this.radius = radius;
// //   this.draw = function () {
// //     console.log("draw");
// //   };
// //   // happens automatically when using new kw


// // internal representation
// const Circle1 = new Function(
//   "radius",
//   `this.radius = radius;
//   this.draw = function () {
//     console.log("draw"); 
// }
//     `);

// // const another = new Circle1(1);


// // another.constructor
// // ƒ anonymous(radius
// // ) {
// // this.radius = radius;
// //   this.draw = function () {
// //     console.log("draw"); 
// // }
    

// // Circle.constructor
// // ƒ Function() { [native code] } to create object internally

// // Circle1.constructor
// // ƒ Function() { [native code] }


// // methods available in function


// const cir1 = new Circle(1); // this object

// // same as

// Circle.call({}, 1)// {}- this one argument

// Circle.call({}, 1,2,3,4,5,6,7)// one argument


// const cir1 =  Circle(1); // window object object

// // same as


// Circle.call({window}, 1)// one argument

// // apply method similar pass it with array as second argument
// Circle.call({}, [1, 2, 3, 4, 5]);



// // primitive- value type
// copied by value
// let x = 10;
// let y = x;  //y = 10 not changed

// x = 20;


// copied by reference
// let x = {value: 10};
// let y = x;  //y = 10 not changed

// x.value = 20;


// primitive type

// let no = 10;

// console.log(no);  //script 10

// function increase(no){
//     no++;
// console.log(no);  //local 11
// }

// increase(no);

// console.log(no); //script 10

//reference type

// let obj = {value:10};

// console.log(obj);  //script 10

// function increase1(obj){
//     obj.value++;
// console.log(obj);  //local 11
// }

// increase1(obj);

// console.log(obj); //script 11


// add remove property

function Circle(radius) {
  
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
  // happens automatically when using new kw
}

const circle = new Circle(10);

// dot location easy
circle.locationx ={x:1};

// bracket notation 
circle['locationy'] = {y:1};
circle["prop"] = { prop: undefined };

//for dynamic access-
const propertyz = 'locationz'
circle[propertyz] = {z: 1 };

circle["password"] = { pass:'abc' };

//delete property from existing object dont want to send password,card info
delete circle['password'];




// // enumerating properties
// console.log('key');
// for (let key in circle){
//     console.log(key);
// }


// console.log('key and value')
// //access value bracket notation
// for (let key in circle) {
//   console.log(key,circle[key]);
// }

// console.log("Properties only");
// //get only properties
// for (let key in circle) {
//     if (typeof circle[key] !== 'function')
//         console.log(key, circle[key]);
// }

// console.log("methods only");
// //get only properties
// for (let key in circle) {
//   if (typeof circle[key] == "function")
//      console.log(key, circle[key]);
// }

// console.log("using method");
// const keys = Object.keys(circle);
// console.log(keys);

// console.log("using method");
// const values = Object.values(circle);
// console.log(values);

// console.log("using method");
// const entries = Object.entries(circle);
// console.log(entries);



// console.log("check property is in using in");
// if ('radius' in circle)
//     console.log('circle has a radius');


circle.password