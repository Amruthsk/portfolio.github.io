// Module System()
// require() (to import) and module.exports (to export)


//  A (The Core Transaction): The require() function reads and executes a JavaScript file, and returns the final value of that file's module.exports object.
//  B (The Export Vehicle): Every Node.js file (module) has its own module object, which has an exports property. This module.exports object is the only thing that require() will ever return. By default, it is an empty object.
//  C (The Alias): Within a module, a variable named exports exists as a convenient, shorthand reference that points to the same object as module.exports initially.
//  D (The Broken Link): If you reassign module.exports to a new object or function (module.exports = ...), the original connection to the exports alias is broken. The exports variable still points to the old, now irrelevant, empty object.
//  E (The Wrapper): Before execution, Node.js wraps the entire code of every module in a function, known as the Module Wrapper Function.
//  F (The Injected Parameters): The Module Wrapper Function provides five parameters that appear as global-like variables within the module: (exports, require, module, __filename, __dirname). This is why we can use these variables without defining them.
//  G (The Cache): Modules are cached after the first time they are loaded. Subsequent calls to require() with the same module identifier will load the module from the cache, rather than re-executing the file.


//('require' @ {path: '"./units/specialist.js"'}) ⇒ [const "./units/specialist.js"] { All "./units/specialist.js" system - deploy}

// (Node.js Runtime) ⇒ (function(exports, require, module, __filename, __dirname) { [Your Code] })
//[module]{exports={deploy,function()}, require, module, __filename, and __dirname.}
// ignores deploy
//[module]{exports={deploy,function()}, require, module, __filename, and __dirname.}
// [exports] ---> [ { ... } ] <--- [module.exports]
// [exports] ---> [ mission ] [ { function() } ] <--- [module.exports]
//[module]{exports={function()}, require, module, __filename, and __dirname.}

//first call

//require('module') --> [Execute Code] --> Return [module.exports] --> (Save to Cache
//require('module') --> ⚡[Read directly from Cache] --> Return [cached module.exports]



// (require @ 'path') → (Execute File Code) → Returns [module.exports] → (Saves result to [Cache])
//  (require @ 'path') → ⚡ @ [Cache] → Returns [cached module.exports]

//async
// [Call Stack] → (Karma: fs.readFile) ⇒ {Callback} is registered & [Task] is given to [libuv Worker]
// [Call Stack] is now EMPTY & continues other work ... ⏳ ... [libuv Worker] is bus
// [libuv Worker] → (Task Complete) ⇒ {Callback} is placed in [Callback Queue]
// [Call Stack is Empty]❓ ⇒ [Event Loop] → (Moves {Callback}) → [Places on Call Stack for Execution]

// http server client
// (http.createServer @ {request handler fn}) → [Server] → ([Server].listen @ {port}) ⇒ [Active Server 👂]
// [Client] → (Request) → [Active Server 👂] ⇒ (Triggers {handler fn} @ {req, res}) → (Karma @ [res]) → (Response) → [Client]