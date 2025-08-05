//function declaration
function printHelloWorld() {
  console.log("Hello world");
}

//function call
printHelloWorld();// Hello world


function greet(name) {
  console.log("Hello " + name);
}

let x = "MSD";

// function call - reusing function
greet("Amruth sk");// Hello Amruth sk

greet("Vikram sk");// Hello Vikram sk

greet(x);

function sum(a, b) {
  let sum = a + b;
  console.log(sum);
}

sum(7, 2);//9

sum(1, 2);//3

// Square of a number
function square(x){
  let square = x * x;
  return square;
}
let value = square(5);
console.log(value);// 25

//if-else
//create a function which accepts age and tells wheather person is eligible to vote or not

function voteeligibilty(age) {
  if (age > 18) console.log("eligible");
  else console.log("not eligible");
}

voteeligibilty(9);
voteeligibilty(18);
voteeligibilty(19);
voteeligibilty(90);

function eligibilty(age) {
  if (age < 0) console.log("Invalid Input");
  else if (age <= 18) console.log("not Eligible");
  else console.log("Eligible");
}

eligibilty(-0);//Invalid Inpu
eligibilty(9);//not Eligible
eligibilty(18);//not Eligible
eligibilty(19);// Eligible
eligibilty(90);// Eligible