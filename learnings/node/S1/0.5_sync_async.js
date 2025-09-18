
const crypto = require("crypto")

console.log('hello')
//sync - no callback - bolcks the main thread
// (Execute) @ [pbkdf2Sync] ⇒ [Call Stack] {Occupied} ⇒ [Main Thread] {Blocked}

crypto.pbkdf2Sync("password","salt",50000,50,"sha512");
console.log("sync First key is generated");

//password base key deravtive function
//async function
// (Execute) @ [pbkdf2] ⇒ (Delegate) @ [Task] / [libuv Thread Pool] ⇒ [Call Stack] {Free} ⇒ [Main Thread] {Unblocked}

crypto.pbkdf2("password","salt",50000,50,"sha512",(err,key)=>{
    console.log("async key generated")
})


setTimeout(()=>{console.log("after 3 sec")},3000)//3 s

setTimeout(()=>{console.log("immediately after callstack is empty")},0)//0 ms - assoon as possible once [callstack] task empty as soon as main thread available

