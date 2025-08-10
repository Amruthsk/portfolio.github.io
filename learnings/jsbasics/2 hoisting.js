
//hoisting -  scope resolution
// getName(); // fun executed

// console.log(x);  //undefined bcoz not initialized-var
// //console.log(y);  //reference error- not defined not assigned
// //console.log(z); // reference error- cant access before initialization-let
// //console.log(pi);// reference error- cant access before initialization - const
console.log(getName);//[Function: getName]
//TDZ- Temporal Dead zone --let & const--- period between (reference error to assignment) - scope resolution
// access variable in TDZ -> shows reference error
var x = 7;
let z = 5;
const pi = 3.14;
function getName(){
    console.log('Hi Javascript')
}


getName(); //Hi Javascript

console.log(x); //7

console.log(getName);//[Function: getName]

console.log(z);//5

console.log(pi);//3.14




//console.log(y);  // reference error - not defined