// bulit in function
// alert-  messages - with ok
var s1 = "Java script";
var s2 = "is easy";
alert(s1 + " " + s2);

// //confirm -message to enter/operation - with ok + cancel 2 button
confirm(s1 + " " + s2);

// prompt - input from the user
var fn = prompt(`Enter the first name`);
var ln = prompt(`Enter the second name`);

console.log(fn + ln);

var a = prompt(`Enter the first number`);
var b = prompt(`Enter the second number`);

// //default string format
console.log(a + b);

// parseint

var a = parseInt(prompt(`Enter the first number`));
var b = parseInt(prompt(`Enter the second number`));

//default string format
console.log(a + b);

//parsefloat
var a = parseFloat(prompt(`Enter the first number`));
var b = parseFloat(prompt(`Enter the second number`));

//default string format
console.log(a + b);
sqrt;
var a = parseFloat(prompt(`Enter the first number`));
var res = Math.sqrt(a);

console.log(res);

//user defined function
//function declaration -need to be invoked
var a;
var b;
function display(a, b) {
  console.log(a + b);
}

display(1, 9);

//f()explression - need to be invoked
var display = function () {
  var a = parseInt(prompt(`enter the number`));
  console.log(a);
};
display();

var a;
var b;
function display(a, b) {
  return a + b;
}

var add = display(1, 9);
console.log(add);

//anonymus f()
// function(){};
//arrow f()-need to be invoked important

var a;
var b;
var display = (a, b) => {
  return a / b;
};
var res = display(200, 2);
console.log(res);

// anonymous arrow f()-need to be invoked important
(() => {
  alert(`this is anonymous function`);
})(); //function inovokation of anonymous f9
