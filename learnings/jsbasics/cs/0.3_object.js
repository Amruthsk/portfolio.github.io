// The "Parent" object (The Prototype)
const parent = {
  familyName: "Name of Parent",
  greet() {
    // 'this' will be determined by HOW greet() is called.
    console.log(
      `Hello, I am ${this.name}, from the ${this.familyName} family.`
    );
  },
};


// --- Build & Observe ---
console.log("--- Phase 1: Proving Prototype Delegation ---");
// Create "Alex", an object whose prototype is 'parent'.
const alex = Object.create(parent);
alex.name = "Alex"; // Alex's own property.

console.log("Alex's own name:", alex.name);
// The 'familyName' property is absent [?familyName] on 'alex'.
// The engine delegates the search to the prototype chain.
console.log("Alex's inherited family name:", alex.familyName);
console.log("\n");



console.log("--- Phase 2: Proving 'this' Binding ---");
console.log("Calling greet() with 'alex' as context:");
// The 'h' for binding 'this' is the dot operator call.
alex.greet(); // (alex.greet()) ⇒ [this] ↔ [alex]



// Create another object that also inherits from parent.
const brian = Object.create(parent);
brian.name = "Brian";
console.log("Calling greet() with 'brian' as context:");
brian.greet();
console.log("\n");


console.log("--- Phase 3: The Inversion ---");
console.log("Calling greet() without context:");
const standAloneGreet = alex.greet; // Extract the function itself.
standAloneGreet(); // The context is lost. 'this' is no longer 'alex'.
// In Node.js, 'this' becomes the global object, which has no .name property.
// In browser strict mode, 'this' would be undefined, causing an error. 