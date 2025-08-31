//[Emitter] ↔ [Listener] @ {EventName}

//[Emitter] + (.on) → [Emitter ↔ Listener] --(.emit)→ ⇒ [Listener]() --(.removeListener)→ (abscence of ↔)


//(require @ {path: 'events'}) → [ events module]{.on,.emit,.once,.removelistener}

////[commandCenter]=[EventEmitter instance]

//.on(eventName, listener) 
// [Emitter] ← (.on {event}) ↔ [Listener]
//[commandCenter]{not listening}[listener function]{HOSTILE_MOVEMENT,not registered}-----(commandCenter.on("HOSTILE_MOVEMENT", reconTeamAlpha);)---->[commandCenter]{listening}<-->[listener function]{HOSTILE_MOVEMENT,registered}
//(.on @ [Emitter]) {eventName, [Listener]} → [Emitter] ↔ [Listener]


//.emit(eventName, ...args)
//[Emitter] @ (.emit {event}) ⇒ [Listener]())
// [commandCenter]{listening}<-->[listener function]{HOSTILE_MOVEMENT,registered}---------(commandCenter.emit("HOSTILE_MOVEMENT", "Grid 85-Charlie");)----->[commandCenter]{emit}<-->[listener function]{HOSTILE_MOVEMENT,execute the function with the given argument}
//(.emit @ [Emitter]) {eventName, ...args} ⇒ ([Listener])()

//.once(eventName, listener)
//[Emitter] ← (.once {event}) ↔ [Listener]
//[Emitter] @ (.emit {event}) ⇒ [Listener]() ⇒ ↮ [Listener]
// [commandCenter]{not listening}[listener function]{FIRE_MISSION,not registered}---------(commandCenter.once("FIRE_MISSION", artilleryBattery);)----->[commandCenter]{listening & only 1 emit}<-->[listener function]{FIRE_MISSION,registered} once (emit) [listener function]{FIRE_MISSION,deregistered}
// (.once @ [Emitter]) {eventName, [Listener]} → [Emitter] ↔ [Listener] { temporary}
// Trigger: (.emit @ [Emitter]) {eventName} ⇒ ([Listener])() → [Emitter] ↮ [Listener]

//.removeListener(eventName, listener)

////[Emitter] ← (.removeListener {event}) ↮ [Listener]
// [commandCenter]{listening}<-->[listener function]{HOSTILE_MOVEMENT,registered}--------------(commandCenter.removeListener("HOSTILE_MOVEMENT", reconTeamAlpha);)---->[commandCenter]{no emit}<-->[listener function]{HOSTILE_MOVEMENT,de registered}
//(.removeListener @ [Emitter]) {eventName, [Listener]} → [Emitter] ↮ [Listener]


//[Client] → (Request {method, path, ...}) → [Server] ⇒ (...) → (Response {statusCode, ...}) → [Client]


// //async
// [Main Thread]: (Initiate Async Op {task, [Callback]}) → [Worker/OS]
// ... [Main Thread]: (Continues Other Work)
// ... [Worker/OS]: (Performs Slow Work) → {result} ⇒ ([Callback])({result}