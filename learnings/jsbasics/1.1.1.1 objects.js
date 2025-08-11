// object - key value pair
//{key1 : "v1",
// key2 : number}

//mutable collection of key value pair
let hq = { intel: "Enemy at Hill 42" };
hq.intel = "Enemy has retreated";
console.log(hq);
//is mutable

//Objects are reference types; variables hold an address to the object.
let fieldCommand = hq; // This does NOT create a copy. It's a second keycard to the same HQ.
fieldCommand.logistics = "Ammunition low";
console.log(hq); // Check the original HQ reference.
//point to the same object in memory


//An Array is a special type of object for ordered collections
let roster = ["Miller", "Jackson", "Chen"];
console.log(typeof roster);
console.log(roster[1]);
//array= object,ordered list key as numerical index

//Functions can be passed as arguments, just like any other object.
const flankManeuver = () => console.log("Executing flank maneuver!");
const issueOrder = (drill) => {
  console.log("Order received. Relaying...");
  drill();
};
issueOrder(flankManeuver);

//function is first class object

//"A Promise is a placeholder for a future value, starting in a pending state.
const scoutMission = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Intel: The bridge is intact.");
  }, 1);
});

console.log(scoutMission); // Check immediately
scoutMission.then((intel) => console.log(`HQ received: ${intel}`));

//scoutMission is object - asynchronous placeholder


//e two profound qualities that separate them from primitives: mutability and reference.


// //creation of object

// var obj = {
//   fname: "Jhon",
//   lname: "Wick",
//   dob: 12/4/1987,
//   dob: 12/4/1987,

// };

// //date format not working

// console.log(obj);

// //access key values
// //get element & update element

// //[]
// //.penetrating
// var obj = {} //empty obj


// //is obj mutable?
// //objects are mutable -updateable  
// obj.fname = 'jhon'
// obj.lname = 'wick'
// obj["age"] = 23 // put key as a string

// console.log(obj)

// //picking specific element 
// //Note: from key can access values but not vice a versa because keys are unique but values may come similar 
// console.log(obj.age);
// console.log(obj["fname"]);


// //how to add a new property to an already created object
// obj.fname = "Don"; //- updates  if key present if key not present  - adds  a new key
// obj.company = "Fin";

// console.log(obj);

// //delete a key value pair?
// //delete operator
// delete obj.company;

// console.log(obj);



// // using new keyword - type object
// var obj2 = new Object();

// console.log(typeof obj2);
// obj2.fname = "jhon";
// obj2.lname = "rick";

// console.log(obj2);

// //picking specific element
// console.log(obj2.lname);

// //for in loop to iterate over

// let circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 2,
//   },
//   draw: function () {
//     console.log("draw");
//   },
// };

// //members - properties - hold value,
// //members-  function-method- defines logic

// //accessing object members
// circle.draw();

// // duplicate object to create object
// // Factory function create a new circle return object
// function createCircle(radius) {
//   //Camel notation
//   return {
//     radius, //key and value same
//     location: {
//       x: 1,
//       y: 2,
//     },
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }

// const cir1 = createCircle(3);
// console.log(cir1);

// // constructor function - naming different - first cap - pascal notation
// //using this,new kw

// function Circle(radius) {
//   console.log("this", this);
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
//   return this; // happens automatically when using new kw
// }

// //new kw
// // 1)create empty object
// // 2) set this to point to the object
// // 3)return object
// const another = new Circle(1); // this circle object
// // this kw reference object . penetrate the object to set properties of the object

// const a = Circle(1); // this window object dont define modiy golbal object

// // cir1.constructor
// // ƒ Object() { [native code] } // internal constructor to create objcet

// // another.constructor
// // ƒ Circle(radius){
// //     console.log('this', this)
// //     this.radius = radius;
// //     this.draw = function () {
// //         console.log("draw");
// //       }
// //       return this; // happens automatically when usin…

// // a.constructor
// // ƒ Window() { [native code] }
