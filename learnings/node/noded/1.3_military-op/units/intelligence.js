//Variables inside a module are private unless explicitly placed on module.exports

const internalIntel = "Target is at grid 4B. This is a secret.";

const report = {
  threatLevel: "High",
  message: "Enemy forces are advancing from the north.",
};

//by default[internalIntel]{private}-----(access)----> error bound to the scope of this module

// [report]{private} -----([module.exports] = {report};)-->[report]{public}

module.exports = report;

 // console.log(module); can find what is being exported