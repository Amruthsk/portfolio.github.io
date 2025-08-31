module.exports.deploy = function () {
  console.log("Specialist unit deployed and ready.");
};

console.log("Unit reporting from map grid:", __filename);
console.log("Our barracks are located in:", __dirname);


exports.mission = "This mission will be ignored.";


module.exports = function () {
  console.log(
    "This is the NEW liaison officer reporting. The old one was replaced."
  );
};

//[module]{exports={deploy,function()}, require, module, __filename, and __dirname.}
// ignores deploy
//[module]{exports={deploy,function()}, require, module, __filename, and __dirname.}
// [exports] ---> [ { ... } ] <--- [module.exports]
// [exports] ---> [ mission ] [ { function() } ] <--- [module.exports]

console.log(module);