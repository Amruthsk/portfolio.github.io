// Function Call ⇒ ( New Execution Context) → { Scope Chain, Variable Env, this Binding }


// (Execution Context( The Global Execution Context (GEC), Function Execution Context (FEC)) ){varibale EncodedVideoChunk,scope chain,this}
// Execution Context
// (Function Invocation) ⇒ [New Function Execution Context]
//(Invoke @ [Function]) ⇒ [New FEC] { [[Scope]] → [Function's Birth EC], [this] ↔ (Call-Site),[Var Env] }
// [Execution Context] ⇔ { [Variable Environment], [[this] ↔ (Call-Site)], [Scope Chain → [Outer EC]] }


// 2 phases - 
// 1. the Creation Phase (where memory is allocated for variables and functions) 
// 2. the Execution Phase (where code is executed line-by-line).
//[FEC Creation] → {[Var Env] ⊂ ([var]↔{undefined}, [let/const]↔{uninit})} → [FEC Execution]

// [Variable]-isLabeledStatement,name
// [Variable Name] ↔ [Memory Address] { Value, Type}
// (let | const | var) ⇒ [Variable] ⊂ [Current EC] { (value | [?])}

// [let,const]{block-scoped,if called before declaration - TDZ}
// [let]{mutable}
// [const]{immutable}

//scope
// [EC or Block] ⊂ {Set of Accessible Variables}

//Lexical Scope 
// [[Scope]] ↔ (Location @ Code Write-Time)


// The System Architecture:
// [JS Engine] ↔ [Call Stack] ↔ [Web API / Node API] ↔ [Callback Queue] ↔ [Event Loop]

// (Execution Context){scope-globalThis,function,block- visibility or accessibility of variables}
// {scope-lexical scope determined based on location}

// [js]{singlethreaded- one command at a time ,Asynchronous behaviour<->web api}

// (Async Action: setTimeout) → [Web API handles timer] → (Callback pushed to Queue) → (Event Loop pushes to Call Stack when empty)

// binding
// [[this]] ↔ (Manner of Function Invocation)
// [this]{how it is called > location, function call <-> this}

// {default binding} non strict fuction call <-> this<->global object, stict functioncall <-> this <-> undefined
// (standaloneFunction()) ⇒ [[this] ↔ [Global Object or undefined]]
//(Invoke @ [Function]) ⇒ { [this] ↔ ([global] | [?]) }

// {implicit binding} method function call <-> this <-> object
// [Object].(method()) ⇒ [[this] ↔ [Object]]

// {scope chain}{search variable - one way - inside out only}
// The Search Path:
// [Current Scope] → [Outer Scope] → [Outer's Outer Scope] → ... → [Global Scope]
//(Reference @ [Variable]) ⇒ [Search Current EC] → [Search Outer EC] → ... → [Search GEC]

// [?]
// undefined - absence of assigned value
//[Variable] { undefined}

// null - absence of value intentionally
// (Assignment ) @ [Variable] → [Variable] {null}


// {hoisting}
//after memory allocation phase
//(Scan Script) ⇒ [var x] {undefined} | [let y],[const] {<uninitialized_in_TDZ>}
// [let,const]{block-scoped,if called before declaration - TDZ} in accessible
// [var]{undefined}


// (Mission Launch) ⇒ [Field HQ] ⊂ {Chain of Command, Roster of Operatives, "Point Man"}

//[Function] ↔ { Code, [[Scope]]→[Birth Lexical Environment] }


let theaterOfWar = "Global Scope";

// let [label:theaterOfWar]{GEC}---->[string]{"Global scope"}


let missionStatusReport;

// let [theaterOfWar]{?}

//(see @ [missionStatusReport]) → { undefined}
console.log(missionStatusReport);

//(Declaration @ GEC) ⇒ [launchOperation] ↔ [Function Object]
// /[launchOperation Function] ↔ { Code, [[Scope]]→[GEC] }

// [[Function class]]⊂[function]{name:launchOperation.length:1(opName),code: ()}
function launchOperation(opName) {
  // [FEC for launchOperation] ⊂ {[opName], [fieldHQ],briefSquad()- closure?}
  // FEC CREATION PHASE for launchOperation:
  // [Var Env] ⊂ { [opName]↔{"VANGUARD"}, [fieldHQ]↔{uninit}, [briefSquad]↔{uninit} }
  //// FEC EXECUTION PHASE:
  // (Assignment) ⇒ [fieldHQ] {"VANGUARD Field HQ"}
  let fieldHQ = `${opName} Field HQ`;
  // [briefSquad Scope] → [launchOperation Scope] → [Global Scope]
  //   [briefSquad Function] ↔ [Lexical Environment of launchOperation]
  // [briefSquad Function] ↔ { Code, [[Scope]]→[EC of launchOperation]
  function briefSquad() {
    console.log(`Briefing in: ${fieldHQ}`); // Accesses outer scope
    console.log(`Reporting to: ${theaterOfWar}`); // Accesses global scope
  }

  briefSquad();
}

// (Invoke 'launchOperation') ⇒ [New FEC is born]
launchOperation("VANGUARD");



const alphaSquad = {
  pointMan: "Sgt. Jaxx",
  intelAsset: null, //explicit abscence
  reportPointMan: function () {
    // This 'if' block creates a new, smaller BLOCK SCOPE.
    if (true) {
      // [label: 'objective']{if scope} ---->[string]{"the bridge"}
      let objective = "The Bridge";
      console.log(`${this.pointMan} is focused on ${objective}.`);
    }
    // console.log(objective); // This would cause a ReferenceError, proving Block Scope.
  },
};

//calling function as a mehtod 
//function called function dot notation on the object - new variable directly pointing to function
// [alphaSquad].(reportPointMan) ⇒ {this ↔ alphaSquad} // acess the variable fromoutside
alphaSquad.reportPointMan(); 


//standalone function 
const rogueSignal = alphaSquad.reportPointMan;

//calling without object context
rogueSignal();// why undefined 

//browser (non stric) - no property value-----(access)-->undefined
//Node or strict mode - this -->default{undefined}---(access)---> type error

console.log(`Intel Asset Status: ${alphaSquad.intelAsset}`);



console.log("Main operation continues...");

//setTimeout{callback,time}
// (Invoke @ setTimeout) ⇒ [Web API] ⊂ { Callback Function, Timer: 0ms }

setTimeout(() => {
    //placed in the callback eueue with the timer
  console.log("...Air support has arrived.");
}, 0);//0,10,20,20000 @ last
// callstack empty -> timer finish->eventloop move it to callstack

console.log("Main operation reaches extraction point.");