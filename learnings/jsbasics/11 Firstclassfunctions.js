a(); //function statment
//b(); //  function expression  hoisted-undefined var - type error, let - reference error


//Function Statement aka //Function Declaration
function a(){
    console.log('a called')
}

a();
//Function Expression acts like a value can be assigned

var b = function(){
    console.log('b called')
}

b();
// major difference btw f() statement & f() expression-- hoisting


//Anonymous Function - NO NAME - SYNTAX ERROR  USED in place where f() are used as values
// function(){

// }// function statement requires function name


//Named Function Expression- 2 names
var c = function xyz() {
  console.log("c called");
  console.log(xyz); // can access inside
};

c();

//special case
//xyz();//reference error-if tried to access outer reference error  not in global scope

//Difference between parameters & arguments
//parameter - identifiers , labels,local variable in the fuchtion cant be accessed outside get those values
var d = function (para1,para2) { // local variable inside the function
  console.log("d called");
  console.log('a'); // can access inside
};


//argument-value passed inside function
d(1, 2); // values passed inside the function 

//first class functions  aka first class citizens ability to use f() as 
// value,as arguments, can also be returned
// functions as arguments
var e = function (para1) { // local variable inside the function
  console.log("e called");
  console.log(para1); // can access inside
};

function xyz(){

}

//argument-valuef() passed inside function
e(function(){

});

e(xyz);

//return f()

var f = function(para){
  console.log('fcalled');
  return function(){
    console.log('returned function')
  }
};

console.log(f())
//can pass f() as arguments - passing another function inside another function
//return a f() from a f()

//arrow functions -ES6

