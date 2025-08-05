//while loop
console.log("while loop"); //entry control - checks condition until condition is false
let i = 1; //looping variable
//looping variable - used to control the loop

//condition - i <= 10
//inside the while block - console.log(i); i++ until condition is false
while (i <= 10) {
  console.log(i);
  i++;
}
console.log("Loop ended");

console.log("if");
// if condition - if i is less than or equal to 10 then print i - checks condition only once
let p = 1;
if (p <= 10) {
  console.log("i is less than or equal to 10");
}

// print -> sum of all numbers from 1 to n

//problem - program to calculate sum of all number
//approach
//input - 10 output - 55
//n - parameter placeholder
//sum - variable to hold the sum
//sum = 0 - initial value
//loop from 1 to n - i = 1; i <= n; i++
//inside the loop - sum = sum + i
//return sum - return the sum

function sumFromONe(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}

const sumOfNum = sumFromONe(10);
console.log("sum of Number", sumOfNum);

//problem: print the number from 20 to 1 in decreasing order using while loop

//approach
//input - 20 output - 20,19...1
//n - parameter placeholder
//i - variable to hold the current number
//i = n - initial value
//condition - i >= 1
//loop from n to 1 - i = n; i >= 1; i--

function printDecreasing(n) {
  let i = n;
  while (i >= 1) {
    console.log(i);
    i--;
  }
}

console.log("print decreasing order");
printDecreasing(20);

// do while loop - execute loop atleast once  even if the condition is false
//while loop
console.log("Do while loop"); //exit control
let j = 1;
let z = 1000;
do {
  console.log(z);
  console.log(j);

  j++;
} while (j <= 10);
console.log("Loop ended");


let y = 10;
do{
  y++;
}while(y<15);
console.log(y);

// for loop
console.log("for loop");
//for loop - entry control - checks condition before executing the loop
console.log("for loop- printing numbers from 1 to 10");
for (i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("Loop ended");

//sum of numbers from 1 to n using for loop
function sumFromOneFor(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

//reverse order using for loop
function printDecreasingFor(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}

//problem - print the even numbers from 1 to n using for loop
function printEvenNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

console.log("print even numbers from 1 to n");
printEvenNumbers(25);
