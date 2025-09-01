console.log(process.cwd());
console.log("Commander: Mission initiated. Reporting status and terminating.");

process.exit(0);

console.log("This message should never appear.");


//(Perceive) @ [process] → [env] ⊂ {all qualities...}
//(Perceive) @ [env] → {API_KEY}
//[process]{env,port}
//(Set port) @ [env] ⇒ [env] ⊂ {..., SERVER_PORT: 8080}
// (PerceiveType) @ [env]→{SERVER_PORT}

//(Change{}) @ [env]→{API_KEY} ⇒ [env]→{API_KEY: "new-secret"}


//(cwd) @ [Process] → {current working directory string}


// (CauseAbsence) @ [env]→{SERVER_PORT}


//exit) @ [Process] ⇒ absence([Process]) ⊂ {below code wont work}


//[Client] ⇒ (Request) → [Server] @ (Request) ⇒ (Response) → [Client]


//Asynchronous;
//[Main Thread] ⇒ (Start I/O ) → [External System-libuv] ; [Main Thread] → (Execute Next  Immediately)
//The Return Journey (The Callback):
//[External System] @ ( Complete) ⇒ (Callback) → [Event Queue] → [Event Loop] → [Main Thread]