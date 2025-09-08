//[Module's Public Interface]→(import)→[Local Scope]


import{ createMissionPlanner } from "./1.3_export.js";


try {
  console.log(commandSecret);
} catch (e) {
  console.log("Direct access to commandSecret: FAILED. Scope is secure.");
}

    const agentCharlie = createMissionPlanner("Charlie Sector");
    agentCharlie();