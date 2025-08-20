//function - [SOP] & (action)
// Primarily, (function). A function's very purpose is to be invoked to perform a task.
//  It is a named, reusable sequence of actions.



// However, in JavaScript, a [function] .
//  It is a special type of [object], 
// a "first-class citizen." This means it can be stored in variables, passed to other functions, and have properties attached to it, just like any other object.

//  A (The Dual Nature): 
// [Functions] in JavaScript are a special type of object 
//  that possess the unique quality of being callable, allowing them to (execute) a block of code 
//"Functions are [objects]  that can be (executed) 

function drillHole() {
  console.log("Drilling action initiated.");
}
//[drillHole] -{(callable)}
//(console.log) defined within

//[drillHole] -{sopNumber}
drillHole.sopNumber = "SOP-101";
console.log("--- Perception Action 1 ---");
console.log("Type of our SOP:", typeof drillHole);
console.log("Type of our SOP:", drillHole instanceof Object);
console.log("SOP Number attached to function:", drillHole.sopNumber);
drillHole();
// [The `drillHole` variable ]
// |
// (type: function, object,hold sop StylePropertyMap,executable)
// |
// [is both a callable (action) and an [object] that can hold properties]




//  B (Definition vs. Invocation):
//  Defining a function creates the [function] object and determines its behavior.
//  Invoking a function (using the () operator) (executes) the code within its body.


//  C (Parameters & Arguments): 
// Parameters  are the named variables listed in a [function's definition] that act as placeholders. 
// Arguments are the actual {values} passed to the function when it is (invoked).

//  D (The Return Value):
//  A function can output a {value} using the return statement. 
// If a function does not have a return statement, its invocation resolves to the value {undefined}, which is an (absence) of a defined return value.

//Invoking `()` with arguments executes the function, which can return a value or `undefined`.

function assemblePart(partA, partB) {
  return `Assembled ${partA} and ${partB}.`;
}
//[assemblePart]
//parameter - partA,partB
//return

function cleanStation() {
  
  let message = "Station cleaned.";
}
// no return statement when called undefined

console.log("\n--- Perception Action 2 ---");
//invocation with argument
const finishedProduct = assemblePart("bolt", "nut");
const cleanupResult = cleanStation();

console.log("Result of assembly:", finishedProduct);
console.log("Result of cleaning:", cleanupResult);

// A function invocation
// |
// produces a defined output or undefined



//  E (Scope Encapsulation): 
// A function creates a new scope. 
// Variables declared inside a function are generally not accessible from outside the function, 
// encapsulating logic and preventing name collisions.


//  F (The Method Relationship ):<-> attached to object
//  A method is a function that has an inseparable relationship <->  with an [object], being stored as one of its properties.


//  G (The this Context):
//  When a function is called as a method of an object, its "this" keyword is bound to the [object] the method is called on, 
// allowing the function to operate on that object's data.(parent data accessible)

//"A method is a function on an object that operates on this object's data, using its own internal scope

const cncMachine = {
  // [cncMachine]
  // {model}
  model: "Haas VF-2",
  // (Method): A function to report status.
  reportStatus: function () {
    // Scope: '[statusMessage]' exists only inside this function.
    const statusMessage = "Status for model:";
    // 'this' refers to the object the method was called on: 'cncMachine'.
    console.log(statusMessage, this.model); //cncMachine.model
  },
};

console.log("\n--- Perception Action 3 ---");

cncMachine.reportStatus();

// Attempting to violate scope
try {
  console.log(statusMessage); // exists only inside this function
} catch (error) {
  console.log(
    "Proved Scope: Cannot access 'statusMessage' from outside. It caused an error."
  );
}


//The (reportStatus) method
// |
// can access its parent object's data via this while protecting its internal variables


//  H (Inherited (function) via [[Prototype]]): 
// An [object] can invoke methods that are not directly defined on it. 
// It does this by looking up its prototype chain—an inseparable link <-> to an ancestral object—and finding the method there.
//An object can use methods from its prototype
const partBins = ["screws", "nuts", "bolts"];
//[partBins]
console.log("\n--- Perception Action 4 ---");
console.log(
  "Does the object itself have '.join'?",
  partBins.hasOwnProperty("join")
);//false

console.log(
  "Does the Array prototype have '.join'?",
  Array.prototype.hasOwnProperty("join")
);//true

console.log("Result of inherited Karma:", partBins.join(", "));


// [partBins]
// |
// (perceive the (method) exists on its [[prototype]], from which it is inherited)
// |
// successfully execute the .join() (method)



//*[function] = Function Expressions & Arrow Functions & Closure

//Function Expressions & Arrow Functions  -> []
//closure <->

// Function Expressions
//  A (Expression as Value): 
//  A (function expression )  where the function keyword is used in an expression,
//   producing a [function] object as a value that can be assigned to a variable.

//  B (Hoisting ):
//   Unlike function declarations, function expressions are not hoisted.
//   Their(absence) at the top of the scope means they cannot be called before they are defined.
//  Function declarations are hoisted and available everywhere, while function expressions are not and cause an error if called before definition
console.log("--------------------------")
console.log("---  Action 5 ---");
// calling function declaration before definition

console.log("Standing Order is:", standingOrder()); 

//[standingOrder] -{hoisted}

function standingOrder() {//function declaration
  return "Ready and available at mission start.";
}


//calling function expression before definition
try {
  missionDirective();
} catch (error) {
  // We expect an error, which is our proof.
  console.log("Mission Directive Error:", error.message);
}

// variable [missionDirective]-{not hoisted} (=) assigns function expression

const missionDirective = function () {//function expression
  console.log("This directive was not received yet.");
};



//  C (Anonymity): 
//  Function expressions can be anonymous (omitting the name), making them lightweight tools for creating functions that don't need to be globally identified.



// Arrow Functions
//  D (Concise Syntax): 
//  Arrow functions (=>) provide a more compact syntax for writing function expressions.


//  E (Lexical this): 
//  An arrow function does not have its own this context.
//   Instead, the value of this is lexically bound, meaning it inherits this from the surrounding code where the arrow function was defined, not where it is called. 
//   This is its most critical property.

//   Arrow functions inherit `this` from their defining scope, unlike regular functions which have their own `this`.
console.log("\n---  Action 6 ---");
const fieldCommander = {
  //{ The commander's name}
  name: "Sun",
  //  (Method): A method to issue orders after a delay.
  issueDelayedOrders: function() {
    console.log(`Commander ${this.name} is issuing orders.`);

    setTimeout(function() {
        console.log("Regular function's 'this.name':", this ? this.name : "Lost Contact (this is not the commander)");
    }, 100);

    setTimeout(() => {
        console.log("Specialist's (arrow) 'this.name':", this.name);
    }, 200);
  }
};

  
fieldCommander.issueDelayedOrders();

// /The this keyword 
//|
//(the regular function loses the context of fieldCommander, while the arrow function lexically inherits this and correctly accesses .name)
//|
//has a different binding depending on the function type

//  F (No Arguments Object): 
//  Arrow functions do not have their own arguments object, 
//  a feature present in regular functions that provides an array-like list of arguments.



// Closures
//  G (The Core Relationship ): 
//  A closure is the inseparable combination of a function <-> the lexical environment (the scope) within which that function was declared.

//  H (Memory): A closure gives a function access to all the variables from its enclosing scope, even after the outer function has finished executing and its scope has been destroyed. 
//  The inner function "remembers" its birth environment.

//  I (State Encapsulation): This "memory" allows closures to be used to create private variables and stateful functions, as the remembered variables are shielded from outside access.console.log("\n--- Perception Action 3 ---");

console.log("\n---  Action 7 ---");

// The outer function: The Mission Briefing
function createOperative(operativeName) {
  // This is the "secret code" in the sealed pouch.
  const secretCode = Math.floor(Math.random() * 1000);
  console.log(
    `Briefing for ${operativeName} is complete. Secure room is now being vacated.`
  );
  return function executeMission() {
    console.log(
      `Operative ${operativeName} is executing the mission with secret code: ${secretCode}`
    );
  };
}
const operativeAlpha = createOperative("Alpha");
operativeAlpha();

//The operativeAlpha function
//|
//(even though its parent function createOperative has already finished executing, we can perceive it successfully logs the code, proving the existence of a closure that provides a persistent memory of the lexical scope )
//|
//can access the secretCode variable



// //( Immediately Invoked Function Expression (IIFE) )
// () creating a [function]  (Substance) using a function expression.
// () immediately (invoking) that [function] 

//  A (The Syntactic Structure): 
// An IIFE is a function expression that is wrapped in the Grouping Operator () to ensure it is parsed as an expression, followed immediately by a second pair of parentheses () which invokes the function.


//  B (The Primary Purpose - Scope Encapsulation): 
// The defining purpose of an IIFE is to create a new, temporary scope that is discarded after execution.

//  C (Prevention of Global Pollution): 
// Variables declared inside an IIFE (especially with var) are confined to its private scope and do not leak into or modify variables in the surrounding (often global) scope.
//Variables declared with var in simple blocks can leak into and pollute the surrounding scope
console.log("---  Action 8: The Problem ---");

var missionStatus = "Pending";
var i = 0;
//[missionStatus] -{Pending} global scope
//[i]-{0} global scope

if (true) {
  var missionStatus = "Compromised";//reassignment
  var i = 100; // Overwriting the global 'i'
}

console.log("Global mission status after block:", missionStatus);
console.log("Global 'i' after block:", i);


//The [missionStatus] variable
//|
//had its global value overwritten by a block-internal declaration
console.log("\n--- Perception Action 2: The IIFE Solution ---");

var config = "Global Config";
(function() {//function expression is defined and immediately invoked
  var config = "Local IIFE Config";  // [config] - private
  console.log("Inside IIFE:", config);
})(); // The final () is the "EXECUTE" command.

console.log("Outside IIFE:", config);
//The global `config` variable -> remained completely unaffected by the code inside the IIFE


//An IIFE creates a private scope, preventing var from polluting the global scope."

//  D (Initialization with Privacy): 
// An IIFE can return a value. This allows it to be used to perform complex initialization logic in a private environment and assign only the final result to a variable.

//  E (The Historical Context - The "Why"):
//  Before ES2015 introduced block-scoping with let and const, the IIFE was the primary and most common pattern used by developers to achieve data privacy and prevent the global scope pollution caused by var.


const missionResult = (function () {
  const rawIntel = "SECRET_CODE_ALPHA";//private- secret tools
  const decryptionKey = "XYZ";
  let processedData = `Decrypted(${rawIntel})_with_(${decryptionKey})`;

  // Only the final result leaves the room.
  return processedData;
})();
console.log("Dossier received by General:", missionResult);

try {
  console.log(rawIntel); // Attempting to access the secret tools.
} catch (error) {
  console.log(
    "Proof of Privacy: Cannot access 'rawIntel'. It was destroyed with the secure room."
  );
}