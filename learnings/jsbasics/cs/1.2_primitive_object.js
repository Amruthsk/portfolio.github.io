
//Object & Prototypal Inheritance
// [variable] ↔ @address ↔ [Object]

// The Prototype Link (Internal Quality):
// *Instance ⊂ { [[Prototype]]: @address } → [Prototype Object]

// chain walk
// (Access .prop) @ [*Instance] → {prop: ? absent} ⇒ (Chain Walk ) → (Access .prop) @ [Prototype Object]

// full chain
// *Instance → [Prototype] → [Grand-Prototype] → ... → [Object.prototype] → null


//[Object] → Property Not Found ⇒ () Follows Prototype Link) → [Prototype Object]
// [label:variable]----(reference address)---->[object]{key:value}

//  //[Instance] --[[Prototype]]--> [PrototypeObject]

// Object ↔ [[Prototype]](blueprint)↔  [[constructor Prototype]](blueprint)↔ [[Object.Prototype]](blueprint)--null

// prototype chain- goes inward



//(The Seven Primitives): There are exactly seven Primitive
// [string]
// [number]
// [boolean]
// [null] - deliberately labeled "EMPTY."
// [undefined] - not-yet-initialized,
//[symbol]
//[bigint]

// /[string | number | boolean | null | undefined | symbol | bigint]

//plain object
// [obj] ----> [[Prototype]] ----> [Object.prototype] ----> [[Prototype]] ----> null
//   └- (has its own properties like .name)   └- (inherits methods like .toString(), .hasOwnProperty())
//[Any non-primitive] ⇔ {[key]: [value], [[Prototype]]: @address}



// [object]- not primitive 
//Object, Array, Function, Date, Promise
 // object ↔ [[Prototype]]
//().map(), .filter(), .push()) <-> Array.prototype

//array
// [myArray] -> [[Prototype]] -> [Array.prototype] -> [[Prototype]] -> [Object.prototype] -> [[Prototype]] -> null
//    └- (has .length)            └- (inherits .map, .filter) └- (inherits .toString)


//.getFullYear(), .getMonth() <-> Date.prototype

//  .then(), .catch(), .finally() <-> Promise.prototype.

//[[function class]] ──> [Function] | { name:'motor', length:1, code: {...} }


//(typeof)@[]--> {datatype}
//(typeof)@[null]--> {datatype:object}

//[primitive]{immutable,Pass-by-Value}
// [variable] → [Substance] {Immutable }

//(change)@[primitive]--->[copy new primitive]
//(pass)@[primitive]--->[copy new primitive]
//immutable
//(Change ) @ [Primitive] → [New, Separate Primitive]
//(Pass-by-Value)
// (Pass) @ [Primitive] → [New Copy of Primitive]

//[object]{mutable,Pass-by-Reference}
//[variable] → @address → [Substance] {Mutable }
//(change)@[object]--->[old object change]
//(passed)@[object]----> reference (new copy of @memory address) 
//mutable
// (Change ) @ [Object @ address] → [Same Object @ same address] {Altered Guṇa}
//(Pass ) @ [@address] → [New Copy of @address]

// Coercion
//implicit
// {data type 1}-----(Implicit Conversion)@----->{data type 2}

// {datatype 1}----(context - dependent - operatorbased)----->{datatype2}

//pass by value
const newAction = (name) => console.log(`\n--- ${name} ---`);

newAction("Action 1: Primitives");

let rank = "Sergeant"; //[let rank]----->[string]{"Sergeant",immutable}

//change mutation - no change
//[ rank] ← (  Mutation) = [Result: No Change]
//(change)@[sergeant]-> no change
rank[0] = "L";

console.log("Attempted mutation:", rank);

function promote(title) {//(pass)@sergeant -> new copy of sergeant
  title = "Major"; //[let title]----->[string]{"Major",immutable} 
  console.log("Inside function:", title);
}

promote(rank);

console.log("Original after function:", rank);


//Object Mutability & Pass-by-Reference
newAction(" Action 2: Objects");

// /[let squad]-------(@address1)-->[Object]{ leader: "Sergeant", size: 4 ,mutable,[[prototype]:@address_]}

let squad = { leader: "Sergeant", size: 4 };

// Sergeant -------[squad].(leader)---->Lieutenant
//(change)@[object @address1]---->[object@address1]{leader:Lieutenant}
squad.leader = "Lieutenant";


console.log("After mutation:", squad);



function reinforce(unit) {//(pass)@address---> new copy of @address1
   // [squad] ↔ @address1 ↔ [unit] (Both point to the same substance)
    unit.size += 2;
}

reinforce(squad);

console.log("Original after function:", squad);

console.log("Type of object:", typeof squad);
console.log("Type of null (the anomaly):", typeof null);


//  Proving Prototypal Inheritance

newAction("Action 3: The Prototype Chain");

//[designManual] <-> [prototype object]
const designManual = { standardLoadCapacity: "20 tons" };
// [designManual]----@address2---->[Object]{standardLoadCapacity:"20 tons"}

//[fieldBridgeProject- instance] <-> [designManual]

const fieldBridgeProject = Object.create(designManual);

// [fieldBridgeProject] → @address3 → [Object] { [[Prototype]]: @address2 }

fieldBridgeProject.location = "River Cross Alpha";

//  (Add ) @ [Object @ address3] → [Object @ address3] {location:"...", [[Prototype]]:@address2}

console.log("Direct property:", fieldBridgeProject.location);

console.log("Inherited property:", fieldBridgeProject.standardLoadCapacity);


//{direct property}-[?]--->--(chain walk)----------->{indirect property}
//[fieldBridgeProject- instance] <-> [designManual]
//[fieldBridgeProject]→({?} not found)⇒[designManual]→({}found)


newAction(" Action 4: Coercion");

// 2 different data types  - implicit conversion
let distance = 10;
let unit = "5"; 


let result = distance + unit;
//[distance]{number}------(+ - concatenation)--->[distance]{string}
//[Number: 10] + [String: "5"] ---(coercion)----→ [String: "105"]
console.log("Result of + coercion:", result);
console.log("Type of result:", typeof result);

//[distance]{string}------(== - comparison)--->[distance]{number}

// [Number:10] (==) [String:"10"] ⇒ (Coercion) → [Boolean:true]

let comparison = distance == "10";
console.log("Result of == coercion:", comparison);

//context based on operator