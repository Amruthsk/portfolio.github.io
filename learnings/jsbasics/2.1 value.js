//primitive
let steelGrade = 4140;
console.log(steelGrade);
//inseparable value


// object has  (properties), which can be perceived via dot or bracket notation.
let engineBlueprint = { bore: 86, stroke: 96 };

console.log(engineBlueprint.bore);

let dimensionToMeasure = "stroke";
console.log(engineBlueprint[dimensionToMeasure]);
//possesses perceivable qualities


//Some substances have inherent qualities, like an Array's 
let rollerChain = ["link1", "link2", "link3"];
console.log(rollerChain.length);


//The qualities of an Object are mutable.
engineBlueprint.bore = 87;

console.log(engineBlueprint);
//mutable qualities


//An object's properties can hold both primitive values and other objects
const sketchbookPage = {
  subjectName: "Captain Eva Rostova",
  age: 32,
  onActiveDuty: true,
  equipmentLoadout: {
    rifle: "AK-12",
    optic: "PSO-1",
  },
};

console.log(sketchbookPage.subjectName);
console.log(sketchbookPage.equipmentLoadout);
console.log(sketchbookPage);
//can possess qualities of both primitive and object types 

console.log("adding new method");
//A property whose value is a function is a 'method' that the object can perform.
sketchbookPage.summarize = function () {
  console.log(
    `${this.subjectName}, age ${this.age}, is carrying an ${this.equipmentLoadout.rifle}.`
  );
};

sketchbookPage.summarize();
console.log(sketchbookPage);
//can perform actions via its methods

//Bracket notation is used when the property key is stored in a variable indirect
let propertyToFind = "age";
console.log(sketchbookPage[propertyToFind]);
//direct
console.log(sketchbookPage.age);

console.log(sketchbookPage.propertyToFind);// cant access using .