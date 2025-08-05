// DRY - Don't Repeat Yourself
// Functions - Blackbox
//blackbox - i/p --(process-blackbox)--o/p
// Functions - reusable code block
//function - reusable code block that takes input, processes it, and returns output

//inbulid function
//Math.sqrt() - square root function

//console.log function- take i/p ---o/p on screen
console.log(10); // number ip
console.log("js is easy"); //text ip

let age = 20;
console.log(age); //var ip

console.log(12, "Start", age); //multi ip  same line op with comma separated value

//own function -creating a function

//function -kw, greetingToEveryone - function name
//() - parameter placeholder, {} - function body
//inside the function body, we write the logic that we want to execute when the function is called
//return - keyword to return a value from the function - inside the block
//defining function/blackbox
function greetingToEveryone() {
  console.log("logic line 1....");
  console.log("logic line 2....");
  console.log("logic line 3....");
  console.log("logic line 4....");
}

//calling function
greetingToEveryone();
greetingToEveryone();
greetingToEveryone();
greetingToEveryone();

//first executes function - math function-returns value - show in console
console.log(Math.sqrt(36));

// given a number, check if it is even or odd
//approach
//input - 6 output- even
//input - 7 output- odd
//n-parameter placeholder
//what is even or odd - if n%2 == 0 then even else odd
//check if n is even or odd

//n-parameter-placeholder
function isEvenOrOdd(n) {
  if (n % 2 == 0) console.log("even");
  else console.log("odd");
}

isEvenOrOdd(6); //6-actual values

// return vs print
function isEvenOdd(n) {
  if (n % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

let x = 10;
let y = 20;
let z = 31;

if (isEvenOdd(x)) {
  console.log(x, "is", isEvenOdd(x));
} else {
  console.log(x, "is", isEvenOdd(x));
}

if (isEvenOdd(y)) {
  console.log(y, "is", isEvenOdd(y));
} else {
  console.log(y, "is", isEvenOdd(y));
}

if (isEvenOdd(z)) {
  console.log(z, "is", isEvenOdd(z));
} else {
  console.log(z, "is", isEvenOdd(z));
}

console.log("isEvenOdd function called for x, y, z");
//isEvenOdd function is called for x, y, z
console.log("X is", isEvenOdd(x));
console.log("Y is", isEvenOdd(y));
console.log("Z is", isEvenOdd(z));

//now use the isEvenOdd function to check if a number is even or odd in a loop from 1 to 10
//approach
//input - 1 to 10 output- 1 odd, 2 even, 3 odd, 4 even, 5 odd, 6 even, 7 odd, 8 even, 9 odd, 10 even
//n - parameter placeholder
//i - variable to hold the current number
//i = 1 - initial value
//condition - i <= n
//loop from 1 to n - i = 1; i <= n; i++
function checkEvenOddInLoop(n) {
  for (let i = 1; i <= n; i++) {
    const result = isEvenOdd(i);
    console.log(i, result);
  }
}

checkEvenOddInLoop(10);

checkEvenOddInLoop(50);

// console.log () vs return
// console.log() - prints the value to the console
// return - returns the value from the function, which can be used later in the code

c = console.log("Hello World"); // prints "Hello World" to the console
console.log(c); // prints undefined because console.log() does not return a value

// function always return a value
//if function does not explicitly return a value, it returns undefined by default

function greet(name) {
  console.log("JS is easy", name);
}

let greeting = greet("John"); // prints "JS is easy John" to the console
console.log(greeting); // prints undefined because greet() does not return a value

function greet1(name) {
  console.log("JS is easy", name);
  return "Quick";
}

let greeting1 = greet1("John"); // prints "JS is easy John" to the console
console.log(greeting1);

// consider  3 integer values,& find the minimum of the three

//approach
//input - 10, 20, 5 output- 5
//input - 10, 20, 30 output- 10
//we have 3 numbers a, b, c
//compare a, b, c all 3
//if a < b && a < c then a is minimum
//if b < a && b < c then b is minimum
//else c is minimum

//parameter placeholder - a, b, c-function definition
//parameter - defined in the function definition
function findMinimum(a, b, c) {
  if (a < b && a < c) {
    return a;
  } else if (b < a && b < c) {
    return b;
  } else {
    return c;
  }
}

//arguments-inputs-actual values- function calling
//arguments - passed to the function when it is called
const min = findMinimum(10, 20, 5);
console.log("Minimum value is:", min);

//give 3 numbers a,b,c , check if we can form a triangle with them, the triangle having length a,b,c

//approach
//input - 3, 4, 5 output- true
//input - 1, 2, 3 output- false
//we have 3 numbers a, b, c
//to form a triangle, the sum of any two sides must be greater than the third side

function canFormTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true; // can form a triangle
  } else {
    return false; // cannot form a triangle
  }
}

const canForm = canFormTriangle(3, 1, 5);
console.log("Can form a triangle:", canForm);

//given the 3 sides of a triangle, check if it forms a triangle check if the given triangle is equilateral, isosceles or scalene

//approach
//input - 3, 3, 3 output- equilateral
//input - 3, 4, 3 output- isosceles
//input - 3, 4, 5 output- scalene
function triangleType(a, b, c) {
  if (canFormTriangle(a, b, c)) {
    // If the triangle can be formed, determine its type
    if (a === b && b === c) {
      return "equilateral"; // all sides are equal
    } else if (a === b || b === c || a === c) {
      return "isosceles"; // two sides are equal
    } else {
      return "scalene"; // all sides are different
    }
  }
}

const type = triangleType(3, 5, 5);
console.log("Triangle type is:", type);

//multiply
function multiply(a, b) {
  console.log(a * b);
}

multiply(12, 5); //

console.log("Multiplication", multiply(12, 5)); // This will print "Multiplication undefined" because multiply() does not return a value

function multiply1(a, b) {
  return a * b;
}

multiply1(12, 5);

console.log("Multiplication", multiply1(12, 5)); // This will print "Multiplication 60" because multiply1() return a value
