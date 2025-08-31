
//[JS Engine] ⇒ (AsyncAction @ [Target] {params}) → [Node.js Backend (libuv)]

//[Node.js Backend] → [Event Queue] → [Event Loop] ⇒ ([Callback Fn] @ {err?, [result?]}) → [Final Effect]


//(require @ {path: 'fs'}) → [ fs module]{writeFile,readFile}

//[fs]{non blocking}

//fs.mkdir(path, [options], callback) -> [new directory]

//[Main Thread] -DISPATCH→ (writeFile @ [File] {data, callback}) ⇒ |NON-BLOCK| order to libuv
//[Event Loop] ↩ (CallbackFn @ {err}) → (console.log) ⇒ [Effect: Output to Terminal]

//fs.writeFile(file, data, [options], callback) ---> [file]{write data}

//[Main Thread] -DISPATCH→ (readFile @ [File] {callback}) ⇒ |NON-BLOCK|
//[Event Loop] ↩ (CallbackFn @ {err, data}) → (console.log) ⇒ [Effect: Output to Terminal]

//fs.readFile(path, [options], callback)---->{see the [file]}


//[file]-------(fs.unlink([file],{error}))--------> abscence of file



// [JS Engine] ⇒ (fs.mkdir @ {path}) → [libuv] ... ⌛ ... → [Event Loop] ⇒ ([Callback] @ {err?}) → [Effect: New [Directory] @ {path}]

//[JS Engine] ⇒ (fs.writeFile @ [File Path] {data}) → [libuv] ... ⌛ ... → [Event Loop] ⇒ ([Callback] @ {err?}) → [Effect: [File] has new {content}]

//[JS Engine] ⇒ (fs.readFile @ [File Path] {encoding}) → [libuv] ... ⌛ ... → [Event Loop] ⇒ ([Callback] @ {err?, [Data Buffer/String]}) → [Effect: Program now perceives file content]

//[JS Engine] ⇒ (fs.unlink @ [File Path]) → [libuv] ... ⌛ ... → [Event Loop] ⇒ ([Callback] @ {err?}) → [Effect: abscence of [File]]

//(http.createServer @ {[Request Handler Fn]}) → [HTTP Server Object] {listen, on, ...}
//[Server] ⇒ (listen @ {port})) → [OS Network Interface] ... ⌛ ... → [Event Loop] ⇒ ([Listening Callback]) → [Effect: "Server running..."]



//[External Client] ⇒ (HTTP Request) → [OS] → [Event Loop] ⇒ ([Request Handler Fn] @ {[request], [response]}) → (response.end @ {'data'})

//[Your Code: The Cause] ⇒ (The Asynchronous Command) → [The Backend: The Work] → ... ⌛ ... → [Event Loop] ⇒ [Your Callback: The Effect]
