// recursion 101
//function calls itself to solve smaller version of the same problem
//f(){
//
//f(){
//}
//}

// 2 parts of recursion
// Base case : - stop condition when to stop calling itself(other wise - infinte loop)- most impartant part - base case


//recursive case: part where function call itself

// real life example
// example-1
//1- Queue of people -
// [start ---------(how many people are there after you- till the end of the queue)------------>end] end- base case - last person (0)- person
//[start <---------(gives the number)------------<end] 13<-12-11-10-9-8-7-6-5-4-3<-2<-1<-0
// not a pratical way to ask in realtime

//example-2
// Comment threads @  [reddit]
// nested comments

//example - 3
// [Organisational Hierarchies] - how many people are there in organizational heirarchy

// similar to queue  asking how many are reporting each person

// f(){} f() - normal
// f(){f()} f() - infinite loop
// Recursive case
function fun1() {
  console.log("its easy");
  fun1();
}
// infinite loop

//recursion and callstack
function fun2(num) {
  console.log(`call of code ${num}th time : ${num}`);
  num -= 1;
  fun2(num);
}

a = 5;
//fun2(a);
// infinit loop endless recursion starts with 5 ends -10,342

// infinite loop cause ----> stack overflow

//base condition - end condtion when to end
// always make sure write base case at the top
// importand need of base case
function fun(num) {
  if (num == 0) return; // base case
  console.log(`call of code last of ${num}th time : ${num}`);
  num -= 1;
  fun(num);
}

a = 5;
fun(a);

//callstack
// f(5) - > execute line by line  -> recursion -> push up the call stack  keeps on going - => leads to stack overflow(over the capacity of call stack,browser) -> freeze
// with base condition -> loop stops

// Print n to 1 using recursion
// internalising pattern
function print(n) {
  if (n < 1) {
    return;
  } // base case last
  console.log(n);
  // //print(--n) change on the fly
  n -= 1;
  print(n);
}

//print(10);

// Print 1 to n using recursion
let n = 6
function print1(x) {
  if (x > n) {
    return;
  } // base case last
  console.log(x);
  //print(++x)
  x = x + 1;
  print1(x);

}

print1(1);
// 

//common mistakes
//1) Missing base case - stack overflow
//2) simplify input - never reaches base case
//3) too deep recursion  - large inputs
//4) keep in mind Time complexity- O(n) //r to for loop

// when to use recursion
//1) problem can be broken into sub problem - whenever reduce the sample space 
//2) Trees & graphs
//3)backtracking,DP,divide and conquer


//reversing the flow

function print1toN(x) {
  if (x => 1) {
    return;
  } // base case last
  console.log(x);
  
  
  print1toN(x - 1);
}

print1toN(9);