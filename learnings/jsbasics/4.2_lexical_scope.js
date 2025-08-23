//  A (The Container of Execution): 
// All JavaScript code is executed within an Execution Context.
//  There is always one, and only one, active Execution Context at any given moment.

//  B (The Two Realms): 
// There are two primary types of Execution Context: the Global Execution Context (created once when the script starts) and 
// Function Execution Contexts (created each time a function is invoked).

//  C (The Substance of Scope):
//  Every Execution Context has a component called a Lexical Environment. 
// This is the actual data structure—the "substance"—that holds the variables and functions defined within that scope.

// A Global Context exists, and a new Function Context is created when a function is invoked, each with its own Lexical Environment."


//Scope: [ ... a boundary defining visibility ... ] determines the accessibility of variables.

//The rule is simple: a function's scope is determined by where it was written (lexically placed) in the code, not where it is called.
//Lexical Scope: [ OuterScope [ InnerScope ] ] - This relationship is permanent.

//Lexical Environment: { local variables } ----(one way)---> [ Parent Lexical Environment ]
//Every time a function is called, a new Lexical Environment is created to enforce the rules for that call. 
// It has two components: its local memory and a reference to its parent.


//Closure: [ Function ] ---remembers---> { its birth environment's variables }
//he function maintains its link to its parent's environment, forming a "backpack" of variables that it carries with it, no matter where it goes.




let baseCampResource = "Global Intel"; 
//[baseCampResource] -{Global Intel} - Global EC.

function missionAlpha() {
  let missionAlphaResource = "Alpha Team's Maps"; //[missionAlphaResource] new Lexical Environment of missionAlpha's Function Execution Context
  console.log(`Accessing from inside Mission Alpha: ${baseCampResource}`);
  console.log(`Accessing from inside Mission Alpha: ${missionAlphaResource}`);
}

//[missionAlpha] - Global EC.

missionAlpha();
//invoke function - js engine
// 1. Create a new Function Execution Context for 'missionAlpha'.
// 2. Push it onto the Call Stack.
// 3. Create its Lexical Environment.



try {
  console.log(missionAlphaResource);//accessing function EC
} catch (error) {
  
  console.log(
    "--- Mission Alpha's resources are not accessible from Base Camp. ---"
  );
   console.log(error.message); // Uncomment to see the specific error
}




//  D (The Chain of Command):
//  A Lexical Environment consists of two parts:
//  the local memory for its own variables, and a
//  reference to its outer Lexical Environment. 
// This chain of references is the scope chain.

//  E (The Stack of Contexts): 
// The JavaScript engine uses a Call Stack (a "LIFO" - Last-In, First-Out structure) to manage Execution Contexts.
//  When a function is called, its new Execution Context is pushed onto the top of the stack, becoming the active context.


//  F (The Return to Order): 
// When a function completes (returns), its Execution Context is popped off the Call Stack, and control returns to the context below it.
console.log("----------------------------")
function specialOps() {
  console.log("--- Entering Special Ops Command Tent. ---");
  console.log("Perceiving the current stack of mission orders:");
  console.trace();
  console.log("--- Exiting Special Ops Command Tent. ---");
}
//[specialOps]

function forwardBase() {
  console.log("--- Entering Forward Base Command Tent. ---");
  specialOps();
  console.log("--- Returning to Forward Base Command Tent. ---");
}
//[forwardBase]

console.log("--- Starting in Global Base Camp. ---");
forwardBase();
console.log("--- Mission complete. Back in Global Base Camp. ---");



//The Execution Contexts 
//|
//( console.trace perception showed specialOps on top, followed by forwardBase, followed by the global anonymous function, perfectly matching a Last-In, First-Out sequence)
//|
//were managed on a stack

// A Note: The Prototypal Chain is a separate but related concept.
//  While the Lexical Environment defines how the engine finds a variable (e.g., myVar), 
//  the Prototypal Chain defines how the engine finds a property on an object (e.g., the .map method on an array instance). 
// One is a chain of scopes, the other is a chain of objects. Understanding both is key to mastery.


//Scope & Closures 

//  A (The Fundamental Bond): A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment).

//  B (Birthright, Not Call-Site): A function's scope is determined by where it is defined in the source code (lexical scoping), not where it is executed.
//"A function's scope is determined by where it is defined, not where it is executed."
console.log("---------------------------------------");

let environment = "Desert";
//[environment]-{Desert} - GEC

//[createOperative] - GEC
function createOperative() {
  let environment = "Jungle"; //[environment] - FEC
  // [operative] <-> [environment](closure)
  const operative = function () {
    console.log(`Executing mission in: ${environment}`);
  };
  return operative;
}
const myOperative = createOperative();
// [myOperative]-  created by calling the factory


//()
myOperative();


//[myOperative function]
//|
//(despite being called in the "Desert" global scope, it printed "Jungle")
//|
//remembers its "Jungle" birthplace

//  C (The Living Backpack):
//  A closure gives you access to an outer function's scope from an inner function, even after the outer function has finished executing.


console.log("----------------------------------")

//[createMission]-()
function createMission(target) {
  let missionTarget = target;
  console.log(
    `--- Briefing complete for target: ${missionTarget}. Room is being dismantled. ---`
  );

  //function with closure

  const reportTarget = function () {
    // This function will access 'missionTarget' long after 'createMission' is gone.
    console.log(`Operative reporting: The target is still ${missionTarget}.`);
  };
  return reportTarget;
}

const operativeAlpha = createMission("Project X");

operativeAlpha();


//  D (Persistence of State): The variables in the closed-over scope are not copies; they are the original variables. 
// If the inner function modifies them, the change is persistent across subsequent calls to that inner function.
console.log("---------------------------------------")

function createIntelCourier() {
  let secureFlashes = 3;
  return function () {
    if (secureFlashes > 0) {
      secureFlashes--; // The original variable is being changed.
      console.log(`Secure flash used. ${secureFlashes} remaining.`);
    } else {
      console.log("Mission failed. No secure flashes left.");
    }
  };
}
const courier = createIntelCourier();

courier();
courier();
courier();


courier();// state exhausted

//  E (Factory Pattern): Closures are commonly used to create "factories"—functions that generate other functions, each with its own private, persistent state.


// Global Scope
let globalVar = "Sun";

function outer() {
  // Outer Scope
  let outerVar = "Earth";

  function inner() {
    // Inner Scope
    let innerVar = "Moon";
    console.log(globalVar, outerVar, innerVar); // Accesses all three
  }

  return inner;
}

const myInnerFunc = outer(); // outer() executes and is gone
myInnerFunc(); // "Sun Earth Moon"