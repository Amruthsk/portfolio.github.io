const f = function fun(){//function expression
    console.log("how much fun??")
}

f(); 
//fun();// error

// why name ? use of name?

//with name - named function - important to write goodnames - 
//without name  - anonymus function

// use case of named function
// 1)readability of code increases
// give a name - so can call recursion


//2) for recursion

//3) console.trace()  - call stack -  any function enters into the callstack
//easy to debug

//use case of iife - naming for small piece of code
(function x() {
  //function expression - (  kw
  //some impl
  console.log("hi i am here")
})("name");// immedietly invoking


function fd(){
    return 1;
}

function g(){
    return 0
}

var k = 8; 
var res = (function evaluate(i){
    console.log(k);
    if(k%2 == 0) return fd();
    else return g();
}
)(20);

console.log(res);
console.log(k);