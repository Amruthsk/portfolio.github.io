//operators -
//operands - values on which operator works
//operators - symbols that perform operations on operands
//1. arithmetic operator
//2. assignment operator
//3. logical operator
//4. comparison operator

// arithmetic operator - // +, -, *, /, %, **
// addition, subtraction, multiplication, division, modulus, exponentiation
let x = 2;
let y = 3;

console.log(x + y);

console.log(x - y);

console.log(x * y);

console.log(x / y); // division - gives u qoutient

console.log(x % y); // division -  gives u reminder %-modolo

console.log(x ** y);

console.log("assignment operator");

// assignment operator -// =, +=, -=, *=, /=, %=, **=
// used to directly assign value to a variable -
let z = 10;

//operation & assignment
console.log("value of z before assignment", z); // assign value to z
z += 5;
console.log("value of z after addition", z); // add 5 to z  z = z + 5
z -= 5;
console.log("value of z after subraction", z); // subtract 5 from z z = z - 5
z *= 4;
console.log("value of z after multiplying", z); // multiply z by 4 z = z * 4
z /= 4;
console.log("value of z after division -stores quotient", z); // divide z by 4 z= z / 4
z %= 4;
console.log("value of z after storing reminder", z); // modulus z by 4 z= z % 4
z **= 2;
console.log(z); // exponentiation z by 2 z= z ** 2

console.log("logical operator");
// logical operator - takes two operands-input (true- current or false- no current) and returns true or false

//And -  two inputs and one output -&&
console.log("and operator");
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

console.log(10 > 5 && 6 < 3);
//or - two inputs and one output - ||
console.log("or operator");
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

//NOT - one input and one output - !
console.log("not operator");
console.log(!true);
console.log(!false);

//falsy values?
//null, undefined, ""- empty string, +0,-0,NaN,false
//truthy values?
//rest
//shortcircuiting -conversion+- non-boolean values to  boolean values
console.log("shortcircuiting");
//and shortcircuiting - returns first falsy value or last truthy value
console.log("and shortcircuiting");
console.log(10 && 30); //30 1st true see 2nd  - ans 2nd
console.log(0 && 30); //0 1st false - ans- false
console.log(10 && 0); //0 1st true see 2nd  - ans 2nd
console.log(0 && 0); //0 1st false - ans- false
console.log(40 && null); //null 1st true see 2nd  - ans 2nd
console.log(40 && undefined); //undefined 1st true see 2nd  - ans 2nd
console.log(40 && false); //false 1st true see 2nd  - ans 2nd
console.log("" && -0); //"" 1st false - ans- false

// conditional rendering - react used
//or shortcircuiting - returns first truthy value or last falsy value
console.log("or shortcircuiting");
console.log(10 || 30); //10 1st true return true - does not evaluate 2nd input
console.log(0 || 30); //30 1st false see 2nd return false
console.log(10 || 0); //10 1st true return true
console.log(0 || 0); //0 1st false see 2nd return false
console.log(40 || null); //40 1st true return true
console.log(40 || undefined); //40 1st true return true
console.log(40 || false); //40 1st true return true
console.log("" || -0); //-0 1st false see 2nd return false

//relational operator - <, >, <=, >=
//takes two operands and compares them - returns true or false
console.log("relational operator");
//greater than, less than, greater than or equal to, less than or equal to
console.log("10 > 20", 10 > 20);
console.log("10 < 20", 10 < 20);
console.log("10 >= 20", 10 >= 20);
console.log("10 <= 20", 10 <= 20);
console.log("10 > 10", 10 > 10);
console.log("10 < 10", 10 < 10);
console.log("10 >= 10", 10 >= 10);
console.log("10 <= 10", 10 <= 10);

console.log("bitwise operator");
// bitwise operator - works on binary numbers - 0 and 1
// takes two operands and performs bitwise operations - returns a number
// bitwise and, bitwise or, bitwise xor, left shift, right shift
// 5-101
// 6-110
// 5 & 6 - 101 & 110 = 100 - 4
console.log(5 & 6); // bitwise and - 4 -100
console.log(5 & 4); // bitwise and - 4
console.log(5 | 4); // bitwise or

console.log(5 ^ 6); //bitwise xor
// left shift - shifts bits to the left - multiplies by 2
console.log("left shift");
console.log(1 << 3); // left shift

console.log(1 << 4); // left shift
// right shift - shifts bits to the right - divides by 2
console.log("right shift");
console.log(27 >> 2); // right shift

console.log(10 >> 1); // right shift

