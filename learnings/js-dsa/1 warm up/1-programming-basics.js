console.log("Hello world")
//s-q-k

//3 Main Data Types
//String
//Number
//Boolean

//Store data
//using const
//s-q
const a = 10;
//k
console.log(a);//-

//a = 9;

console.log(a);// -

//using let
let a = 10;
console.log(a);//10

a = 9;

console.log(a);//9

let a = 2;
let b = 7;

//operate data
const sum = a + b;
const multiply = a * b;
const subtract  = b - a;


console.log(sum);
console.log(multiply);
console.log(subtract);

let firstName = "Amruth ";
let secondName = "s k";

let fullName = firstName + secondName;

console.log(fullName);// Amruth s k

//need: using comment
//

let firstName = "Amruth S K ";
let secondName = 9;// number to string

let fullName = firstName + secondName;

console.log(fullName);// Amruth S K 9

//**js engine**- js script-execute-code line by line- very fast

//1. Memory allocation
//2. Code execution

//Array
let arr = [1, 2, 3, 4, 5, 6];

console.log(arr);

//1,2,3,4,5,6
//0,1,2,3,4,5

let sum = arr[5] + arr[2];

console.log(sum);//9

//if called non existed array - undefined

//object
let obj = {
    num: 9,
    name: "Amruth S K",
    bool:true
}

console.log(obj);

//access using key

console.log(obj.num);//9
console.log(obj.name);//Amruth S K
console.log(obj.bool);//true
