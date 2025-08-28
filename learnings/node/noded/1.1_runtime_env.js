//  A (Core Identity): Node.js is a JavaScript runtime, not a language or a framework.
//The runtime is an executable program (node) that can be invoked from the command line.

// `node --version`
// node executable ] → [is a real, installed program on this system ] ∵ [because it responded to my query with its version number ].

//  E (Executability): The runtime is an executable program (named node) that can be invoked from the command line.

//The node executable, when run without a file, provides an interactive shell (REPL).
// `node`
// [The node environment ] → [has entered an interactive mode ] ∵ [because I perceive the distinct > prompt, which is the sign of the REPL ].

//  B (Underlying Engine): Node.js is built on Chrome's V8 JavaScript engine, which it uses to execute JavaScript code.

//  Node.js uses the V8 engine to execute JavaScript code.

// [This Node.js runtime ] → [is inseparably linked (Samavāya) to the V8 engine ] ∵ [because I can  perceive the V8 engine's version number from within the Node.js process itself ].

//  C (Purpose): Its primary design is for building scalable network applications.
//  D (Operational Model): Node.js operates on an asynchronous, event-driven, non-blocking I/O model.
//  F (Code Execution): The node executable can run JavaScript code  from a file

//The node executable can run JavaScript code  from a file.
console.log("Proof: Code Execution from a File.");
`node 1.1_runtime_env.js`

// [The node executable ] → [can interpret and execute JavaScript files ] ∵ [because I  perceived the output of the console.log command contained within the app.js file ].

// [Runtime Environment] ⊃ [node.exe]


// [node.exe] ∵ [V8 Engine ( for JS Execution)] + [libuv ( for Asynchronous I/O)]

// [node.exe] { has_version, is_interactive_via_REPL } ∵ <-->  [V8 Engine]

// [app.js file] → (node) → [Perceived Output]


// node.exe] -> (h-Operates via Event Loop){: Non-Blocking I/O} → {s: Scalability}
//  v - High Concurrency & Scalability

// [Runtime] ⊃ [node.exe {+V8}] + [app.js] → (Execution) ∵ (Internal Event Loop) → [Output]

// [OS Process] ⊃ ( [node {V8+libuv}] + [script.js] ) → (K Execution) ∵ [h: The Event Loop cycles] → [s: Output]
// [Operating System] ↔️ [process  { .argv, .cwd(), .env}] ↔️ [Your Script]