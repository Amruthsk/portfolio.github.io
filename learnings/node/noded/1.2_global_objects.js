//pre-existing objects, the foundational "matter" that is always available to you.

//  A (Inherent Availability): Global objects are built-in and available in all modules without needing an import or require() statement.
//  B (The process Object): The process object is a true global that provides information about, and control over, the current Node.js process.
//  C (The console Object): The console object is a true global used for printing to the standard output (stdout) and standard error (stderr), providing a bridge from the program to the terminal.
//  D (The __dirname Variable): __dirname is a module-scoped variable that resolves to the absolute path of the directory containing the currently executing script file.
//  E (The __filename Variable): __filename is a module-scoped variable that resolves to the absolute path of the currently executing script file, including the file's name.
// Proving The Existence of Globals (Claims A, B, C, D, E)

console.log("--- Reading Vitals from the Main Command Tent ---");

console.log(`High Command Location (process.cwd()): ${process.cwd()}`);
// the current working directory
console.log("-------------------------")
console.log(`Current Map Table Sector (__dirname): ${__dirname}`);


console.log("-------------------------");

console.log(`Current Map Document (__filename): ${__filename}`);

//  F (The Critical Distinction): Not all "globals" are truly global. Objects like process and console exist on the global scope. Variables like __dirname, __filename, exports, and require appear global but are specific (Viśeṣa) to each module.



// for entire operation
// [process]{true global-for entire operation}(cwd,argv)
// [Terminal Command: node file.js arg] → process.argv → ['node', 'file.js', 'arg']
//[process] ↔ [The Current Node.js Operation] ⊂ {[argv], [env], [version], (cwd), (exit)}


// [console]{true global-for entire operation}
// console.log("Data") → ["Data" appears in Terminal]
//[console] ↔ [STDOUT/STDERR Interface] ⇒ (log @ "message") → ["message" @ Terminal]


//[Node.js Runtime] ⇒ (Module Wrap @ [Your Code]) → [function(exports, require, module, __filename, __dirname) { ... }]
// context aware
// [__dirname]{module scoped-context aware}{directory path}
// [/path/to/folder/ ] ← __dirname ← [/path/to/folder/file.js]
//[__filename]{/path/to/your/file.js} ⇒ (Extract Directory Path) → [__dirname]{/path/to/your/}



// [__filename]{module scoped-context aware}{full filepath}
// __filename → [/path/to/folder/file.js]
//[module]{path: '/path/to/your/file.js'} ⇒ [__filename]


// process ↔ [Entire Operation] vs  __dirname ↔ [This Specific File's Containing Folder]