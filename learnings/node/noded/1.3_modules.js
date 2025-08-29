//  A (The Encapsulation Principle): Every file in Node.js is treated as a separate module. The variables, functions, and classes defined in a file are private to that module by default.
//  B (The Module Wrapper): Before a module's code is executed, Node.js wraps it in a function. This function provides five key scope variables: exports, require, module, __filename, and __dirname.
//  C (The Export Mechanism): To make code from one module available to another, it must be explicitly placed on the module.exports object.
//  D (The exports Shortcut): The exports variable is a direct reference (a shortcut) to the initial module.exports object. It is useful for attaching multiple properties, but reassigning it directly (exports = ...) will break the link and will not export anything.
//  E (The Import Mechanism): The require() function is used to import a module. It reads the file, executes its code, and returns the final module.exports object from that module.
//  F (The Caching System): Modules are cached after the first time they are required. Subsequent calls to require() for the same module will retrieve the cached version instead of re-executing the module's code.



//by default[variables,functions]{private- not availabe to others}-----(access)----> error bound to the scope of this module

//Exporting 
// [variables,functions{private-not availabe to others} -----([module.exports] = {[variables,functions};)-->[variables,functions{public- availabe to others}
// [Module{private-not availabe to others} -----([module.exports] = {[variables,functions};)-->[Module{public- availabe to others}


//module wrapper - make export and require global
//[module]{exports, require, module, __filename, and __dirname.}
// WrapperFunction( [exports], [require], [module], ... ) { ... your code is executed inside here ... }


//short cut to export- export.property
// at start <->
// [exports] ---> [ { ... } ] <--- [module.exports]

// using shortcut
// [exports] -->(Karma: add .prop)--> [ { prop: ... } ] <--- [module.exports]

// reassingning
// [exports] ---> [ a_new_object ] [ { ... } ] <--- [module.exports]

// breaks the link. 
////reassigning export- export wont work

//Importing
//require() function - (read the file,excute the code, return module.export)

//require('./target') --> (Find & Execute target.js) --> (Grab its module.exports) --> ✅(Return module)
//caching 
//Modules are cached after the first require call - cached version alone is saved and it is used

//first call
//require('module') --> [Execute Code] --> Return [module.exports] --> (Save to Cache

//require('module') --> ⚡[Read directly from Cache] --> Return [cached module.exports]