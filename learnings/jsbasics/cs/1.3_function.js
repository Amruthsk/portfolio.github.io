//  The [Function] & The Closure<-> [function]

//  [Outer Function Executes] → Returns [Inner Function] ⇒ ( Closure) → [Inner Function Remembers Outer Scope]

//  Function as a First-Class Citizen
//  [function]{firstclass citizen-assigned,passed,returned}{closure}

//[variable] ← (function_definition) | (call_another_func @ *[this_func]) | *[new_func] ← (return @ *[this_func])


//closure
//[Inner Function] ↔ {[Lexical Environment of Outer Function]}
//(Execute Outer Func) → *[Inner Func Returned] ⇒ [Closure Created & Sealed]
//  [closure]<->[function]<-> {lexical environment}- can access variable outer ScriptProcessorNode

//{Scope Chain} ⇐ {Physical Location  in Code}
//  {function scope} [lexical scoping]{physical location}


// [module]{private scope} ⊃ {[Internal ]}
// [module[variable,function,classes]]{private scope & [? global visibility]}
// [module[variable,function,classes]]{private scope --> global scope}---------(export)--------->[module(import)]{global scope----->private scope}
//(export) @ [Internal Dravya] → [Public Interface] → (import) @ [Public Interface] → [Local Dravya]
// [SOC Base] → [Planner gathers Intel] → Deploys [Agent + Sealed Briefcase]

//[agentHandler]--->[function]{greetAgent,length,code:()}
//[agentHandler]{first clas citixen}
let agentHandler = function greetAgent() {
  console.log("Agent ready for briefing.");
};

console.log("Type of agentHandler is:", typeof agentHandler);

//(call)@[agentHandler]
agentHandler();


//[createMissionPlanner]--->[function]{createMissionPlanner,length:1,}
//[createMissionPlanner]{factory for creating other functions}
function createMissionPlanner(missionTarget) {
  const missionIntel = `Briefing: Neutralize target at ${missionTarget}`;

  //[briefAgent]-------->[function]{briefAgent,length,code()}
  //(createMissionPlanner executes) → *[briefAgent returned] ⇒ [Closure Created & Sealed]

  //[briefAgent]{closure <-> outer scope missionIntel}
  //[Inner Function] ⇔ (Closure) ⇔ [Outer Scope: missionIntel]
  //[briefAgent] ↔ {[missionIntel]}
  return function briefAgent() {
    console.log(missionIntel);
  };
}

//new function
////[agentAlpha]--->[function]{createMissionPlanner,length:1,code:()}

const agentAlpha = createMissionPlanner("Alpha Base");

//new function
////[agentBravo]--->[function]{createMissionPlanner,length:1,code:()}

const agentBravo = createMissionPlanner("Bravo Command Post");

console.log(
  "Mission planners have finished. Briefings are sealed. Now dispatching agents."
);

//(call)@[agentAlpha]
agentAlpha();

//(call)@[agentBravo]
agentBravo();
