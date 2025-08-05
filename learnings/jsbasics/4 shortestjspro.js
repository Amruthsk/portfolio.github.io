//windows-global object, this  created along with GEC +global space, 
// this- point to window object created by js engine  this == window

// In browsers - GEC+global object(window)+this+global space--> window in v8 engine
//in Node -  

// global space - variable outside fun, functions  in global space anythin outside function in global space
// variables in global space attached to  global object (window.a)


var a = 10;

function a (){
    var x = 10;
}

console.log(window.a);

console.log(a);// a in globalspace
console.log(this.a); //same space
console.log(this.x);
console.log(x);// is not in global space  so not defined so error