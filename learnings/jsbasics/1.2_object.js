//Object, Array, Function, Date, Promise

const { ModuleDetectionKind, getLineAndCharacterOfPosition } = require("typescript");

 //A (The Primal Substance):The plain Object- fundamental data type - collection of properties - key - value pair
const steelBlock = {};
//[[object]|{empty}]
//[steelBlock] ---address---> [[object]|{empty}]


steelBlock.material = 'Carbon Steel';
//[steelBlock] ---address--->[object | {material}--->[string|{Carbon Steel}]]
console.log("Action 1: The Primal Substance");
console.log(steelBlock);

console.log("Is it an Object?", steelBlock instanceof Object);
console.log("---");

//[steelBlock]
// |
//[is a fundamental object capable of holding {qualities}] 



 // B (The Inseparable Relationship - ↔): Every object in JavaScript has an inseparable internal link, denoted as [[Prototype]]
 // object ↔ [[Prototype]]
 //c(The Great Chain of Being): The [[Prototype]] link forms a "prototype chain." -----> 
 //property is accessed, -> engine searches the object itself ->to its prototype -> prototype's prototype until property is found or chain end -null
console.log("Action 2:  Prototype Chain of Being");
const steelBlockBlueprint = Object.getPrototypeOf(steelBlock);
console.log("Blueprint of steelBlock:", steelBlockBlueprint);

const ultimateBlueprint = Object.getPrototypeOf(steelBlockBlueprint);
console.log("Blueprint of the blueprint:", ultimateBlueprint);
console.log("---");



// [My steelBlock (Pakṣa)]
// |
// ( prototype exists, but its prototype's prototype is null )
// |
// [is part of a finite chain of prototype] 


 //D (The Illusion of Many datatypes): 
 // Array, Function, Date, and Promise - not fundamentally different kinds of data types - but all at their core specialized Objects
 //E (The Power of Specialization): The unique behaviors and methods of these specialized objects -are not qualities they possess directly
 // they inherit these powers via the prototype chain from a master blueprint object (e.g., Array.prototype, Function.prototype).
 //F (Array Specialization): Object with internally optimized for holding an ordered, numerically indexed collection of data
 //inherits its special powers (like .map(), .filter(), .push()) from Array.prototype.

 const gearbox = [10, 20, 30];
 //[label:gearbox] ---address--->[object |[10,20,30]]

console.log("Action 3: The Gearbox (Array)");

console.log("Is a gearbox an Object?", gearbox instanceof Object);
console.log(
  "Does the gearbox itself have .map?",
  gearbox.hasOwnProperty("map")
);//false
 console.log(
   "Blueprint has .map?",
   Object.getPrototypeOf(gearbox).hasOwnProperty("map")
 );//true


const gearboxBlueprint = Object.getPrototypeOf(gearbox);
console.log("Blueprint of gearbox:", gearboxBlueprint);
const ultimategearBlueprint = Object.getPrototypeOf(gearboxBlueprint);
console.log("Blueprint of the blueprint:", ultimategearBlueprint);
const ultimatesultimategearBlueprint = Object.getPrototypeOf(
  ultimategearBlueprint
);
console.log(
  "Blueprint of the blueprint of the blueprint:",
  ultimatesultimategearBlueprint
);


//().map(), .filter(), .push()) <-> Array.prototype.
console.log(
  "Does its Blueprint have .map?",
  gearboxBlueprint.hasOwnProperty("map")
);
console.log("---");

//[Array]
//|
//(.map is on prototype)
//|
//derives its power from its prototype, not from itself




 //G (Function Specialization):Object with the unique, special quality of being callable (it contains executable code)
 //inherits contextual powers (like .call(), .apply(), .bind()) from Function.prototype

function motor(power) {
  return `Motor running at ${power}W`;
}
//[label:motor]---->[function|{[motor]-(set of instruction)}]
motor.housing = "Cast Iron";
////[motor]-{property}
console.log("Action 4: The Motor (Function)");
console.log("Motor casing material:", motor.housing);

//action //[motor]-(set of instruction)
console.log("Motor status:", motor(120));
console.log("---");




 // H (Date Specialization): Object with internally represents a single moment in time (as a number).
 // inherits time-related powers (like .getFullYear(), .getMonth()) from Date.prototype
const chronometer = new Date();
console.log("Action 5: Other Specialized Tools");
console.log("Is Chronometer (Date) an Object?", chronometer instanceof Object);
console.log(
  "Chronometer has own .getFullYear?",
  chronometer.hasOwnProperty("getFullYear")
);//false
console.log(
  "Blueprint has .getFullYear?",
  Object.getPrototypeOf(chronometer).hasOwnProperty("getFullYear")
);//true

//const chronometer = new Date();
//[label:chronometer]-------->[Date|{new Date()}]

//.getFullYear(), .getMonth() <-> Date.prototype

// I (Promise Specialization): Object  designed to be a placeholder for a future value, managing the states of an asynchronous operation.
//inherits its special powers (like .then(), .catch(), .finally()) from Promise.prototype.

 const workOrder = new Promise((resolve) => resolve("Job Done"));console.log("Is Work Order (Promise) an Object?", workOrder instanceof Object);
 console.log("Work Order has own .then?", workOrder.hasOwnProperty("then"));
 console.log(
   "Blueprint has .then?",
   Object.getPrototypeOf(workOrder).hasOwnProperty("then")
 ); 

//  .then(), .catch(), .finally() <-> Promise.prototype.

//[[object]|{empty}]
//[steelBlock] ---address---> [[object]|{empty}]
//[steelBlock] ---address--->[object | {material}--->[string|{Carbon Steel}]]
//object ↔ [[Prototype]](blueprint)
//steelBlock ↔ [[Prototype]] finite chain of prototype
//Array, Function, Date, and Promise - specialized objects -  (unique* behaviors and methods)<----> prototype chain
//blueprints holds behaviours and methods


//object ↔ [[Prototype]](blueprint)↔ [[Prototype]](blueprint)↔ [[Prototype]](blueprint)↔ [[Prototype]](blueprint)--null

//Array object ↔ direct properties & method [[Prototype]](blueprint)↔  inherited properties & method (special powers-like .map(), .filter(), .push()) <----> Array.prototype.

//function object ↔ direct properties & method[[Prototype]](blueprint)↔  inherited properties & method(contextual powers- like .call(), .apply(), .bind()) <----> function.prototype.

//Date object ↔ direct properties & method[[Prototype]](blueprint)↔  inherited properties & method(time-related powers-like .getFullYear(), .getMonth() )<----> Date.prototype.

//Promise object ↔ direct properties & method[[Prototype]](blueprint)↔  inherited properties & method(time-related powers-like  .then(), .catch(), .finally()) <----> Promise.prototype.


// //const steelBlock = {};
// [steelBlock] ──> [[Object] | { (empty) }]

// steelBlock.material = 'Carbon Steel';
// [steelBlock] ──> [Object] | { material: 'Carbon Steel' }

// const gearbox = [10, 20, 30];
// [gearbox] ──> [Array] | { 0:10, 1:20, 2:30, length:3 }

// function motor(power) {
//   return `Motor running at ${power}W`;
// }
// [motor] ──> [Function] | { name:'motor', length:1, code: {...} }

// const chronometer = new Date();
// [chronometer] ──> [Date] | { internal_time_value: 167... }

// const workOrder = new Promise((resolve) => resolve("Job Done"));

// { (<pending>, <fulfilled>, or <rejected>} and its Result {(<undefined>, a value, or an error)}

// Initially: [workOrder] ──> [Promise] | { State: '<pending>', Result: <undefined> }
// After resolving: [workOrder] ──> [Promise] | { State: '<fulfilled>', Result: 'Job Done' }





//plain object
// [obj] ----> [[Prototype]] ----> [Object.prototype] ----> [[Prototype]] ----> null
//   └- (has its own properties like .name)   └- (inherits methods like .toString(), .hasOwnProperty())

//Property Lookup
// // Accessing obj.name:
// [obj]?name ---> Found! ---> Return value. (Search stops)

// // Accessing obj.toString():
// [obj]?toString ---> Not Found! ---> Follow [[Prototype]] link...
//   [Object.prototype]?toString ---> Found! ---> Return method. (Search stops)



// // Accessing obj.nonExistentProperty:
// [obj]?prop ---> Not Found! ---> Follow [[Prototype]] link...
//   [Object.prototype]?prop ---> Not Found! ---> Follow [[Prototype]] link...
//     [null]?prop ---> End of chain. ---> Return undefined 

//array
// [myArray] -> [[Prototype]] -> [Array.prototype] -> [[Prototype]] -> [Object.prototype] -> [[Prototype]] -> null
//    └- (has .length)            └- (inherits .map, .filter) └- (inherits .toString)

function oddOrEven(x) {
  return x % 2 == 0; //returns a boolean
}

let arr = [1, 2, 3, 4, 5];
const result3 = arr.filter(oddOrEven);

// for all specialized objects
//[Specific Instance] ---> [Specific.prototype] ---> [Object.prototype] ---> null


// Array:
// [myArray] --(has)--> .length | --(inherits from Array.prototype)--> .map(), .filter(), .push()
// Function:
// [myFunc] --(has)--> .name | --(inherits from Function.prototype)--> .call(), .apply(), .bind()
// Date:
// [now] --(inherits from Date.prototype)--> .getFullYear(), .getMonth(), .toISOString()
// Promise:
// [myPromise] --(inherits from Promise.prototype)--> .then(), .catch(), .finally()



 // both Objects and their unique methods are located on their prototypes, not on themselves


 // for creating objects -(Constructor Function)
 //bridge between prototype and instance


// A (The Core ()): The (new) keyword is the central operator, that initiates the creation of a specialized object (an "instance")

//B (The Creative Agent): Any ordinary JavaScript Function can be used as a "Constructor Function"-blueprint

// C (The Unseen [Blueprint]): When any Function is created, 
// JavaScript automatically creates a[ plain Object] and assigns it to the [{function's .prototype} ]property

// D The Four-Fold Path of new
//Creation): A new, empty plain Object {} is created out of the void.
//(Linking): The [[Prototype]] of this new object is inseparably linked to the Constructor Function's .prototype object (the blueprint fromc
//(Execution): The Constructor Function is executed, 
// with its this keyword context bound to the newly created object from step 1.
//  This allows the function to add {properties}  to the new substance.
// (Returning): The newly created and modified object is automatically returned as the result of the entire expression.


//new creates empty object [object]<->{prototype}(basic)...> creat onthe top of basic using this 
console.log("---");
console.log("Action 1: The Traditional Assembly Line");
function Engineer(name) {
  console.log("Step 3: Engineer is assembling the new object...");
  this.name = name;
  this.specialty = "Mechanical";
}

//constructor function
//[function|{code}]
// [Engineer] ──> [Function] | { name:'Engineer', length:1, code: {...} }


// adding new method to [.prototype]
Engineer.prototype.build = function () {
  return ` ${this.name} is building a machine.`;
};
//[Engineer Function] { prototype: → } ──points_to──> [Engineer.prototype Object] { constructor: → }


// Karma: The 'new' operator initiates the Four-Fold Path.
// Step 1: An empty object `{}` is created.
// Step 2: Its prototype is linked to `Engineer.prototype`.
// Step 3: The `Engineer` function is run on it.
// Step 4: The final object is assigned to the `[chiefEngineer]` .
const chiefEngineer = new Engineer('Amruth S K');
//// chiefEngineer <-> [.prototype] instance 
//[New Empty Object] { __proto__: → } ──links_to──> [Engineer.prototype Object]
console.log("Final Product:", chiefEngineer);
console.log("Inherited Skill:", chiefEngineer.build());
console.log("---");


// The chiefEngineer instance 
// |
// successfully created and imbued with both unique and inherited qualities



// instance's - uinque behaviours & methods[[Prototype]] <----(kw-"new")-----> inherited behaviours & methods constructor's .prototype 

console.log("Action 2: Verifying the Blueprint Link");
const instanceBlueprint = Object.getPrototypeOf(chiefEngineer);
console.log(
  "instance prototype  blueprint?",
  instanceBlueprint 
);
console.log("---");console.log(
  "Engineer function master blueprint?",
   Engineer.prototype
);
console.log("---");

console.log(
  "Is the instance prototype the same as the master blueprint?",
  instanceBlueprint === Engineer.prototype
);
console.log("---");

//instanceBlueprint === Engineer.prototype(constructor) same 

//E (The Modern Abstraction): The class keyword is a modern, cleaner syntax for defining a Constructor Function
//  and its associated blueprint (.prototype). 
console.log("Action 3: The Modern Digital Factory");

//class - define constructor function and its prototype at once
class Strategist {
  constructor(name) {
    //F (The Heart of the Class): Inside a class definition, the constructor method is the specific function that is executed during step 3 of the new

    this.name = name;
    this.domain = "Military";
  }
  planCampaign() {
    return `${this.name} is planning a campaign.`;
  }
}

//  fieldMarshal instance's [[Prototype]] <----(kw-"new")-----> Strategist constructor's .prototype 

const fieldMarshal = new Strategist("Doval");
console.log("Final Product:", fieldMarshal);
console.log("Inherited Skill:", fieldMarshal.planCampaign());

const marshalBlueprint = Object.getPrototypeOf(fieldMarshal);
console.log(
  "Is the link still forged correctly?",
  marshalBlueprint === Strategist.prototype
);
console.log("---");


//The class syntax 
//|
//( using new with a class produces an instance with the identical prototype link structure as using new with a function)
//|
//[is an abstraction over the traditional constructor function pattern

// G (The  Verification): The instanceof operator is a () that verifies the result of creation. 
// It checks if an object's prototype chain contains the .prototype property of a given Constructor Function.

console.log("Action 4: The Field Inspector");
console.log("Is chiefEngineer an Engineer?", chiefEngineer instanceof Engineer);
console.log(
  "Is fieldMarshal a Strategist?",
  fieldMarshal instanceof Strategist
);
console.log(
  "Is chiefEngineer a Strategist?",
  chiefEngineer instanceof Strategist
);

//The (instanceof )operator
//|
//(check object's prototype chain contains the constructor's prototype)
//|
//can accurately trace an object's creation back to its blueprint 



// [soldier Object]-------->[commander Object]-------->  [Object.prototype]---> null

//[soldier instance -{properties and methods}] --[[Prototype]]--> [commander constructor function-{properties and methods}] --[[Prototype]]--> [Object.prototype] --[[Prototype]]--> null



// [New Empty Object] { __proto__: → } ──links_to──> [Engineer.prototype Object]


//Two Foundational Substances (Before new)
// constructor function - []

// [Engineer Function]────>{ name: "Engineer", length: 1, prototype: → }

// Prototype Object - []

// [Engineer.prototype Object]────>{ constructor: → }


// [Engineer Function] <---{.constructor}--- [Engineer.prototype Object]
//         |
//         '--->{.prototype}--->'



// new 
//const chiefEngineer = new Engineer('ASK');

//[new chiefEngineer Instance]──internal[[Prototype]]_link_is_forged_to──>[Engineer.prototype Object]

//after new
// Correct Prototype Chain for a single instance
//[chiefEngineer Instance] --[[Prototype]]--> [Engineer.prototype Object] --[[Prototype]]--> [Object.prototype] --[[Prototype]]--> null



//[soldier_instance] --[[Prototype]]--> [Soldier.prototype] --[[Prototype]]--> [Commander.prototype] --[[Prototype]]--> [Object.prototype] --> null

//[Specific Instance] ---> [Specific.prototype] ---> [Object.prototype] ---> null






