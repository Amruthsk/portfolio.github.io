console.log("HQ: Requesting first intelligence report.");
const report1 = require("./units/intelligence3");
console.log("HQ: Received first report.", report1);


console.log("\nHQ: Requesting second intelligence report moments later...");

const report2 = require("./units/intelligence3");
console.log("HQ: Received second report.", report2);

console.log(
  "\nAre the two reports the exact same object?",
  report1 === report2
);