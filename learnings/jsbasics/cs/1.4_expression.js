// (Control Flow & Expression )

// [Expression] (Evaluate) → {Boolean} ⇒ ( Control Flow) → [Execution Path A] or [? Execution Path B]
// [Intel Report] ⇒ (Analyzed by Specialists) → {Actionable / Not Actionable} ⇒ (General's Command) → [Execute Plan A] or [? Execute Plan B]
// (expression-evaluate & produce value)----{value}---->(control flow){directs the order of execution}

// //actionable notactionable
// [Expression[variables & operators]]

// Operators & Expressions
// Operators - symbols
// //operators -
// //operands - values on which operator works
// //operators - symbols that perform operations on operands
// //1. arithmetic operator
// //2. assignment operator
// //3. logical operator
// //4. comparison operator
// [operand](operators)[operand]---{new value}
// [{operand}](operators)[{operand}]---{new value}

// Expressions - collection of isVariableStatement,operators--->{single value}
//[[Variables], [Literals], [Operators]] (Composition) → [Expression]{Resolves to a single value}


// logical operator - {Short-Circuiting}----(evaluate only LHS)----> give the value 
//[LHS Expression] (Evaluate) → {Falsy} ⇒ (Short-Circuit ) → [? RHS Expression is Ignored]

//&&
//[LHS] (Eval) → {Falsy} ⇒ [Result ← LHS Value] | {Truthy} ⇒ [Result ← RHS Value]

//||
//[LHS] (Eval) → {Truthy} ⇒ [Result ← LHS Value] | {Falsy} ⇒ [Result ← RHS Value]

// {Truthiness & Falsiness}
// {Boolean}{True/false}
//[Any JS Value] (Boolean Coercion) → {Truthy} or {Falsy}
// {Falsy}{false, 0, -0, 0n (BigInt zero), "" (empty string), null, undefined, and NaN}
//[A Value] ⇔ {Falsy}  [That Value] ∈ [[false, 0, "", null, undefined, NaN, -0, 0n]]
// {Truthy}{non-empty strings ("0", "false"), arrays ([]), and objects ({})}


// (Execution)
// (if){true}--->{(execute)}
//(if) @ [Condition] → {Truthy} ⇒ (Execute) @ [Block A]

// (if){false}--->else{(execute)}
//if) @ [Condition] → {Falsy} ⇒ (Execute) @ [Block B (else)]

//(if @ [Condition Expression]) → {Truthy} ⇒ (Execute Block A) | {Falsy} ⇒ (Execute Block B)


// (switch){case1,case2,case3.....}

// (switch){case2-True}---->{(execute)}
//(switch) @ [Input Value] ⇒ (Compare ===) @ [Case A], [Case B], [Case C]... → {Match Found} ⇒ (Execute) @ [Matching Block]
//(switch @ [Input Expression]) → [Value] (===) [Case₁], [Case₂]... ⇒ (Execute Matched Block)

// (for)---@[object]---new [i] ---> condtion {i}---->{execute}---> {updatei}  ↻repeat  till the condition is false
//(for: (Initialize); [Condition]; (Update)) ↻




// (while) --@[object]---new [i] ---> condtion {i}---->{execute}---> {updatei} ↻ repeat till the condition is false
//(while @ [Condition]) → {Truthy} ⇒ (Execute Body) ↻ | {Falsy} ⇒ → [Exit]
//(Initialize) → (while @ [Condition]) → {Truthy} ⇒ (Execute Body) → (Update) ↻ | {Falsy} ⇒ → [Exit]

let enemyStrength = 600;
let ourStrength = 700;

//expression - resolve to single value
let strengthAdvantage = ourStrength - enemyStrength;


console.log("Initial strength advantage calculation:", strengthAdvantage);



//{[if (0)] → [evaluates to {falsy}]} ⇒ {[execute else block]}
let zeroAmmo = 0;
if (zeroAmmo) {
  console.log("Proof of Truthiness: FAILED. This should not print.");
} else {
  console.log("Proof of Falsiness: The value 0 is falsy, as expected.");
}

//{[if ("Enemy sighted")] → [evaluates to truthy]} ⇒ {[execute if block]}
let nonEmptyReport = "Enemy sighted";
if (nonEmptyReport) {
    console.log("Proof of Truthiness: A non-empty string is truthy, as expected.");
}


let hasAirSupport = true;
let isClearWeather = false;

console.log("General is evaluating the intelligence brief...");


// {[if (true && false)] → [resolves to false]} ⇒ [execute else block]
if (hasAirSupport && isClearWeather) {
  console.log("ORDER: Launch the air assault!");
} else {
  console.log("ORDER: Air assault is a No-Go. Hold ground forces.");
}



// {[if (false && ...)] → [short-circuits]} ⇒ [skips right side, evaluates to false]
if (isClearWeather && console.log("This message should NEVER appear.")) {
  // This block will not run.
} else {
  console.log(
    "Proof of Short-Circuiting: The message did not appear, proving the right side was never executed."
  );
}


//for ([i=1]; {[i<=3? -> truthy]};{ [i++]}) → ([Execute Body])
let ammoCount = 3;
console.log("ORDER: Commence artillery barrage!");
for (let i = 1; i <= ammoCount; i++) {
  console.log(`Firing artillery shell #${i}...`);
}
console.log("Artillery barrage complete.");

