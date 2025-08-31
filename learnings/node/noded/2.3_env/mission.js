//[Client] --(Request {Method, Path, Headers})→ [Server] --(Response {Status, Body})→ [Client]

//[Callback] @ (Async Call) ⇒ [External API (Work is done here)] ⇒ [Callback Queue] --WHEN [Call Stack]{empty}→ [Call Stack]

//[OS Shell] ⊂ {VAR_A, VAR_B} ⇒ (node script.js) ⇒ [Process] ↔ [env] ⊂ {VAR_A, VAR_B}



//(Perceive) @ [process] → [env] ⊂ {all qualities...}
console.log("Initial Mission Briefing (process.env):", process.env);

//(Perceive) @ [env] → {API_KEY}
console.log("Specific Order - API Key:", process.env.API_KEY);

//[process]{env,port}
//(Set port) @ [env] ⇒ [env] ⊂ {..., SERVER_PORT: 8080}
process.env.SERVER_PORT = 8080;

// (PerceiveType) @ [env]→{SERVER_PORT}
console.log(
  "Type of SERVER_PORT after assignment:",
  typeof process.env.SERVER_PORT
);

//(Change{}) @ [env]→{API_KEY} ⇒ [env]→{API_KEY: "new-secret"}
process.env.API_KEY = "new-secret-in-the-field";
delete process.env.SERVER_PORT;
console.log("Updated Mission Briefing:", process.env);

// (CauseAbsence) @ [env]→{SERVER_PORT}
delete process.env.SERVER_PORT;                


// # On Windows (Command Prompt)
// set API_KEY="secret-from-hq" && set api_key="lowercase-secret" && node mission.js

// # On Windows (PowerShell)
// $env:API_KEY="secret-from-hq"; $env:api_key="lowercase-secret"; node mission.js
