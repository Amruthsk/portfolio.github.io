//operators - 
//operands - values on which operator works
//operators - symbols that perform operations on operands
//1. arithmetic operator
//2. assignment operator
//3. logical operator
//4. comparison operator

// arithmetic operator - // +, -, *, /, %, **
// addition, subtraction, multiplication, division, modulus, exponentiation
let x =2;
let y =3;

console.log(x+y);

console.log(x - y);

console.log(x * y);

console.log(x / y); // division - gives u qoutient

console.log(x % y);// division -  gives u reminder %-modolo

console.log(x ** y);

console.log("assignment operator");

// assignment operator -// =, +=, -=, *=, /=, %=, **=
// used to directly assign value to a variable - 
let z =10;


//operation & assignment
console.log("value of z before assignment",z); // assign value to z
z += 5;
console.log("value of z after addition",z); // add 5 to z  z = z + 5
z -= 5;
console.log("value of z after subraction",z);// subtract 5 from z z = z - 5
z *= 4
console.log("value of z after multiplying",z);// multiply z by 4 z = z * 4
z /= 4;
console.log("value of z after division -stores quotient",z);// divide z by 4 z= z / 4
z %= 4;
console.log("value of z after storing reminder",z);// modulus z by 4 z= z % 4
z **= 2;
console.log(z);// exponentiation z by 2 z= z ** 2


console.log("logical operator");
// logical operator - takes two operands-input (true- current or false- no current) and returns true or false

//And -  two inputs and one output -&&
console.log("and operator");
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

console.log((10>5) && (6<3));
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
console.log(10 && 30);//30 1st true see 2nd  - ans 2nd
console.log(0 && 30);//0 1st false - ans- false
console.log(10 && 0);//0 1st true see 2nd  - ans 2nd
console.log(0 && 0);//0 1st false - ans- false
console.log(40 && null);//null 1st true see 2nd  - ans 2nd
console.log(40 && undefined);//undefined 1st true see 2nd  - ans 2nd
console.log(40 && false);//false 1st true see 2nd  - ans 2nd
console.log("" && -0);//"" 1st false - ans- false

// conditional rendering - react used
//or shortcircuiting - returns first truthy value or last falsy value
console.log("or shortcircuiting");
console.log(10 || 30);//10 1st true return true - does not evaluate 2nd input
console.log(0 || 30);//30 1st false see 2nd return false
console.log(10 || 0);//10 1st true return true
console.log(0 || 0);//0 1st false see 2nd return false
console.log(40 || null);//40 1st true return true
console.log(40 || undefined);//40 1st true return true
console.log(40 || false);//40 1st true return true
console.log("" || -0);//-0 1st false see 2nd return false

// comparison operator
console.log("comparison operator");
//abstract equality
console.log(10 == 10);
console.log('10' == 10);// true- converts to number
console.log(10 == 20);
console.log(10 != 20);      
console.log(10 != 10);
//strict equality
console.log('10' === 10); // false - no conversion 
console.log('10' !== 10); // true - no conversion
console.log('10' === '10'); // true - no conversion
console.log(10 === 20);
console.log(10 !== 20);
console.log(10 !== 10);

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
console.log(1<<3); // left shift

console.log(1 << 4);// left shift
// right shift - shifts bits to the right - divides by 2
console.log("right shift");
console.log(27>>2);// right shift

console.log(10 >> 1);// right shift


console.log("unary operator");
//requires only operand
//++ increment by 1 unit
console.log("unary increment operator");
//1)assign 2)increment
let a = 10;

console.log(a);// a

console.log("a old value",a++);// post-increment - 1st returns a value before incrementing 2nd increment

console.log('next step a increment',a);
//1)increment 2) assignment
let g = a++;
console.log("value of a & g after post increment: ",a,g);

let b = 10;

console.log(b);
// increment 
console.log(++b);// pre-increment - returns value after incrementing

console.log(b);

//1st assign & then increment
let w = 20;
let u = w++;
console.log("value of w & u after post increment:",w,u);
w++;
console.log("value of w & u after post increment:", w, u);

//1st increment & then assign
let e = 20;
let t = ++e;
console.log("value of e & t after pre increment:", e, t);
e++;
console.log("value of e & t after pre increment:", e, t);


console.log('unary decrement operator')
//1st assign 2nd decrement
let c = 1;
console.log(c);
console.log(c--);// post-decrement - returns value before decrementing
console.log(c);

let d = 1;

console.log(d);
console.log(--d);// pre-decrement - returns value after decrementing
console.log(d);

console.log("+ unary plus")
//tries to convert type a variable if its not already a number
//does not change the original operator 
//but returns converted value
//string to number or invalid number NAN
let p ="9";
let v = +p;
console.log(typeof p);
console.log(typeof v);
console.log(p);
console.log(v);


console.log("- unary plus");
//tries to convert type a variable if its not already a number
//does not change the original operator
//but returns converted value & makes the result negative(negate)+ -> - or - -> +
//string to number or invalid number NAN
let r = "3";
let i = -r;
console.log(typeof r);
console.log(typeof i);
console.log(r);
console.log(i);

console.log("unary operators - !, typeof")

console.log(
  "Coercion - coercion is a process triggered by operators acting on mismatched types"
);
// type conversion- convert the type of input for operation
//converting - manual (explicit) / rules based- automatic(implicit) also know as coercion

// important before coercion - abstract operation
// Abstract operation - not a part of js-aid the specification of ECMA script
//algorithm present in ecma script -  abstract operation is present in the ecma script docs but they are not avaialable for usage in ecmascript
//abstract operation - we cannot use thes operations directly

//aid the specification(rules) of ECMA script
// help in documentation - internal language that does something- helps in internal working of js

// To explain the internal details of how & what language is doing - we have abstract operation 

//Abstract operation - js internally executes (we cannot use it/we cannot call it )
//what,why,how it does
//implicitly - perform  automatic type conversion
//ip- only ny valid js data type 
//data type conversion
// To Primitive, To Boolean, To string, To number....

console.log("ToNumber")
console.log("spend time understanding what js wants to say - learn documentation");
console.log("Understand type conversion - Abstract operation -u cannot use it - js uses it internally to visualize what goes internally inside the js");

// converts diff data type argument to value type number

// Tonumber - set of rules followed when trying to convert argument into number
// js executes  following the rules - ECMA script developers who set the rules - possible logical way -choice of js developers - no wierd stuffs
//ip- undefined -> NaN
//ip-Null -> return+0 ->0
//ip bool - true - op -1, ip false->op-0

//example - subraction - given argument -number - js abstract operation converts the given argument toNumber

console.log(10-null); // null - 0 ->10
console.log(10-undefined); //undefined- NaN -> NaN
 
//ToNumber(10);// reference error not availabe to executed by us but js can use
console.log(2-7); // - 5
console.log(2-null); //2- null-> 2 - 0 ->2
console.log(2-undefined); //2-undefined-> 2- NaN -> NaN
console.log(2 - true);//boolean ,  2-1 -> 1
console.log(2 - false);//boolean ,  2-0 -> 2

//string to number  only for subraction toNumber ^ the data type
console.log(11 - "8"); // 3
console.log("8" + 1); //  81
console.log(1 + "8");//18
console.log("11" - "8");//3
console.log("11" - "2");//9
console.log("11" - 2);//9
console.log(11 - "232df");// 11- NaN ->NaN
console.log(11- "0xa")//1  hexadecimal number system- 0x" denotes a hexadecimal number - uses 16 unique symbols: the digits 0-9 and the letters A-F


// "important everything is mentioned in the documentation. give me the access of the documentation. I will tell you the answer of the operation"

// "expected to understand and where to find"


console.log("!ToPrimitive abstract operation - not for end user" );
console.log("Toprimitive(input,preferred types)  ---> converts the input to non object type(number,string,boolean)")


 