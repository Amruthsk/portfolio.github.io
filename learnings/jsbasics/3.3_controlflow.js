// Conditional  (if...else)
//  A (The Core Choice): T
// he if statement executes a block of code if a specified condition evaluates to true.

//  B (The Alternative Path): 
// The else statement provides an alternative block of code to be executed if the if condition is false.

//  C (The Nature of Truthiness): 
// A condition is considered true unless it is one of the specific "falsy" values (false, undefined, null, 0, NaN, or an empty string ""). Any other value is "truthy."
//The if block runs on a true condition, and the else block runs on a false one.
let enemyInSight = true;

//[enemyInSight]-{true}
//p-enemyInSight  -(enemyInSight = true)--Intelligence Report: ENEMY SIGHTED. Calling artillery

if (enemyInSight) {

  console.log("Intelligence Report: ENEMY SIGHTED. Calling artillery.");
} else {
  console.log("Intelligence Report: All clear. Continue patrol.");
}


//  Repetitive  (while & for)
// Claim D (The Pre-Condition Loop): - exact number of times
// The while statement creates a loop that executes a block of code as long as a condition, 
// which is evaluated before each execution, is true.
// The while loop executes repeatedly, but only after checking its condition before each iteration.
console.log("--------------------")
let ammoCount = 3;
//[ammoCount] -{3}
console.log("Order: Commence suppressive fire!");
while (ammoCount > 0) {
  //()-h, block -s  ammoCount -{c}
  console.log("Firing burst... " + ammoCount + " magazines left."); //()
  ammoCount--; //()
}
console.log("Ammo depleted. Cease fire!");


// Claim E (The Structured Loop): 
// The for statement creates a loop consisting of three optional expressions enclosed in parentheses: an initialization, a condition, and a final expression, 
// which are executed in a predictable sequence to control the loop.
console.log("--------------------");
console.log("Order: Systematically clear the 5 buildings in this grid.");
// three-part structure of the for loop
//[Initialization]-{}  , (Condition-H) , (Final Expression),{}-s
for (let buildingNum = 1; buildingNum <= 5; buildingNum++) {
  console.log("Clearing building #" + buildingNum + "...");
}

console.log("Grid is clear. Mission accomplished.");

// The switch Statement
//  A (The Selector):
//  A switch statement evaluates a single input expression and seeks to match the expression's value to a case clause.

//  B (Strict Comparison): 
// The matching process between the switch expression and the case clause is performed using the Strict Equality Comparison algorithm (identical to the === operator). It does not perform type coercion.
//  C (The Default Path): If no case clause matches the expression's value, control is passed to the default clause, if it exists.
//  D (Fall-Through Behavior): Once code execution starts inside a matching case block, it will continue executing through all subsequent case blocks until either a break statement is encountered or the switch statement ends.
//switch strictly matches a case and break terminates execution.
//(switch with break)

console.log("---------------------------")
let threatLevel = "YELLOW";
console.log("Dispatch, we have a new report. Threat level is:", threatLevel);
// [threatLevel] - { YELLOW };
//[threatLevel] -p
//(==green, ===yellow) - H
//{}-s
switch (threatLevel) {
  case "GREEN":
    console.log("Action: Maintain standard patrol.");
    break; //  Terminate the switch block.
  case "YELLOW":
    //this h match s executes
    console.log("Action: Deploy recon drone.");
    //break; //  Terminate the switch block.
  case "RED":
    console.log("Action: Scramble interceptors.");
    break;
  default:
    console.log("Action: Report to commanding officer.");
    break;
}
console.log("Dispatcher standing by for next report.");
//program -> executed only the "YELLOW" case's logic if break is present on every case

//Omitting break causes execution to "fall through" to the next case's code.

//The execution flow -> continued into the "RED" case after matching the "YELLOW" case 



// break and continue
//  (The break Action): The break statement
// immediately terminates the innermost enclosing switch or loop (for, while) statement.
// Program control transfers to the statement following the terminated one.


//  (The continue Action): The continue statement
//   terminates the execution of the statements in the current iteration of the current loop, and execution continues with the next iteration of the loop.
//  (Context Dependency): The continue statement can only be used within a loop. Using it outside of a loop is a syntax error.

//continue skips the rest of the current iteration and proceeds to the next.

console.log("-----------------------------------")
console.log("Order: Inspect cargo containers 1 through 5.");


for (let containerNum = 1; containerNum <= 5; containerNum++) {
  console.log(`Approaching container #${containerNum}.`);
  if (containerNum === 3) {
    console.log("--> Manifest says container #3 is diplomatic. Skipping.");
    // Meta: 'continue' alters the flow of the parent 'for' loop .
    continue;
  }
  console.log(`   Inspecting contents of container #${containerNum}.`);
}
console.log("All inspections complete.");


//[The loop's execution
//|
//[skipped a specific action for iteration 3]

console.log("-----------------------------------");
// /break immediately and completely terminates the loop.
console.log("Order: Search containers 1 through 5 for contraband.");
for (let containerNum = 1; containerNum <= 5; containerNum++) {
  console.log(`Searching container #${containerNum}.`);
  if (containerNum === 3) {
    console.log("--> CONTRABAND FOUND! Aborting search mission!");
    // Meta: 'break' terminates the parent 'for' loop  entirely.
    break;
  }
}
console.log("The operation is over.");