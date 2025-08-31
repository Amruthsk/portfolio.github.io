//[Operating System] ⇒ (Enforces) @ [File] ↔ {Permissions: r,w,x for U,G,O}
//(require @ {path: 'fs'}) →  [fs_module {statSync, chmodSync...}]

const fs = require("fs");

//[fs_module].(statSync @ {path: 'mission-brief.js'}) → [stats_object { mode, size...}]
const stats = fs.statSync("mission-brief.js");
//(make_visible @ [stats_object].{mode}) ⇒ {Visible_Output}
console.log(`Perceived Mode: ${stats.mode.toString(8)}`);


const targetFile = "mission-brief.js";

//[fs_module].(chmodSync @ [targetFile], {new_mode: 0o755}) ⇒ [targetFile] ↔ {Updated Permissions}
fs.chmodSync(targetFile, 0o755);

const stats2 = fs.statSync(targetFile);
console.log(`New Perceived Mode: ${stats2.mode.toString(8)}`);


