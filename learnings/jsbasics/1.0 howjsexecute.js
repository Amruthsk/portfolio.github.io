//Basics of js

//file-contains code - program
//run
//run program - inside Ram
//-> Process - program in running state 
//software (program)run - process - ram allocates(memory-storage area)





var n =2;

function square(num) {
    var ans = num * num;
    return ans;
}
console.log(square(n)); // Prints 4
var square4 = square(4); // Prints 16
console.log(square4); // Prints 16

//1st global execution context
//memeory creation phase 1: allocate space to variables and functions
// n:undefined
//square :{whole code}
//square4: undefined

//code execution component phase 2: 
//2 n:undefined --> 2
//6 function invocation ---->new execution context(like mini program) conserned about function only
//p1 memorycreation: num: undefined, ans:undefined
//p2 code execution: 
// 2 n(argument)passed to num(parameter) |num : 2
// 3 ans = 2* 2 | ans:4
//4 return kw return the value of ans to the place of function invoction to line 6 delete nec|square(n): 4

// return kw - task of func is over return to the place of fun invocation
//7 code execution
//p1 memorycreation: num: undefined, ans:undefined
//p2 code execution: 
// 2 4(argument)passed to num(parameter) |num : 4
// 3 ans = 4*4 | ans:16
//4 return kw return the value of ans to the place of function invoction to line 7 delete nec|square(4): 16


let productPrice = 150000;

let productDiscount = 15;

let productionName = "Apple Iphone 11 pro"

let isAvailable = true;

let minusZero =-0;

console.log(minusZero);



let t;

console.log(t);

let c= null;
console.log(c);

let veryBigNumber = 7894545487877979797979797979799797979798656565;
console.log(veryBigNumber);

let veryBigInt = 789454548787797979797979797979979797979865656n;
console.log(veryBigInt);