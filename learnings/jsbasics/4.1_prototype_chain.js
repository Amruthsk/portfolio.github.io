//  A (The Fundamental Link): Every JavaScript object has a private, internal property, often denoted as [[Prototype]], which is a link (a reference) to another object or to null.
//  G (Direct Creation): The Object.create() method allows for the direct creation of a new object with its [[Prototype]] explicitly set to another object provided as its argument.
 //An object can be directly created with its [[Prototype]] linked to another existing object.
const commander = {
  
  standardProcedure: function() {
    console.log("Commander says: Execute standard procedure!");
  }
};
//[commander]-{standardProcedure}

//(Object.create)
//|
//[soldier]<->[commander]
const soldier = Object.create(commander);
//

console.log(" Action 1: Verifying the link...");
//[soldier]- P
//|
//(Object.getPrototypeOf(soldier)) === commander
//|
//soldier's  [[Prototype]] <-link points directly to -> [commander] object

const isCommanderThePrototype = Object.getPrototypeOf(soldier) === commander;
console.log(`Is the soldier's prototype the commander? ${isCommanderThePrototype}`);

//true -  [soldier] ---[[Prototype]]---> [commander]

//  B (The Chain of Inheritance): When trying to access a property on an object, the JavaScript engine first checks the object itself. If the property is not found, the engine follows the [[Prototype]] link to the next object and searches there. This process continues up the chain until the property is found or the chain ends.

 //When a property is accessed on an object, if it's not found, the engine will look for it on its prototype.

console.log("\n Action 2: Observing the chain in action...");

//[soldier]-{standardProcedure}

const soldierHasOwnProcedure = soldier.hasOwnProperty("standardProcedure");

// abscence of standardProcedure in soldier
console.log(
  `Does soldier have its own 'standardProcedure'? ${soldierHasOwnProcedure}`
);

soldier.standardProcedure();
// soldier.standardProcedure();
// |
// [commander]-{standardProcedure}
// |
// acces

// [soldier] can access standardProcedure() in the [commander];


console.log("-------------------------------")
//  D (Reading vs. Writing): The prototype chain is used for reading properties (retrieval).
//  When writing or setting a property on an object, the new property is always added directly to that object itself, not to its prototype. This is called "shadowing."
console.log("\ Action 3: Shadowing the prototype...");

//(assignment) -{standardProcedure} to [soldier]
soldier.standardProcedure = function () {
  console.log("Soldier says: My way is better!");
};

console.log(
  `NOW, does soldier have its own 'standardProcedure'? ${soldier.hasOwnProperty(
    "standardProcedure"
  )}`
);

soldier.standardProcedure();


//  C (The End of the Line): The prototype chain terminates when a [[Prototype]] link points to null. Object.prototype is the base object at the top of almost every chain, and its [[Prototype]] is null.

console.log("------------------------")
const commanderPrototype = Object.getPrototypeOf(commander);
const endOfTheLine = Object.getPrototypeOf(commanderPrototype);

console.log(
  `Is the commander's prototype Object.prototype? ${
    commanderPrototype === Object.prototype
  }`
);
console.log(`What is the prototype of Object.prototype? ${endOfTheLine}`);

//  E (Accessing the Prototype): The standard, modern way to access an object's prototype ([[Prototype]]) is by using the Object.getPrototypeOf() method.
//  F (Constructor's Role): Functions have a special property called prototype. When a function is used as a constructor (with the new keyword), the object it creates will have its [[Prototype]] linked to the constructor function's prototype object.

//[solider]-{properties and methods}<-> [[Prototype]] --------> commanders's -{properties and methods}<->[[prototype]] --->[Object.prototype--{properties and methods}]---> null

// [soldier Object]-------->[commander Object]-------->  [Object.prototype]---> null

//[soldier -{properties and methods}] --[[Prototype]]--> [commander -{properties and methods}] --[[Prototype]]--> [Object.prototype] --[[Prototype]]--> null