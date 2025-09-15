function createSecretKeeper(secret) {
  // The Master Artisan
  const privateData = `The secret is: ${secret}`; // Her Private Workbench tools

  // The Apprentice function is created here, in this environment.
  const keeper = function () {
    // It accesses 'privateData' from its containing Lexical Environment.
    console.log("Proof of Closure:", privateData);
  };

  console.log("Master Artisan is finishing her work...");
  return keeper; // She hands over the locked toolbox (the closure).
}

console.log("--- Phase 1: Creating the Closure ---");
const myKeeper = createSecretKeeper("More Clarity"); // The Master works and leaves.
console.log("The Master Artisan has left. We only have the 'keeper' function.");
console.log("\n");


console.log("--- Phase 2: Executing the Closure ---");
// We are now in the Global Scope. 'privateData' does not exist here.
// But the 'myKeeper' function remembers its birth environment.
myKeeper(); // The Apprentice uses his keycard.


console.log("\n--- Phase 3: The Inversion ---");
console.log("Attempting to access 'privateData' from the Global Scope...");
try {
  console.log(privateData); // This violates the rules of Scope.
} catch (error) {
  console.log(" (Direct Proof) of Failure:", error.message);
}