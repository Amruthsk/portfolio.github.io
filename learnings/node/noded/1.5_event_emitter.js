//  A (The Core Substance): The EventEmitter is a class that provides a foundational mechanism for objects to implement the observer pattern. It allows an object to "emit" named events that cause registered "listener" functions to be called.
//  B (The Inheritance Relationship - <-->): Many core Node.js objects, such as HTTP servers, streams, and child processes, inherit their event-handling capabilities directly from the EventEmitter class.
//  C (The Registration () - .on): The .on(eventName, listener) method establishes a relationship, registering a listener function to be invoked whenever a specific named event is emitted.
//  D (The Activation () - .emit): The .emit(eventName, ...args) method synchronously calls all listeners registered for the specified event name, in the order they were registered. Any additional arguments are passed to the listeners.
//  E (The Single-Use () - .once): The .once(eventName, listener) method registers a listener that is automatically de-registered after it has been executed one time.
//  F (The De-registration () - .removeListener): The .removeListener(eventName, listener) method removes a specific listener from the call list for a named event.
//  G (The Critical Error Event): If an EventEmitter emits an 'error' event and there is no listener registered for it, the Node.js process will terminate. This is a special, non-negotiable rule of the system.

//An EventEmitter is a substance (A) to which we can register listeners using .on (C).

//[EventEmitter](The Registration () - .on(eventName, listener),The Activation () - .emit(eventName, ...args),The Single-Use () - .once(eventName, listener),The De-registration () - .removeListener(eventName, listener))



//[Emitter] ↔ [Listener] @ {EventName}

//[Emitter] + (.on) → [Emitter ↔ Listener] --(.emit)→ ⇒ [Listener]() --(.removeListener)→ (abscence of ↔)



//creation and registration
//[EventEmitter](.on)

//[EventEmitter]- core
const EventEmitter = require("events");


const commandCenter = new EventEmitter();
//[commandCenter]=[EventEmitter instance]

//listener function
function reconTeamAlpha(location) {
  console.log(
    `Recon Team Alpha reporting: Hostile movement confirmed at ${location}.`
  );
}

//listener function
// [function]{reconTeamAlpha,location, {
//   console.log(
//     `Recon Team Alpha reporting: Hostile movement confirmed at ${location}.`
//   );
// }}


//regestring team [alpha] {codename-event} on [commandcenter] -
//.on(eventName, listener)  invoke listener function when specific eventname emitted
// Registration ()
// [Emitter] ← (.on {event}) ↔ [Listener]
//[commandCenter] ← (.on {'HOSTILE_MOVEMENT'}) ↔ [reconTeamAlpha]
commandCenter.on("HOSTILE_MOVEMENT", reconTeamAlpha);


//[commandCenter]{not listening}[listener function]{HOSTILE_MOVEMENT,not registered}-----(commandCenter.on("HOSTILE_MOVEMENT", reconTeamAlpha);)---->[commandCenter]{listening}<-->[listener function]{HOSTILE_MOVEMENT,registered}

console.log("Recon Team Alpha is registered and listening.");


//The .emit method synchronously calls registered listeners and passes arguments to them.

//activation and data transfer

console.log("Command Center is about to broadcast an intelligence alert...");

//Activation () .emit(eventName, ...args) sync
//[Emitter] @ (.emit {event}) ⇒ [Listener]())
//[commandCenter] @ (.emit {'HOSTILE_MOVEMENT'}) ⇒ [reconTeamAlpha]()
commandCenter.emit("HOSTILE_MOVEMENT", "Grid 85-Charlie");


// [commandCenter]{listening}<-->[listener function]{HOSTILE_MOVEMENT,registered}---------(commandCenter.emit("HOSTILE_MOVEMENT", "Grid 85-Charlie");)----->[commandCenter]{emit}<-->[listener function]{HOSTILE_MOVEMENT,execute the function with the given argument}

console.log("Broadcast complete.");




//new listener
function artilleryBattery(coordinates) {
  console.log(`Artillery firing at ${coordinates}!`);
}

//listener function
// // [function]{artilleryBattery,coordinates,  {
//   console.log(`Artillery firing at ${coordinates}!`);
// }

//Single-Use listener() - .once): The .once(eventName, listener) listen - deregister
// .once method registers a listener that fires only one time.
//[Emitter] ← (.once {event}) ↔ [Listener]
//[Emitter] @ (.emit {event}) ⇒ [Listener]() ⇒ ↮ [Listener]

//[commandCenter] ← (.once {'FIRE_MISSION'}) ↔ [artilleryBattery]

commandCenter.once("FIRE_MISSION", artilleryBattery);

// [commandCenter]{not listening}[listener function]{FIRE_MISSION,not registered}---------(commandCenter.once("FIRE_MISSION", artilleryBattery);)----->[commandCenter]{listening & only 1 emit}<-->[listener function]{FIRE_MISSION,registered} once (emit) [listener function]{FIRE_MISSION,deregistered}
console.log("\nBroadcasting FIRE_MISSION alert twice...");

//first emit works
// [commandCenter] @ (.emit {'FIRE_MISSION'}) ⇒ [artilleryBattery]() ⇒ ↮ [artilleryBattery
commandCenter.emit("FIRE_MISSION", "Target Zone Delta");

//second emit do nothing for artillery
commandCenter.emit("FIRE_MISSION", "Target Zone Echo");
console.log("Fire missions complete.");


//Explicit De-registration)

// .removeListener method explicitly removes a listener.
//  (The De-registration () - .removeListener): The .removeListener(eventName, listener) method removes a specific listener from the call list for a named event.

console.log("\nRecon Team Alpha is being reassigned. Unsubscribing...");
//dergistred
//[Emitter] ← (.removeListener {event}) ↮ [Listener]
//[commandCenter] ← (.removeListener {'HOSTILE_MOVEMENT'}) ↮ [reconTeamAlpha]
commandCenter.removeListener("HOSTILE_MOVEMENT", reconTeamAlpha);
// [commandCenter]{listening}<-->[listener function]{HOSTILE_MOVEMENT,registered}--------------(commandCenter.removeListener("HOSTILE_MOVEMENT", reconTeamAlpha);)---->[commandCenter]{no emit}<-->[listener function]{HOSTILE_MOVEMENT,de registered}


console.log("Broadcasting another HOSTILE_MOVEMENT alert...");

//emit wont work 
commandCenter.emit("HOSTILE_MOVEMENT", "Grid 99-Zulu");
console.log("Broadcast complete. No teams reported in.");


//The Critical Error Event
//An unhandled 'error' event will crash the Node.js process.

function crisisResponseTeam(error) {
  console.error("\nCRISIS RESPONSE TEAM ACTIVATED!");
  console.error(`Received unhandled error: ${error.message}`);
  console.log(
    "The error has been handled. The system will remain operational."
  );
}

// // function
// // // [function]{crisisResponseTeam,error,  {
//   console.error("\nCRISIS RESPONSE TEAM ACTIVATED!");
//   console.error(`Received unhandled error: ${error.message}`);
//   console.log(
//     "The error has been handled. The system will remain operational."
//   );
// }

//registering crisisResponseTeam on error event
//[commandCenter] ← (.on {'error'}) ↔ [crisisResponseTeam]
commandCenter.on("error", crisisResponseTeam);
//[commandCenter]{not listening}[crisisResponseTeam listener function]{error,not registered}-----(commandCenter.on("error", crisisResponseTeam);)---->[commandCenter]{listening}<-->[crisisResponseTeam listener function]{error,HOSTILE_MOVEMENT,registered}

console.log("\nSimulating a critical system failure...");

commandCenter.emit("error", new Error("Sensor network offline!"));
console.log("Crisis handled.");