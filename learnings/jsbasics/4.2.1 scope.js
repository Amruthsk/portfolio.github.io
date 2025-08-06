//Basics of js

//file-contains code - program
//run
//run program - inside Ram
//-> Process - program in running state
//software (program)run - process - ram allocates(memory-storage area)

var n = 2;

function square(num) {
  var ans = num * num;
  return ans;
}
console.log(square(n)); // Prints 4
var square4 = square(4); // Prints 16
console.log(square4); // Prints 16

//1st global execution context
//memeory creation phase 1: allocate space to variables and functions
// n:undefined
//square :{whole code}
//square4: undefined

//code execution component phase 2:
//2 n:undefined --> 2
//6 function invocation ---->new execution context(like mini program) conserned about function only
//p1 memorycreation: num: undefined, ans:undefined
//p2 code execution:
// 2 n(argument)passed to num(parameter) |num : 2
// 3 ans = 2* 2 | ans:4
//4 return kw return the value of ans to the place of function invoction to line 6 delete nec|square(n): 4

// return kw - task of func is over return to the place of fun invocation
//7 code execution
//p1 memorycreation: num: undefined, ans:undefined
//p2 code execution:
// 2 4(argument)passed to num(parameter) |num : 4
// 3 ans = 4*4 | ans:16
//4 return kw return the value of ans to the place of function invoction to line 7 delete nec|square(4): 16

let productPrice = 150000;

let productDiscount = 15;

let productionName = "Apple Iphone 11 pro";

let isAvailable = true;

let minusZero = -0;

console.log(minusZero);

let t;

console.log(t);

let c = null;
console.log(c);

let veryBigNumber = 7894545487877979797979797979799797979798656565;
console.log(veryBigNumber);

let veryBigInt = 789454548787797979797979797979979797979865656n;
console.log(veryBigInt);
//scope - visibility- where to look  for things

// visibility of variables and functions

//any variable or function inside code will be used in one of the following 2 ways
//1) get value or  some value assigned to it
//2) some value will be tetrieved from it

//js compiled? or interpretted?
//compiled - C, C++ - Read once and executed
//read all code at once - throws error - recomplie - check - no error execute
//interpreter - executed line by line
//  read code one by one line - error - stop - dont move forward - shell
//hybrid - java

//java script - hybrid - compiled and interpretted - read 1st & throws error & not puerely compiled & not puerly interpreted
// it has 2 phase
//phase 1 - parsing
//phase 2 - execution

//Parsing - scope resolution - variable & fuction - assign particular scope
// 3 types of scope 1)global 2)function 3) block
//1)global - acessible everywhere - range of visibility
//2)function - within whole function- range of visibility
//3)block - available only within block only for let and var (not for var)

//1)global - acessible everywhere
console.log(subject); // -not avaiable before intialization /decralarion - let
//for let - error
//for var - undefined
//let subject = "js" //global - acessible everywhere
var subject = "js"; //global - acessible everywhere even
function fun() {
  console.log(subject); //global - within
}

fun();
console.log(subject); //global - acessible outside

// function - creates a scope


//var - function or global scope only - no block or module scoping
//var supports hoisting


//Declaration Grammar - keywords - own purpose/speacial meaning, usecase - cant be used as variable

// few are let,const,for,if,else,return

//n:store values inside a program
//variables- memory buckets that stores values & has name & 

//let & const declarations are hoisted and are in TDZ

//console.log(b);//undefined - global space
//console.log(c);//reference error not defined - access to global space
//console.log(a);//reference error access var in tdz - diff mem space
//console.log(pi);//reference error access var in tdz
let a = 100;
var b = 1000;
const pi = 3.14;

//let a = 200;//---(redeclaration)---syntax error
//const pi = 3.145;//---(redeclaration)---syntax error
var b = 300;//can be redeclared
//var a = 4;// ---(redeclaration)--syntax error

//syntax error due to redeclaration
// const b;
// b = 5;
 

//type error - assignment to const variable
// const c = 100;
// c = 6;



// function start(){
//     for(let i=0; i < 5; i++){
//         console.log(i);//local->block
//     }
//     console.log(i);// i not defined outside the block
// }

// start();
// Es6 : let,const => block -scoped - only inside block

function stop() {
  for (var i = 0; i < 5; i++) {
    console.log(i); //local
  }
  console.log(i); //i accesible
}
// var => function-scoped anywhere in function--attached to window object
stop();

// semicolon => instruction => statement -*E;

//variable names  -  Rules 
//1) variables can contain small alphabets, capital alphabets, 
// digits,underscore(_) or dollor$

//2) cannot have space or any other special character

//3) Meaningfull names so that reader can identify names properly

//4) No digit start



// //global
// function a() {
//   console.log(b); // can access b inside a?--LEC --> GEC find b value
// }
// var b = 10;// global

// a();

function e() {
  //global
  var d = 10000; //local
  c(); //local
  function c() {
    console.log(d);
  }
}

e();
// console.log(d); // uncaught error

const message = "hi"; // script
console.log(message);

{
  const a = "hey"; // block-let, const accessible inside
  console.log(a);
}

//console.log(a);// block not accesible outside-not defined

const color = "red"; //script

function start() {
  const a = "hey"; // local-let, const accessible inside
  console.log(a);
  const color = "blue"; //local
  console.log(color);
}

if (true) {
  const a = "by"; // block-let, const accessible inside
  console.log(a);
  console.log(color); //script
}

for (let i = 0; i < 5; i++) {
  const a = "bh"; // block-let const accessible inside
  console.log(a); //block accessible within block
}

function stop() {
  const b = "bye"; // block-let const accessible inside
  console.log(b);
}

start();
