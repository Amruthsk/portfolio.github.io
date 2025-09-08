
const commandSecret = "Code word is ALPHA";

function createMissionPlanner(missionTarget) {
   const missionIntel = `Briefing: Neutralize target at ${missionTarget}.`;
   return function briefAgent() {
     console.log(missionIntel);
     console.log(`Authentication: ${commandSecret}`);
   };
 }


//[Module Scope] → (export) → [Public Interface]
 export { createMissionPlanner };