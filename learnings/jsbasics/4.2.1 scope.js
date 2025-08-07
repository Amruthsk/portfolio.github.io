//Basics of js

//file-contains code - program
//run
//run program - inside Ram
//-> Process - program in running state
//software (program)run - process - ram allocates(memory-storage area)

var n = 2; //1-global

function square(num) {//1-global scope function square
  var ans = num * num; //1- var ans inside function scope
  return ans;
}
console.log(square(n)); // Prints 4
var square4 = square(4); // Prints 16
console.log(square4); // Prints 16

//phase 1 - parsing - look for formal  declaration -let,const,var & scope resoulution
//1st declaration into global scope
//variable declartion - think about the scope
//function declaration - function creates scope of function - assign the variables the  scope of function according to the let,const,var
//function declaration - function creates scope of function - assign the variables the scope of function according to let,const,var

//phase 2 - execution - allocate value for the declared variable
//funciton call(use) - execute - assign
//informal variable  - u see inside the fuction scope dint find go  one scope out and ask for the variable value in global scope
//informal variable  - auto global - assigns the value to global
//informal variable - causes reference error not defiend if used before the phase 2

// autoglobal -informal variable declaratio - automatically becomes auto global - gets the scope of global - this is done in the phase 2 execution part
//access before the execution part - reference error not defined - content not yet prepared
// access after the execution part - autoglobal makes the variable global scope

// this is sloppy mode - --- - different from strict mode
// strict mode - throw errors, can run fast, only supports future ecma scripts

// strict mode for whole file - at start "use strict";
// strict mode for particular function - witin function "use strict"; ... many more

// strict mode wont allow to make a global variable  - throws error
// strict mode - restricted mode to run js  - restrict autoglobal 

//1st global execution context
//memeory creation phase 1: allocate space to variables & their corresponding scope and functions
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
//-----------------------------------------------------------------------------------------
//scope - visibility- where to look  for things- is created by { }

// visibility of variables and functions

//any variable or function inside code will be used in one of the following 2 ways
//1) get value or  some value assigned to it
//2) some value will be retrieved from it

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
// 3 types of scope 1)global 2)function 3) block 4) module(node.js)

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


//var - only available in for function scope or global scope only - no block or module scoping
//var supports hoisting - processecd before execution


//Declaration Grammar - keywords - own purpose/speacial meaning, usecase - cant be used as variable

// few are let,const,for,if,else,return

//n:store values inside a program
//variables- memory buckets that stores values & has name & 

//let - block scoped - only belongs to the block


console.log("block and function scope");
{
  var ab = 10; // still accessible outsid the block(no meaning to block) scope bcoz var-global scope
}
//var supports global & functional - visible outside the block

console.log(ab);//10

if(false){
  var ed = 5;
}

console.log(ed);//undefined

if (true) {
  var ed = 5;
}
console.log(ed);//5

//var supports global & functional - but visible outside the block
 function var1()
{
  console.log(y);// y is accessible here - throughout the function - decided by parsing
  var y = 18; // not accessible outside
}

//console.log(y)// ReferenceError: y is not defined 


//let - block scope -only visible within the block

{
  let gh = 9; // not accessible outside
}

//console.log (gh);//reference error - not defined

 function let1() {
   console.log(y); // y is not accessible here
   let y = 18; // not accessible outside
   console.log(y); // y is  accessible here after it is intialized
 }
//------------------------------------------------------------------------

// p1- object : console p2- execution log
 console.log("hi");
//console..log("hi");//  syntactical error- fails in  p1
//console.lo("hi");// no syntax error use which is not existing p2 - fails in p2

// therefore it has 2 phases

console.log ("nested scope - oneway  inside to outside")
// closures
function fun(){
  //fun ->p1-> global scope
  var x = 10; // x ->p1-> fun scope- p2-10 assign
  function gun() {
    // gun() -> p1 -> fun scope
    var y = 20; // y->p1 -> gun scope p2- 20 assign
    console.log(x); // - go from inside to out - 10
    console.log(y); // within the scope 20
  }
  console.log("first in fun- out");
  //console.log (y)//p1 - error cant see inside from out
  gun();
  console.log("I am out", x);
  //console.log(y); // p-2 error cant see inside from out even after assigned
}

fun(); // invokes p2
//----------------------------------------------------------------

// 2 types of scope
//1) Lexical scope - scoping determined at p1 phase parsing phase - js
//2) dynamic scope - no p1 -scoping determined at p2 phase running phase

// p1- prasing - look for formal declaration and assign the scope
// lexiccal scoping
var teacher = "A"; //p1 teacher -> global scope-p2 -> 1.assign A
function ask(question){//p1 ask -> global scope-p2 ->funciton declaration/ question - why
  console.log(teacher,question);//p2 -> ask teacher value outside in the global - A,question - why
}

function fun() {
  //p1 fun -> global scope - p2 ->funciton declaration
  var teacher = "b"; //p2 teacher->fun scope p2 ->assign b
  ask("why?");//p2 look out
}

fun();//p2 invoked calling 


//---------------------------------------------------------------------
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
