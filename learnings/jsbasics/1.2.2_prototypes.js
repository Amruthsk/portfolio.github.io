// objects are created by constructor calls by using "kw"- new

//class= blueprints
//objects=instance


//class separate object separate - new change - does not affect the already created object
//js - no mental model of copying

//class-link-object - any change of class 
//these object are based on the class
//link - prototype

//prototypes
//Mechanism using which js objects inherits features form one another - 

let x = {};
// it has link to prototype
//expand prototype(object - k-v pair): -> it has more properties--> has its own prototype -> chain of prototype till the proto is null

//huge linkage - prototype till null
//prototype - key value pair

// if we directly change - already created object has no access of the updated property
//but if we link the to prototype the even old object will have the access

function Product(n){
    this.name = n;

}

let d = new Product("iphone");//d - new object

// attach new members to prototype-> gets attach/access to old and new project
Product.prototype.display = function(){
    console.log("name of the product is  ",this.name)
}
// now d can access

//d- empty object
//links to product.prototype
//links to Object.prototype


// We can create an object that inherits from another
// The Captain's SOP manual object
//lieutenantOrders
const captainSOP = { engagementProtocol: "Assess, report, await orders." };

// The Lieutenant inherits all procedures from the Captain
const lieutenantOrders = Object.create(captainSOP);//because

// The Lieutenant gets a mission-specific instruction
lieutenantOrders.specialOrder = "Secure the bridge at all costs.";

//inked to captainSOP as its prototype 

//The engine searches the prototype chain if a property isn't on the object itself.
//lieutenantOrders
console.log(lieutenantOrders.engagementProtocol);// perceived the value from captainSOP 
//can access properties from its prototype


//The chain search stops as soon as a property is found
// /The lookup on lieutenantOrders
lieutenantOrders.engagementProtocol = "Engage on sight per special order.";
console.log(lieutenantOrders.engagementProtocol);
//founc property on the object itself and stopped



//We can perceive the hidden [[Prototype]] link
 Object.getPrototypeOf(lieutenantOrders) === captainSOP; //Object.getPrototypeOf()  provides direct perception of this link
//has a direct prototype link to captainSOP

//Most chains end in Object.prototype and then null
const p1 = Object.getPrototypeOf(lieutenantOrders); // Should be the Captain
console.log(p1 === captainSOP);

const p2 = Object.getPrototypeOf(p1); // The Captain's superior (Army Field Manual)
console.log(p2 === Object.prototype);

const p3 = Object.getPrototypeOf(p2); // The superior of the Army Field Manual
console.log(p3);





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

console.log(obj.__proto__); // parent of my object

console.log(Object.prototype); // Constructor.prototype both are same

let array = [];

console.log(array.__proto__);

console.log(Array.prototype);

console.log(circle);

console.log(Circle.prototype);
console.log(circle.prototype);