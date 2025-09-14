
// [console Object] ⊂ [Global Object] ↔ {(Print Output) @ [Data]}
//(Print Output) @ [Data]
console.log("---  Start: Direct  proof of execution. ---");


// [process Object] ⊂ [Global Object] ↔ {(Control) @ [Current Process]}
//[argv Array] ⊂ [process Object] ↔ {Execution Arguments}
const args = process.argv;
console.log("Proof of process.argv (global access):", args);


//[Environment Variable] ⊂ [process.env] ⊂ [process Object]{process information}
//[env Object] ⊂ [process Object] ↔ {Shell Environment}
// $env:A_MODE="EMBODIMENT"; node runtime_sadhana.js
const mode = process.env.A_MODE || "DEFAULT";
console.log("Proof of process.env (interaction): The mode is", mode);

//(process.exit()) ⇒ [Process→?]
console.log("Initiating process.exit(). The next line will not be seen.");
process.exit(0);


console.log("---  End: This output is impossible. ---");


