// recursion 101
//function calls itself to solve smaller version of the same problem
//f(){
//
//f(){
//}
//}

// 2 parts of recursion
// Base case : - stop condition when to stop calling itself(other wise - infinte loop)

//recursive case: part where function call itself

// real life example

//1- Queue of people -
// [start ---------(how many people are there after you)------------>end] end- base case
//[start <---------(gives the number)------------<end]

// Comment threads - reddit
// nested comments

// Organisational Hierarchies
// similar to queue  asking how many are reporting each person

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

// importand need of base case
function fun(num) {
  if (num == 0) return; // base case
  console.log(`call of code last of ${num}th time : ${num}`);
  num -= 1;
  fun(num);
}

a = 5;
fun(a);

// Print n to 1 using recursion

function print(n) {
  if (n < 1) {
    return;
  } // base case last
  console.log(n);
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
  x = x + 1;
  print1(x);

}

print1(1);
// 

//common mistakes
//1) Missing base case - stack overflow
//2) simplify input - never reaches base case
//3)too deep recursion  - large inputs
//4) keep in mind Time complexity- O(n) //r to for loop

// when to use recursion
//1) problem can be broken into sub problem
//2) Trees & graphs
//3)backtracking,DP,divide and conquer