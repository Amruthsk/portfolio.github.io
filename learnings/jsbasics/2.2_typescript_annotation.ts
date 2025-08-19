
// QA

//A (The Form): Type annotations are written with a colon : followed by the type (: type) after a variable or function parameter declaration

//B (The Purpose): The primary purpose of a type annotation is to be an explicit instruction to the TypeScript compiler, telling it what the type of a value is intended to be.

//Type annotations use : type syntax to explicitly tell the compiler the intended type.
let pistonDiameter: number;

//[pistonDiameter]-{number} - explicitaly assign number
//[] assigned {undefined}

pistonDiameter = 75;

//{undefined} -> {75}

console.log(`Piston diameter is set to: ${pistonDiameter}`);

// C (The Enforcement): If a value is used that does not match its explicit type annotation, TypeScript will report a compile-time error. 
let partMaterial: string;

////[partMaterial]-{string} - explicitaly assign string

//partMaterial = 2024; // directly shows error~~~~~~~~~~~ assignment rejected



//D (The Erasure): Type annotations are completely removed during the TypeScript compilation process and do not exist in the final JavaScript output

var pistonDiameter;
pistonDiameter = 75;
console.log("Piston diameter is set to: ".concat(pistonDiameter));
var partMaterial;
partMaterial = "Aluminum-2024";





// E (The Primitives): The core primitive types that can be annotated are string, number, and boolean.
