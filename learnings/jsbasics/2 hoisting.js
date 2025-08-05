

// getName(); // fun executed

// console.log(x);  //undefined bcoz not initialized
// //console.log(y);  //reference error- not defined not assigned
// //console.log(z); // reference error- cant access before initialization
// //console.log(pi);// reference error- cant access before initialization
// console.log(getName);

var x = 7;
let z = 5;
const pi = 3.14;
function getName(){
    console.log('Hi Javascript')
}


getName(); 

console.log(x);

console.log(getName);

console.log(z);

console.log(pi);




console.log(y);  // reference error - not defined