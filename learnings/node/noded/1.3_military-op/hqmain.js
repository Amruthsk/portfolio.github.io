
////('require' @ {path: '"./units/specialist.js"'}) ⇒ [const "./units/specialist.js"] { All "./units/specialist.js" system - deploy}

const specialistUnit = require("./units/specialist.js");


//specialistUnit.deploy();


//('require' @ {path: '"./units/specialist.js"'}) ⇒ [const "./units/specialist.js"] { All "./units/specialist.js" system - deploy}

const newLiaison = require("./units/specialist.js");


console.log("Received asset type:", typeof newLiaison);


console.log("Does the old mission exist?", newLiaison.mission);


//call
newLiaison();

//////('require' @ {path: '"./units/counter.js"'}) ⇒ [const "./units/specialist.js"] { All "./units/counter.js" system - function}

console.log("Requisitioning resource counter for the first time...");
const counter1 = require("./units/counter.js");
counter1.useResource();

//////('require' @ {path: '"./units/counter.js"'}) ⇒ [const "./units/specialist.js"] { All "./units/counter.js" system - function}

console.log("Requisitioning resource counter for the second time...");
const counter2 = require("./units/counter.js");
counter2.useResource();
//same unit cached
console.log("Is it the same unit on call?", counter1 === counter2);

counter1.useResource();
counter2.useResource();