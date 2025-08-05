//different way of creating string
let x = "abc"; // string literal
let y = "abc";
console.log(x == y);

let z = String("abc");
//The action of instantiating from a class
let a = new String("abc"); //string object

console.log(z); // abc
console.log(a); //[String: 'abc']- object
console.log(typeof a); //object
console.log(typeof x); //string
console.log(typeof z); //string

console.log("double equal to: Abstract equality ");
//type changed/converted - conversion happens
console.log(a == z); //true
console.log(a == x); //true
console.log(z == x); //true

console.log("Triple equal to: Strictly equality");
//type not changed - no vonversion
console.log(a === z); //false
console.log(a === x); //false
console.log(z === x); //true
