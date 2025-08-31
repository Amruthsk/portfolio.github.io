//  A (The Core Duality): The fs module provides two ways to perform nearly every action: an asynchronous (non-blocking) form and a synchronous (blocking) form.
//  B (Asynchronous ()): Asynchronous methods take a callback function as their last argument, which is executed upon completion. They do not stop the execution of subsequent code.
//  C (Synchronous ()): Synchronous methods have names ending in Sync (e.g., readFileSync). They block the execution of all other code until they complete and either return a value or throw an error.
//  D (writeFile ()): The fs.writeFile() (asynchronous) and fs.writeFileSync() (synchronous) actions are used to create a new file and write data to it. If the file already exists, it is overwritten.
//  E (readFile ()): The fs.readFile() (asynchronous) and fs.readFileSync() (synchronous) actions are used to perceive the contents of a file. By default, they return the data as a raw Buffer Dravya.
//  F ({Encoding} {}): To perceive file contents as human-readable text, an {encoding} {} (like 'utf8') must be provided to the readFile or readFileSync action.
//  G (exists () - Deprecated but Illustrative): While deprecated, the historical pattern of fs.exists() demonstrates checking for the existence of a file path. The modern approach uses fs.access() or fs.stat(). For this lesson, we will focus on the simple concept of checking for presence.
//  H (unlink ()): The fs.unlink() (asynchronous) and fs.unlinkSync() (synchronous) actions cause the permanent absence ) of a file.

//[Execution Thread] → (SyncAction @ {Inputs}) ⇒ |BLOCKS| → [Result]

//[Execution Thread] → (fs.writeFileSync @ {path, data}) ⇒ |BLOCKS| → [File on Disk]
//[Execution Thread] → (fs.readFileSync @ {path, 'utf8'}) ⇒ |BLOCKS| → [String Data]
//[Execution Thread] → (fs.unlinkSync @ {path}) ⇒ |BLOCKS| → [Absence of File]


//  fs.writeFileSync() blocks execution to create a file, a
//  fs.readFileSync() blocks execution to read it, requiring an {{encoding}} {} for text.


//{Synchronous}{exact order,strict, blocking sequence,block all}
//[fs]
//('require' @ {path: 'fs'}) ⇒ [const fs] { All file system }
const fs = require("fs");

// --- Synchronous Operation: The Direct Radio Line ---'
// [Execution Flow] → (Perform Synchronous ) ⇒ |BLOCK-freeze| → [Result]


console.log(
  "Commander: Issue order to create intel file. All operations halt."
);

//action of creation
//[fs] @ (writeFileSync {path: './intel-report.txt', data: 'Asset...'}) ⇒ [File] {path: './intel...', content: 'Asset...'}
//[Execution Flow] → (fs.writeFileSync @ {path, data}) ⇒ |BLOCK| → [File  @ Disk]
fs.writeFileSync("./intel-report.txt", "Asset in position.");


//action of perception
//[Execution Flow] → (fs.readFileSync @ {path, encoding}) ⇒ |BLOCK| → [Report] {String content}
// [fs] @ (readFileSync {path: './intel...', encoding: 'utf8'}) → [const report] { 'Asset in position.'}
const report = fs.readFileSync("./intel-report.txt", "utf8");

console.log(`Commander: Received report via direct line: "${report}"`);
console.log("--- Synchronous operation complete. ---");

