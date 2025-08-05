// comments - 2 ways - single line - //, multi-line - /* */- for documentation-better understanding-not executed
/* this
is 
multiline comment*/

// Data types - how data is stored in memory
//number
//special numbers - 0, -0, NaN, Infinity, -Infinity
console.log("number data type");
console.log(10); // 10 is a number
console.log(10.5); // 10.5 is a number

// special numbers
console.log(0); // 0 is a number - zero value
console.log(-0); // -0 is a number - negative zero value
console.log(NaN); // NaN is a number - not a number - invalid number
console.log(Infinity); // Infinity is a number - greater than maximum limit of number type
console.log(-Infinity); // -Infinity is a number - less than minimum limit of number type
console.log(1 / 0); // Infinity - division by zero
console.log(1 / -0); // -Infinity - division by negative zero
console.log(0 / 0); // NaN - division of zero by zero
console.log(10 < Infinity); // Infinity - division by zero

//where 0 - zero - used for zero value
//where -0 - negative zero - used for negative zero value - direction ,velocity, etc.
//where NaN - not a number - used for invalid numbers - not  present in memory - bound to return a number but no t a valid number
//where Infinity - used for numbers greater than the maximum limit of number type
//where -Infinity - used for numbers less than the minimum limit of number type
console.log(10 / null); // NaN
console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity
console.log(10 / undefined); // NaN
console.log(undefined / 10); // NaN
console.log(undefined / undefined); // NaN
console.log(undefined / null); // NaN

// whichi is the only number that is not equal to itself?
console.log(NaN === NaN); // false - NaN is not equal to itself
//used to show invalid numbers - not a number
//string - "", ' ', `  `
//string - special characters - \n - like enter, \t - like tab space, \r- carriage return, \b - back space, \f - form feed, \v

const text = "javascript is a programming language \n easy to learn";
const text1 = "javascript is a programming language \t easy to learn";
const text2 = "javascript is a programming language \r easy to learn";
const text3 = "javascript is a programming language \b easy to learn";
const text4 = "javascript is a programming language \f easy to learn";
const text5 = "javascript is a programming language \v easy to learn";
console.log(text);
console.log(text1);
console.log(text2);
console.log(text3);
console.log(text4);
console.log(text5);

//boolean
//undefined - may be defined later
//objects - key-value pair - combination of above

// 2 types
//Primitive - exist themselves

//Nonprimitive - composition of other types object

//Non-zero value - value - holder paper present
//where 1 used - give sense of presence - value assigned - holder present
//0 - zero value - no paper - holder present
//where 0 used - give sense of zero value - value assigned - holder present
// give sense of emptiness - null, undefined
//null - no roll now- holder present
//where null used - no value assigned - holder present but no value assigned
let b = 10;
b = null;

//undefined - never given a value - no holder
//where undefined used - no value assigned - holder not present
//allocated memory placeholder-undefined  until assined the value

let a;

var marks = 100;
var name = "Coding is easy";
var age;
var company = null;
var salary = undefined;
var isStudent = false;

console.log("Marks = ", marks);
console.log("name = ", name);
console.log("age = ", age);
console.log("company = ", company);
console.log("salary = ", salary);
console.log("isStudent = ", isStudent);
