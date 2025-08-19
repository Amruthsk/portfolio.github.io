//  A (The Core Function): An interface or type alias is a named definition for the "shape" of an object, 
// specifying the names and types of its properties.
//  B (The Enforcement): The TypeScript compiler enforces this shape.
//  Any object declared to be of a certain interface or type must have all the required properties with the correct types, or a compile-time error will occur.


//"An interface defines a mandatory shape, and the compiler will throw an error if an object does not conform to it

// [[MechanicalPart]] - blueprint
interface MechanicalPart {
  partNumber: string;
  mass_kg: number;
}
//[MechanicalPart]<->{'partNumber' (a string) and 'mass_kg' (a number)}
const piston: MechanicalPart = {
  partNumber: "PN-129X4",
  mass_kg: 0.5,
};
//[piston] - {[MechanicalPart]<->{'partNumber' (a string) and 'mass_kg' (a number)}}

console.log("Piston conforms to blueprint:", piston);

const bolt: MechanicalPart = {
  partNumber: "PN-997B8"
  // Error: 'mass_kg' is missing!
};
//[bolt] - {[MechanicalPart]<->{'partNumber' (a string)} error 
//declared with a specific interface must possess all
// non-optional qualities defined by that interface

//[The bolt object literal] -------------(error message - absence of required property)→ [is in a state of compile-time error ]

//  C (The Optional Quality): Properties within an interface or type can be marked as optional by adding a ? after the property name. The object can then exist with or without this property.
//  D (The Immutable Quality): Properties can be marked as readonly, preventing their value from being changed after the object is first created.


//[[EngineeringBlueprint]]
interface EngineeringBlueprint {
  readonly id: string; // This cannot be changed.
  description: string;
  revision?: number; // This is optional.
}


const gearboxBlueprint: EngineeringBlueprint = {
  id: "GB-V2",
  description: "Main Gearbox Assembly",
  revision: 2,
};

gearboxBlueprint.id = 'GB-V3'; // ERROR!``
//Because the 'id'  was defined as 'readonly' in the  (blueprint).


const pumpBlueprint: EngineeringBlueprint = {
  id: "PMP-V1",
  description: "Coolant Pump Assembly",
};

console.log("Valid blueprint without optional prop:", pumpBlueprint);





//  E (The Key Distinction - Mutability): An interface is an "open" blueprint. Multiple declarations of the same interface are automatically merged into a single definition. 
// A type alias is "closed."
//  Once defined, it cannot be changed or added to from another declaration.

//An interface is an "open" blueprint
//[[ECN]]
// first declaration of blueprint
interface ECN {
  ecnNumber: number;
}

// second declaration of blueprint interface - open nature -declarations are merged
interface ECN {
  details: string;
}



//[changeOrder]

const changeOrder: ECN = {
  ecnNumber: 202408,
  details: "Increase material thickness on casing.",
};

console.log("Merged interface works:", changeOrder);


// A type alias is "closed."
//[[SealedBlueprint]]
type SealedBlueprint = {
  id: number;
};

type SealedBlueprint = {
  // ERROR: Duplicate identifier 'SealedBlueprint'.
  description: string;
};