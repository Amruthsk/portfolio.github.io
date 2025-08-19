//A (The Primitives Defined): JavaScript has seven fundamental, "primitive" data types, which are not objects and have no methods:
//  string, number, boolean, null, undefined, symbol, and bigint

// / B (Immutability): A primitive value is immutable

// / C [String]: The string type represents textual data. It is a {sequence of characters}
let artistMotto = "Ars longa, vita brevis";
console.log(typeof artistMotto);
//[artistMotto]----(typeof)------>{string}
artistMotto[0] = "a"; 
//mutation
console.log(artistMotto);//immutable

//non mutation
artistMotto = artistMotto.toUpperCase();
console.log(artistMotto);
console.log("-----------");
//artistMotto string ----(the direct modification attempt artistMotto = "a" resulted in no perceivable change)---->is immutable

// D [Number & BigInt]: The number type represents numeric data,  {integers} and {floating-point} . 
// The bigint type represents integers of arbitrary precision, exceeding the safe limits of number.


// E [boolean]: {true} {false}

// F [Undefined]: {absence of a defined quality}-not yet prepared - nothing assigned
let unpreparedArea;
//[unpreparedArea]----(nothing assigned)-{Undefined}
let intentionalBlank = null;
// /[intentionalBlank]---{null}

//G [Null]: {null}- explicitly assigned- intentionally blank


console.log(
  "Unprepared Area:",
  unpreparedArea,
  "| Type:",
  typeof unpreparedArea
);
console.log(
  "Intentional Blank:",
  intentionalBlank,
  "| Type:",
  typeof intentionalBlank
);

console.log("-----------");
// null, undefined -----2 distinict  absence
//H [symbol]: {unique,imutable}
const stamp1 = Symbol("artist-signature");
const stamp2 = Symbol("artist-signature");

let areStampsIdentical = stamp1 === stamp2;
console.log("Are the two signature stamps identical?", areStampsIdentical);
console.log("Type of stamp:", typeof stamp1);


//I pereception of {values} - (typeof)


// A (The Primal Substance): The Object is the fundamental composite []in JavaScript. 
// It is a mutable collection of key-value pairs (properties)


// B ({Reference}): Unlike primitives,  ({value}) of a variable holding an object is not the object itself, 
// but a reference (an address) to its location in memory.

// C (Reference Assignment): Assigning one object variable to another (let b = a) does not create a copy of the object. 
// It copies the reference. Both variables now point to the exact same underlying []


// D (Mutability via Reference): Any modification made to the object through one variable (reference)
//  will be perceivable through any other variable holding a reference to that same object.


console.log("-----------");
let partA_ticket = { serialNo: "XJ-77", material: "Steel" };

// [partA_ticket] hold  reference to new object
// { serialNo, material };

let partB_ticket = partA_ticket;

//partB_ticket = partA_ticket <-> { serialNo: "XJ-77", material: "Steel" };
// reference same object nonew copy


console.log("Initial state of Part A:", partA_ticket);
console.log("Initial state of Part B:", partB_ticket);

//(mutation)
partB_ticket.material = "Titanium";
console.log("--- Material Changed via Part B Ticket ---");
console.log("Final state of Part A:", partA_ticket);
//partA_ticket  ---------(change in b caused [] to change{} observed by a-)--------------points to a mutable substance shared with partB_ticket 

console.log("--------------")
// E (The [Array] Specialization): An [Array] is a specialized Object - {indices, length}
//  whose keys are automatically managed as non-negative integers ({indices}) and which has a special {length} property.
const toolRack = ["Hammer", "Wrench", "Screwdriver"];
console.log("Typeof toolRack:", typeof toolRack);
toolRack.workshopSection = "Section B";//array object so adding property
console.log("Tool rack contents:", toolRack);
console.log("Its location property:", toolRack.workshopSection);
console.log("-----------------")

// array ---(accept key value pair)--object

// F (The [Function] Specialization): A [Function] is a specialized, callable Object - {properties, soi}
//  It contains code that can be executed. Because it is an object, 
// it can also have properties attached to it.

//Function is a callable Object with a Prototype
const cncMachine = function () {
  console.log("Executing milling program...");
};
cncMachine.lastMaintenanceDate = "2025-08-19";//adding property

console.log("--- Calling the Machine ---");
cncMachine();
console.log("-------------------------");
console.log("Machine Maintenance Date:", cncMachine.lastMaintenanceDate);
//[object]<->[prototype{properties & methods}]
//[function]-{direct property - lastMaintenanceDate, executable code }<->[prototype ]<->[Function.prototype{inherited mehtod - toString()}]
console.log("Machine's Blueprint as text:", cncMachine.toString());

// function ---()----> dual nature: callable & property container
//cncMachine is an object.-ncMachine inherits .toString() from Function.prototype.

//The cncMachine Function → [is a dual-nature []: both callable[direct] and a property container [inherited]]  

// g [object]-[prototype{properties & methods}]

// h (typeof) ---percieve primitives distinctively  &  objects - generic- object
// (instanceof) --- percieve specific object


//I {pending, fulfilled, or rejected}.