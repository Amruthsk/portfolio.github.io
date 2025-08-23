//Category 1: Assignment Operator (=)
//[ ]={} set gives {}
//p = v1 -> v2
let infantryDivision = 5000;
//[infantryDivision]-{5000}
let tankBattalion = 250;
//[tankBattalion]-{250}



//Category 2: Arithmetic Operator (+, -, *, /, %)
// { } (+, -, *, /, %) { } -> new { } direct order
// coercion
// {string} + { } -> string concatenation

let totalForce = infantryDivision + tankBattalion;
// {infantryDivision } + {tankBattalion }
//[totalForce] - {5250}
console.log("Initial Total Force:", totalForce);

let forceLabel = "Total Force: ";
let fullReport = forceLabel + totalForce; //+ string concatenation

console.log(fullReport);// output string
console.log("what is the type of fullreport? ",typeof(fullReport));
console.log("---------------")
//Category 3: Comparison Operator (>, <, ==, ===)
// // { } (>, <, ==, ===) { } ->  { True/ False } respond yes or no

// { } (=== Strict Equality operator) { } ->  { True/ False }
// { } (== Loose Equality operator) { } ->  { True/ False }performs Type Coercion before comparing the Guṇa. It attempts to make the types of the two Dravya the same before checking their value.

let requiredTroops = 5250;
let requiredTroopsManifest = "5250";

let isStrictlyReady = totalForce === requiredTroops;
console.log("Strict comparison (number vs number):", isStrictlyReady);
//=== types are same (number) -> true 


let isStrictlyReadyByManifest = totalForce === requiredTroopsManifest;
console.log("Strict comparison (number vs string):", isStrictlyReadyByManifest);

// ===types are different (string vs number) -> false 

let isLooselyReadyByManifest = totalForce == requiredTroopsManifest;
console.log("Loose comparison (number vs string):", isLooselyReadyByManifest);
// ==types are different (string vs number) coercion) will occur, turning "5250" into 5250 before comparing-> true 
console.log("-----------");


//Category 4: Logical Operator (&&, ||, !)
// {True/ False } (&&, ||, !) {True/ False }--->{True/ False } go/no go

let hasSufficientAmmo = true;
let hasAirSupport = false;
let canLaunchAttack = hasSufficientAmmo && hasAirSupport;
console.log("Attack Go/No-Go:", canLaunchAttack);




//// {non boolean } (&&, ||, !) {non boolean }
//(Short-Circuiting): The Logical AND (&&) and Logical OR (||) operators exhibit "short-circuiting." 
// && will not evaluate its right side if its left side is false. 
console.log("\n--- Testing Short-Circuit ---");
let missionStatus = "Pending";
// This (function) that has a side-effect (it logs to the console).
function checkLogistics() {
  console.log("LOGISTICS CHECKED (This should NOT appear)");
  missionStatus = "Ready";
  return true;
}
let finalGo = hasAirSupport && checkLogistics();
console.log("Final Attack Go/No-Go:", finalGo);//false 
console.log("Mission Status:", missionStatus);// not evaluate right side
//checkLogistics() ---------(shortcircuiting after evaluating the first false )-> was not executed 


// || will not evaluate its right side if its left side is true.


console.log("------------------")
// Operator Precedence {(Operator)}
//  A (The Law of Order): Operator precedence determines the sequential order
//  in which different operators are evaluated in a single expression.
const result_precedence = 10 + 5 * 2;
console.log("Perceiving Precedence (10 + 5 * 2):", result_precedence);

//  B (The Hierarchy of Power): Operators with a higher precedence value are executed before operators with a lower precedence value.
const result_grouping = (10 + 5) * 2;
console.log("Perceiving Grouping ((10 + 5) * 2):", result_grouping);

//  C (A Concrete Example): The Multiplication operator (*, precedence 13) has a higher precedence than the Addition operator (+, precedence 12).

//  D (The Supreme Authority): The Grouping operator (( ), precedence 19) possesses the highest precedence and can force any enclosed expression to be evaluated first, overriding all other precedence rules.

//  E (The Rule for Equals): When operators share the same precedence level (e.g., * and /), their associativity (left-to-right or right-to-left) determines the evaluation order.


// Type Coercion (The Implicit )
//  F (The Act of Transmutation): Type coercion is the automatic, implicit conversion of a value from one data type into another by the JavaScript engine.

//  G (The + Operator's Special Mission): If either operand of the addition operator (+) is a string, the other operand will be coerced into a string, and the action becomes string concatenation.
const result_string_coercion = "Asset Code: " + 5;
console.log(
  "Perceiving String Coercion ('Asset Code: ' + 5):",
  result_string_coercion
);
//  H (The Mathematician's Rule): Most other mathematical operators (-, *, /, %) will attempt to coerce any non-number operand into a number before performing the calculation.
const result_math_coercion = "10" * 2;
console.log("Perceiving Math Coercion ('10' * 2):", result_math_coercion);

//  I (The "Loose" Interrogation): The abstract equality operator (==) will perform type coercion if the two operands are of different types before comparing them for equality.
const result_loose_equality = 10 == "10";
console.log("Perceiving Loose Equality (10 == '10'):", result_loose_equality);
//  J (The "Strict" Interrogation): The strict equality operator (===) will not perform type coercion. If the types are different, it immediately concludes they are not equal.
const result_strict_equality = 10 === "10";
console.log(
  "Perceiving Strict Equality (10 === '10'):",
  result_strict_equality
);


//  A (The Core Dichotomy - Value vs. Reference):
// Primitive Dravya (number, string, boolean) are "pass-by-value." {value} is stored directly.  - single paper sketch
// Object Dravya (object, array, function) are "pass-by-reference." The [] itself holds a reference (a pointer) to a location in memory where its collection of {value} is stored.- portfolio-{shelf7}+ sticky note


console.log("-----------------")
//  B (Assignment operator =): 
// When applied to primitives, the = operator copies the {value} into a new, [independent] . - 2 independent copies /sketches-  any change will not affect other - copying value
let originalSketch = "cat";
let copiedSketch = originalSketch;
//[originalSketch] - {cat}
//[copiedSketch] -{cat} independent 
copiedSketch = "cat with a hat";
//[copiedSketch] -{cat with a hat} independent 
console.log("--- Assignment operation ---");
console.log("Original Sketch:", originalSketch); // Unchanged
console.log("Copied Sketch:", copiedSketch);

// When applied to objects, the = operator copies the reference, creating a second pointer to the exact same underlying object in memory-sticky note instruction {shelf 7} given to other (instruction to see porfolio) - any change reflected - copying the reference
let originalPortfolio = { name: "Landscapes", drawings: 5 };
//[originalPortfolio]-{reference to an object in memory}
//= copies the reference not the object
let copiedPortfolioRef = originalPortfolio;
//both [ ] - points to reference not the object in memory
copiedPortfolioRef.drawings = 6;// add a drawing
console.log("Original Portfolio:", originalPortfolio); // It has changed!
console.log("Copied Reference:  ", copiedPortfolioRef);
console.log("\n");

//  C (Arithmetic operator +, -): 
// These operators are designed to work directly on the {value} of primitives.
//  When applied to objects, they do not perform arithmetic on the object itself but instead trigger a hidden, implicit  (coercion), attempting to convert the object to a primitive (usually a string or number) via its .toString() or .valueOf() methods before proceeding.

console.log("--- Comparison operation ---");
//  D (Comparison operator ===):
// When applied to primitives, the === operator compares the actual {values}. 
console.log("'cat' === 'cat':", "cat" === "cat"); //true
// When applied to objects, it compares the references (the pointers). Two objects are only strictly equal if they are the exact same instance in memory.- same location-same shelf7
let portfolioA = { content: "sketch" };
let portfolioB = { content: "sketch" };
console.log(
  "portfolioA === portfolioB (identical content):",
  portfolioA === portfolioB
); // same {} but different reference different memory address- false

let portfolioC = { content: "sketch" };
let portfolioCRef = portfolioC;
console.log(
  "portfolioC === portfolioCRef (same reference):",
  portfolioC === portfolioCRef
);//true same address
console.log("\n");

//  E (Logical operator & {Truthiness} ): 
console.log("--- Logical operation (Truthiness) ---");
// All Object , regardless of content (including {} and [] - falsy), possess the inherent {value} of being "truthy" in logical operations.
//  Primitives, however, have specific "falsy" value (false, 0, "", null, undefined, NaN).

if (0 && true) {
  console.log("This will not run.");
} else {
  console.log("0 is falsy.");
}

const result = {} && "The object was truthy";
console.log("Empty object truthiness result:", result);


/Category 1: Assignment Operator (=)
//[ ]={} set gives {}
//p = v1 -> v2
//[] ←(=)← {}

//[infantryDivision]-{5000}
//Category 2: Arithmetic Operator (+, -, *, /, %)
// { } (+, -, *, /, %) { } -> new { } direct order
// coercion
// {string} + { } -> string concatenation



//Category 3: Comparison Operator (>, <, ==, ===)
// // { } (>, <, ==, ===) { } ->  { True/ False } respond yes or no
// { } (=== Strict Equality operator) { } ->  { True/ False }
// { } (== Loose Equality operator) { } ->  { True/ False }performs Type Coercion before comparing the Guṇa. It attempts to make the types of the two Dravya the same before checking their value.





//Category 4: Logical Operator (&&, ||, !)
// {True/ False } (&&, ||, !) {True/ False }--->{True/ False }  go/no  go
//// {non boolean } (&&, ||, !) {non boolean }
//(Short-Circuiting): The Logical AND (&&) and Logical OR (||) operators exhibit "short-circuiting."

// && will not evaluate its right side if its left side is false.
//(Short-Circuiting)
//&&: {falsy} (&&) { any} ~~→ {falsy}
//||: {truthy} (||) {any} ~~→ {truthy Guṇa}

//js engine - internal - Type coercion is the automatic, implicit conversion of a value from one data type into another by the JavaScript engine.
//  G (The + Operator's Special Mission): If either operand of the addition operator (+) is a string, the other operand will be coerced into a string, and the action becomes string concatenation.
//  H (The Mathematician's Rule): Most other mathematical operators (-, *, /, %) will attempt to coerce any non-number operand into a number before performing the calculation.
//  I (The "Loose" Interrogation): The abstract equality operator (==) will perform type coercion if the two operands are of different types before comparing them for equality.
//{5} (==?) {"5"} ⇒ ({"5"} → internal → {5}) ⇒ {5} (==?) {5} → {true}

//  J (The "Strict" Interrogation): The strict equality operator (===) will not perform type coercion. If the types are different, it immediately concludes they are not equal.
//{5} (===?) {"5"} ⇒ [number ≠ string] ⇒ → {false}