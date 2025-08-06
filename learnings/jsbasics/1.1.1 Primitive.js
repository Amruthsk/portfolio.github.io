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
//ip- only  valid js data type
//data type conversion
// To Primitive, To Boolean, To string, To number....

console.log("ToNumber");
console.log(
  "spend time understanding what js wants to say - learn documentation"
);
console.log(
  "Understand type conversion - Abstract operation -u cannot use it - js uses it internally to visualize what goes internally inside the js"
);

// converts diff data type argument to value type number

// Tonumber - set of rules followed when trying to convert argument into number
// js executes  following the rules - ECMA script developers who set the rules - possible logical way -choice of js developers - no wierd stuffs
//ip- undefined -> NaN
//ip-Null -> return+0 ->0
//ip bool - true - op -1, ip false->op-0

//example - subraction - given argument -number - js abstract operation converts the given argument toNumber

console.log(10 - null); // null - 0 ->10
console.log(10 - undefined); //undefined- NaN -> NaN

//ToNumber(10);// reference error not availabe to executed by us but js can use
console.log(2 - 7); // - 5
console.log(2 - null); //2- null-> 2 - 0 ->2
console.log(2 - undefined); //2-undefined-> 2- NaN -> NaN
console.log(2 - true); //boolean ,  2-1 -> 1
console.log(2 - false); //boolean ,  2-0 -> 2

//string to number  only for subraction toNumber ^ the data type
console.log(11 - "8"); // 3
console.log("8" + 1); //  81
console.log(1 + "8"); //18
console.log("11" - "8"); //3
console.log("11" - "2"); //9
console.log("11" - 2); //9
console.log(11 - "232df"); // 11- NaN ->NaN
console.log(11 - "0xa"); //1  hexadecimal number system- 0x" denotes a hexadecimal number - uses 16 unique symbols: the digits 0-9 and the letters A-F

// in ToNumber when input is object it takes Toprimitive

// "important answer :  everything is mentioned in the documentation. give me the access of the documentation. I will tell you the answer of the operation"

// "expected to understand and where to find"

console.log("!ToPrimitive abstract operation - not for end user");
console.log(
  "Toprimitive(input,preferred types)  ---> converts the input to non object type(number,string,boolean)"
);

console.log("To Primitive cases");
// non object -input --> directly sends output- non object

// object-input
// case 1 - preferred type not present - default -1st output for default - ----> changes to number 2nd output after check most prefered type is number
// case 2 - if  prefrred type - string - string - output
// case 3 - if  preferred type - number - number - output
// refer to docs if asked know where to find

// hint can have 2 values - string or a number
// if hint  is a string  create a method name array ["tostring"array, value of]
//  result - non object (primitive)- retrun
// result - object - type error

// if hint  is a number  create a method name array [value of,"tostring"array]
//result non object - retrun
//result object - type error

// ToNumber -> object -> Toprimitive ->primvalue -> return of ToNumber

let obj = {};
// even empty object has default string

console.log(obj.toString()); // returns object object - default return - string

console.log(typeof obj.toString()); // returns by default string

console.log(typeof obj.valueOf()); // returns by default object

//can be override
let obj2 = {
  toString() {
    //default return
    return 9;
  },
};

console.log(obj2.toString()); // returns  9

console.log(typeof obj2.toString()); // returns  number

console.log(typeof obj2.valueOf()); // returns  object value not overwrited

//override
let obj3 = {
  x: 10,

  valueOf() {
    //default return
    return 10;
  },
};

console.log(obj3.toString()); // returns  object objedt

console.log(typeof obj3.toString()); // returns  string

console.log(typeof obj3.valueOf()); // returns  number

let ob = {};

// subracting - convert to numbr
console.log(10 - ob); // Nan
// object -(toNumber)-> // ToNumber -> object -> Toprimitive,hint number --> oridnartoPrimitive-(number - value0f{object},Tostring[object][object])->primvalue string0 object-> return of ToNumber(string ) -> nan

let obja = { x: 9, y: 8 };
// subracting - convert to numbr
// object -(toNumber)-> // ToNumber -> object -> Toprimitive,hint number --> oridnartoPrimitive-(number - value0f{object},Tostring[object][object])->primvalue string-object-> return of ToNumber(string ) -> nan
console.log(10 - obja); // Nan

let objb = {
  x: 9,
  valueOf() {
    return 99;
  },
};
// subracting - convert to numbr
// object -(toNumber)-> // ToNumber -> object -> Toprimitive,hint number --> oridnarytoPrimitive-(  value0f{99},Tostring[object][object])->primvalue 99-object-> return of ToNumber(99 ) -> 99

console.log(100 - objb); // 1

let objc = {
  x: 9,
  valueOf() {
    return 99;
  },
  toString() {
    return 88;
  },
};
// subracting - convert to numbr
// object -(toNumber)-> // ToNumber -> object -> Toprimitive,hint number --> oridnarytoPrimitive-(  value0f{99},Tostring[88])->primvalue 99-object-> return of ToNumber(99 ) -> 99

console.log(100 - objc); // 1

let objd = {
  x: 9,
  toString() {
    return 88;
  },
};
// object -(toNumber)-> // ToNumber -> object -> Toprimitive,hint number --> oridnarytoPrimitive-(  value0f{object},Tostring[88])->primvalue 88-object-> return of ToNumber(88 ) -> 99

// subracting - convert to numbr
console.log(100 - objd); // 1

let obje = {
  x: 9,
  toString() {
    return "88";
  },
};
// object -(toNumber)-> // ToNumber -> object -> Toprimitive,hint number --> oridnarytoPrimitive-(  value0f{object},Tostring[88])->primvalue 88-string-> return of ToNumber(88 string) -> 88 easy to convert

// subracting - convert to numbr
console.log(100 - obje); // 1

// object - typeerror - cant convert to primitive
let objf = {
  x: 9,
  toString() {
    return {};
  },
};
// subracting - convert to numbr
// object -(toNumber)-> // ToNumber -> object -> Toprimitive,hint number --> oridnarytoPrimitive-(  value0f{object},Tostring[object]-its string )->primvalue both converted into string

//console.log(100 - objf); // type error

//Subraction operation - preference to ToNumber & has a hint

//Coercion in Addition operation
//addition operation - preference to Toprimitive & no hint
let obz = {};

// addition - convert to numbr
console.log("18" + obz); //
// addition operation -(Toprimitive)-> // Toprimitive -> string remains --object -> Toprimitive,hint number --> oridnartoPrimitive-(number - value0f{object},Tostring[object][object])->primvalue [object][object]-> return both string  & concatenate -> 18[object Object]

console.log(18 + obz); //
// addition operation -(Toprimitive)-> // Toprimitive -> number converted to string --object -> Toprimitive,hint number --> oridnartoPrimitive-(number - value0f{object},Tostring[object][object])->primvalue [object][object]-> return both string  & concatenate -> 18[object Object]

//v
//if any 1 string always convert both to string & string concatenation
//if any both number always addition operation
//if object

// coercion with unary + operator -> always preference toNumber
console.log("unary operator");
//requires only operand
//++ increment by 1 unit
console.log("unary increment operator");
//1)assign 2)increment
let a = 10;

console.log(a); // a

console.log("a old value", a++); // post-increment - 1st returns a value before incrementing 2nd increment

console.log("next step a increment", a);
//1)increment 2) assignment
let g = a++;
console.log("value of a & g after post increment: ", a, g);

let b = 10;

console.log(b);
// increment
console.log(++b); // pre-increment - returns value after incrementing

console.log(b);

//1st assign & then increment
let w = 20;
let u = w++;
console.log("value of w & u after post increment:", w, u);
w++;
console.log("value of w & u after post increment:", w, u);

//1st increment & then assign
let e = 20;
let t = ++e;
console.log("value of e & t after pre increment:", e, t);
e++;
console.log("value of e & t after pre increment:", e, t);

console.log("unary decrement operator");
//1st assign 2nd decrement
let c = 1;
console.log(c);
console.log(c--); // post-decrement - returns value before decrementing
console.log(c);

let d = 1;

console.log(d);
console.log(--d); // pre-decrement - returns value after decrementing
console.log(d);

console.log("+ unary plus");
//tries to convert type a variable if its not already a number
//does not change the original operator
//but returns converted value
//string to number or invalid number NAN
let p = "9";
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

console.log("unary operators - !, typeof");

// Equality operator
// 2 types - abstract, strict

// comparison operator
console.log("comparison operator");
//abstract equality  why use it 
// code == -> readable, important to know the type , loosely type language if you want more strict on type use java,typescript,===
//1st step checks type of operands
// == -2nd step
console.log(10 == 10); // true type same exactly like ===
console.log(null == undefined); //true - considered as same
console.log(undefined == null); // true - ''
console.log("10" == 10); // string , number -->prefer number comparison converts string to number and then compare true- converts to number
console.log(12 == "12"); // true - any operand string- convert to number and compare
console.log(10 == 20);
console.log(10 != 20);
console.log(10 != 10);
console.log(true == 1); // true any operand boolean - convert it to number and compare ;true -> 1
console.log(1 == true);
console.log(false == 0); //true , false -> 0
console.log(false == "0"); //true , false -> 0, y -> to number 0 , com
let ex = {
  x: 10,
  valueof() {
    return 100;
  },
};
console.log(99 == ex); //x- number,string,symbol one non object & other  y - object  --> convert y- object to Toprimitive - number conversion - ordinarytoprimitive  & then compare x & y (bothdirection)
console.log(100 == ex); //?

console.log(null == false); // y-boolean --> Tonumber -> 0  x-null -> false
// non followed - false
console.log("strict equality operator");
//strict equality

//1st step checks type operands -> types are different -> return false
//NaN type - number
// === -
//x -number
//
// if any number NaN - > false
console.log(NaN === NaN);
console.log("10" === 10); // false - no conversion
console.log("10" !== 10); // true - no conversion
console.log("10" === "10"); // true - no conversion
console.log(10 === 20);
console.log(10 !== 20);
console.log(10 !== 10);
console.log(0 === -0); //true
//anything else false

//for samevalueNonNumber(x,y) - abstract operation
//check not a number
// check the types are same
// undefined - > true
//Null -> true
//for strings
console.log("for strings");
// same length-> index by index comparison -> true
console.log("abc" === "abc"); // true
//for booleans
//both true or false -> true
console.log(true === true); // true
console.log(false === false); // true

// for symbol

//for object
let obje1 = { x: 10 };
let obje2 = { x: 10 };
let obje3 = { y: 10 };
console.log(obje1 === obje1); //true - same object (memory), same place,same memory value
console.log(obje1 === obje2); //false
console.log(obje2 === obje2); //true - same object (memory)
console.log(obje1 === obje3); //false
console.log(obje3 === obje2); //false
console.log(obje3 === obje3); //true - same object (memory)

//ToBoolean - abstract operation
// false - undefined, null
//for numbers - false - +0,-0,Nan
// for string - false - length =0

// undefined, null, Nan, +0, -0, false, "" - only falsy value

//-24 - truthy

// takes argument - return boolean

//Logical NOT operator(!)
let ten = 10;
console.log(!a); //false

let ud = undefined;
console.log(!ud);

// if else conditions
if (ud) {
  console.log("Truthy");
} else {
  console.log("falsy");
}

//Abstract operation Tostring
//ud - 'ud'
//null - 'null
//boolean true - 'true'
//false - 'fals'
// number - NumberToString(arg)
//string - argument
//symbol - type error
//object - ToPrimitive hint string--ToString

//Coercion special cases - mentionable coner cases - might never see
// ToString -> "" + value
//value +0 or -0 -> 0
console.log("" + 0); // +0  -> 0
console.log("" + -0); //  -0 -> 0

//empty array to empty string
console.log("" + []); // [ ]-> ''
// empty object  to object object
console.log("" + {});

//array removes the bracket
console.log("" + [1,2,3]);

//array removes bracket,null,undefined
console.log("" + [null, undefined]);

console.log("" + [1, 2, null, 4 ,undefined,6]);


//ToNumber
console.log(0 - "010"); // -10 string -> decimal number
console.log(0 - "o10"); 
console.log(0 - "O10"); 
console.log(0 - 010); //-8 octal number
console.log (0 -"0xb");// 0x- hexadecimal number
console.log(0 - 0xb);//hexadecimal


console.log([] - 1);
console.log([""] - 1); 
console.log(["0"] - 1); 

//coercion on templated string

// == does coercion
// === does not use coercion

let obje6 = { x: 10, y: 20};
console.log("my roll number is ", 1);

console.log(`my object is ${obje6}`);

//coercion is unavoidable if we write code

console.log("my roll number is " + obje6);

console.log(1 < 2 < 3);//1(1<2) -> true-1 2(1<3) -true--> true
console.log(3>2>1);//1(3>2) -> true -> 1>1-> false

// explicit type conversion - helps in coercion
//important to understand coercion & abstract operation
//know the cases of coercion in the code
console.log(Number(2));

//NaN

console.log(Number("210101"));// number
console.log(Number("abcde"));// nan
console.log(Number("0xa"));// hexa decimal

//check variable has a value Nan or not
// cant check ===, ==

c =NaN;

// internal library isNaN, Number.isNan
console.log(isNaN(c));// true
console.log(Number.isNaN("vik"));// check the type -> false or if number-> check NaN or not 
//console.log(isNan("vik"));// ToNumber -> false


//-0(used for vectore which has magnitude and direction)
let vd = -0;
console.log(vd === 0);// true  * cant check -0

// function object.is
console.log (Object.is(vd,-0));
console.log(Object.is(vd, 0));

// to check the sign use Math.sign
console.log(Math.sign(0));//0
console.log(Math.sign(-0));//-0problem
console.log(Math.sign(-5));
console.log(Math.sign(8));

// how to handle this
//custom function that can give us the sign of the number properly


console.log("+");
console.log("-");

//boxing
//primitive - tostring,tonumber....error
//primitive converts to become non primitive
//objects have tostring, tonumber