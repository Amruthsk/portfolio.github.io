


console.log("--- Phase 1: Proving Primitive Immutability  ---");
const primitiveLocker = 100; // [const] locker with a primitive number
let primitiveLockerB = primitiveLocker; // A second locker gets a COPY of the value

console.log("Initial State: Locker A =", primitiveLocker, "| Locker B =", primitiveLockerB);
console.log("Are they equal? (A === B):", primitiveLocker === primitiveLockerB);

// (Attempt to modify)
primitiveLockerB = 200; // Reassign Locker B to a NEW value

console.log("After Reassignment: Locker A =", primitiveLocker, "| Locker B =", primitiveLockerB);
console.log("Is Locker A affected? The original value is {Immutable}:", primitiveLocker === 100);
console.log("\n");


console.log("--- Phase 2: Proving Object Mutability  ---");
const objectLocker = { value: 100 }; // [const] locker with an object (our treasure chest)
const objectLockerB = objectLocker; // Locker B gets a COPY of the REFERENCE (the remote control)

console.log("Initial State: Locker A =", JSON.stringify(objectLocker), "| Locker B =", JSON.stringify(objectLockerB));
console.log("Do they point to the same object? (A === B):", objectLocker === objectLockerB);

// (Modify the object's contents using the reference from Locker B)
objectLockerB.value = 200;

console.log("After Mutation: Locker A =", JSON.stringify(objectLocker), "| Locker B =", JSON.stringify(objectLockerB));
console.log("Is Locker A affected? Yes. Hetu: {Shared Reference}:", objectLocker.value === 200);
console.log("\n");


console.log("--- Phase 3: The  (Inversion) ---");
console.log("Attempting to reassign a const binding...");
try {
  primitiveLocker = 300; // This violates [ØReassignment]
} catch (error) {
  console.log(" (Direct Proof) of Failure:", error.message);
}