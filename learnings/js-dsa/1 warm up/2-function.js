//function declaration
function printHelloWorld() {
  console.log("Hello world");
}

//[label:motor]---->[function|{[printHelloWorld],length(),code:(set of instruction)}]
//[[Function Class]] ⊃ *printHelloWorld* ⇔ {length:0,code: (console.log)} → [label:printHelloWorld]


//function call
printHelloWorld();// Hello world
//(function invokation)@[printHelloWorld] → console.log("Hello world")

function greet(name) {
  console.log("Hello " + name);
}

//[label:greet]---->[function|{[greet],length:1{name},code:(set of instruction)}]
//[[Function Class]] ⊃ *greet* ⇔ {length:1 (name),code: (console.log("Hello " + name))} → [label:greet]

let x = "MSD";

//let x ----> [string]{MSD}
//[variable:x] ⊂ [String]{"MSD"}

// function call - reusing function
greet("Amruth sk");// Hello Amruth sk
//(function invokation) @ [*greet*]{"Amruth sk"} → console.log("Hello Amruth sk")

greet("Vikram sk");// Hello Vikram sk

greet(x);
//(function invokation) @ [*greet*]{[variable:x]} → console.log("Hello MSD")

function sum(a, b) {
  let sum = a + b;
  console.log(sum);
}

//[[Function Class]] ⊃ *sum* ⇔ {length:2 (a,b),code: (let sum = a + b; console.log(sum))} → [label:sum]
sum(7, 2);//9
//(function invokation) @ [*sum*]{7, 2} → [sumResult:9] → console.log(9)

sum(1, 2);//3

// Square of a number
function square(x){
  let square = x * x;
  return square;
}

//[[Function Class]] ⊃ *square* ⇔ {length:1 (x),code: (let square = x * x; return square)} → [label:square]
let value = square(5);
//(function invokation) @ [*square*]{5} → [return:25] ⇒ [variable:value] ⊂ [Number]{25}
console.log(value);// 25

//if-else
//create a function which accepts age and tells wheather person is eligible to vote or not

function voteeligibilty(age) {
  if (age > 18) console.log("eligible");
  else console.log("not eligible");
}
//[[Function Class]] ⊃ *voteeligibilty* ⇔ {length:1 (age),code: (if/else console.log)} → [label:voteeligibilty]
//[age]{X} → (check eligibility) ∵ {X > 18} → "eligible" [else] → "not eligible"


voteeligibilty(9);
voteeligibilty(18);
voteeligibilty(19);
voteeligibilty(90);

function eligibilty(age) {
  if (age < 0) console.log("Invalid Input");
  else if (age <= 18) console.log("not Eligible");
  else console.log("Eligible");
}

//[[Function Class]] ⊃ *eligibilty* ⇔ {length:1 (age),code: (if/else if/else console.log)} → [label:eligibilty]
//[age]{X} → (check eligibility) ∵ {X < 0} → "Invalid Input" [[else if]] {X <= 18} → "not Eligible" [[else]] → "Eligible"

eligibilty(-0);//Invalid Inpu
eligibilty(9);//not Eligible
eligibilty(18);//not Eligible
eligibilty(19);// Eligible
eligibilty(90);// Eligible
eligibilty(-5);//Invalid Input
eligibilty(null);//not Eligible