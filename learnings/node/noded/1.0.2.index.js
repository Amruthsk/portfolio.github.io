
//( Module Importation (External))
//(require)[slugify] ------->(reads)@[node_modules]---->return[sluggish function]
//(require){slugify(non relative)}@[nodule_modules]------->[slugify] 
const slugify = require("slugify");

//( Module Importation (Local))
//(require)[module_system] ------->(reads)@[File system]---->return[squadAPI]
//(require){path(relative)}@[file system]------->[squadAPI] 

const squadAPI = require("./1.0.2.module_system.js");

const missionTitle = "Execute Operation Nightfall";

// using imported external module's capability what is lower:true? - lower case
const missionSlug = slugify(missionTitle, { lower: true });

//Using the imported local module's capability.
const report = squadAPI.getReport("High-Value Target");


console.log(`Mission Slug: ${missionSlug}`);
console.log(`Field Report: ${report}`);


console.log("Requesting squad a second time...");
const squadAPI_cached = require("./1.0.2.module_system.js");

const missionTitle2 = "Execute Operation Nightfall";
const missionSlug2 = slugify(missionTitle2, { lower: true });

// Using the original require's return value.
const report2 = squadAPI_cached.getReport("High-Value Target");

console.log(`Mission Slug: ${missionSlug2}`);
console.log(`Field Report: ${report2}`);


//cached return
console.log(squadAPI === squadAPI_cached); // This will prove they are the exact same substance.