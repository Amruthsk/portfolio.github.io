//A (The Core Distinction):variable is not the data value itself. It is a named reference, a label, or a pointer that refers to a value

// B ( Assignment operator = ):variable (the label) to point at a specific Dravya (the value)
//variable name<-> [data value]
console.log("--- Action 1: Forging the relationship ---");
let alphaOne = 77;
// alphaOne - label points to data value & helps to see
//[number]-{77}
//[Label: alphaOne] ---points_to---> [ 77]
console.log(`Callsign 'alphaOne' currently designates unit: ${alphaOne}`);




//C (The Nature of Reassignment): original data not altered
//variable <-break-> [old data] link breaken
//variable <-> [new data]
//Reassignment does not change the original value; it changes where the variable's pointer points.

console.log("\n--- Action 2: Re-Pointing the Label ---");
alphaOne = 12;
//[Label: alphaOne] --x--points_to--x-> [77] ... [Label: alphaOne] ---> [12]
console.log(`Callsign 'alphaOne' has been RE-ASSIGNED to unit: ${alphaOne}`);





//D (Consequence for Primitives)  makes copies

console.log("\n--- Action 3: Copying the SOP ---");

let masterSop = "Attack at Dawn";
//masterSop <-> [string]-{Attack at Dawn}'

let officerSop = masterSop;

console.log(`Initial SOPs: Master='${masterSop}', Officer='${officerSop}'`);

officerSop = "Attack at 0500";//reassign

//[master] -> ["A@D"] ... [officer] -> [COPY of "A@D"] -> RE-POINTED -> ["A@0500"]
console.log(`Final SOPs:   Master='${masterSop}', Officer='${officerSop}'`);

//The relationship between primitive variables
//|
//(reassigning officerSop had zero effect on the data pointed to by masterSop, proving their pointers refer to completely independent substances)
//|
//is one of copied value, not shared reference




//  <!-- A (The Fundamental Division):  Primitives and Objects.

// B The state of Immutability - Primitives - can never be changed creates a new primitive value
console.log("\n--- Action 4: Proving Immutability ---");
let metal = "titanium";
//[string]-{titanium}
metal[0] = "l";
console.log(`The metal is still: ${metal}`);
// [string]
//|
//(action to change its internal quality had no effect, as directly perceived by the unchanged output)
//|
//{immutable}

//metal ↔ titanium  metal points
//A primitive string  cannot have its internal state changed.


//  C (Transmission by Value) -  if copy of its value is made - variable holds an independent replica of the original value, not a reference to it.\
// no change affects the original
//Assigning a primitive to another variable creates an independent copy of the value.
console.log("\n--- Action 5: Proving Transmission by Value ---");
let originalBlueprint = 500;

let colleagueBlueprint = originalBlueprint;

console.log(
  `Initial states: Original=${originalBlueprint}, Colleague=${colleagueBlueprint}`
);

colleagueBlueprint = 999;
//[original: 500] → [colleague: 500] → [colleague_changes_to: 999]
console.log(
  `Final states: Original=${originalBlueprint}, Colleague=${colleagueBlueprint}`
);

//The primitive number 
//|
//(modifying the second variable had no effect on the first, proving they are independent substances)
//|
//is transmitted by value 



//  D (The Seven Primitives): There are exactly seven Primitive 
//  [string]
//  [number]
//  [boolean]
//  [null] - deliberately labeled "EMPTY."
//  [undefined] - not-yet-initialized, 
// null is an intentional absence, while undefined is an uninitialized state.

console.log("\n--- Action 6: Differentiating null vs undefined ---");
let uninitializedBin;// variable declared not assigned
let intentionalEmptyBin = null; //deliberate, assigned absence

//state of variable
console.log(`Uninitialized Bin contains: ${uninitializedBin}`);//  undefined by default
console.log(`Intentional Empty Bin contains: ${intentionalEmptyBin}`);// null
console.log("\n--- type of null vs undefined ---");
console.log(`Type of uninitializedBin: ${typeof uninitializedBin}`);
console.log(`Type of intentionalEmptyBin: ${typeof intentionalEmptyBin}`);

//null and undefined
//|
//(one from omission, one from explicit assignment)
//|
// distinct datatypes  representing different types of abscence 
//  [symbol]
//  [bigint]


//  E (The Wrapper Object Illusion): Primitive Dravyas themselves have no properties or methods 
//when a property is accessed on a primitive (e.g., 'hello'.length), JavaScript creates a temporary "wrapper object" of the corresponding type (e.g., new String('hello')) on-the-fly, accesses the property on that object, and then discards the wrapper.

console.log("\n--- Action 7: Perceiving the Wrapper Object Illusion ---");
let rawMaterial = "steel";
// Primitives cannot have properties.
//temporary `new String("steel")` object -> Get the `.length` property from this temporary object->Discard the temporary object.
let materialLength = rawMaterial.length;
console.log(`The length of the raw material is: ${materialLength}`);
console.log(`The type of the raw material is still: ${typeof rawMaterial}`);
// A primitive string
//|
// (we successfully accessed .length but its typeof remained "string", proving an invisible intermediate mechanism—the wrapper object)
//|
// can provide property values without being an object itsel