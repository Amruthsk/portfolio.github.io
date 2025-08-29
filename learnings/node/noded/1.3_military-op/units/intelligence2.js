
//module.exports = exports.{}= assigns map coordinate


exports.mapCoordinates = "Alpha-7";

//module.exports' object is now untouched by this action
//export is reassigned no longer points to module.exports
exports = {
  threatLevel: "Low",
  message: "All clear.",
};


 //console.log(module);//wrapper in action