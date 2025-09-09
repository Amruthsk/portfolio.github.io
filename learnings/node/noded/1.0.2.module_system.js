

//(npm init) → [package.json]
//npm init -y


//[package.json]


//(npm install) reads [package.json] → creates [node_modules]
//npm install slugify

//[package.json]{dependencies:slugify}
//( npm install) @ [package.json] ⇒ [node_modules] + [package.json]{ dependencies}


console.log("Sniper team deployed to the field.");


//[getReport]{function}
const getReport = (target) => {
  return `Target '${target}' is neutralized. Returning to base.`;
};

//[module.exports]{}-------->[module.exports]{getReport}{public}
module.exports.getReport = getReport;
//(Assignment) @ [module.exports] ⇒ [module.exports]{Public API ∋ getReport}
