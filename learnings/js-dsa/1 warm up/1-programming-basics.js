console.log("Hello world")
//[string]{Hello world}
//(console.log) @ [string]{"Hello world"}
//s-q-k

//3 Main Data Types
//String
//Number
//Boolean

//[[Primitive Data Type]] ⊃ {String, Number, Boolean}

//Store data
//using const
//s-q
const a = 10;
//[a]->[number]{10}
//[const a] ↔ {Immutable} → [number]{10}
//k
console.log(a);//-
//(console.log) @ [const a]{10} → [Output]
//a = 9;
//(Assignment) @ [const a] ⇒ [?] {Error: Reassignment to constant variable}

console.log(a);// -
//(console.log) @ [const a]{10}

//using let
let a = 10;
//[let a] ↔ {Mutable} → [number]{10}
console.log(a);//10
//(console.log) @ [let a]{10} → [Output]

a = 9;
//(Assignment) @ [let a] ⇒ [let a]{9}


console.log(a);//9
//(console.log) @ [let a]{9} → [Output]

let a = 2;
let b = 7;
//[a]->[number]{2}
//[b]->[number]{7}
//[let a] → [number]{2}; [let b] → [number]{7}

//operate data
const sum = a + b;
const multiply = a * b;
const subtract  = b - a;

//[sum]----(a+b)----->[number]{9}
//(a + b) → [const sum] → [number]{9};
//  (a * b) → [const multiply] → [number]{14}; 
// (b - a) → [const subtract] → [number]{5}

console.log(sum);
console.log(multiply);
console.log(subtract);
//(console.log) @ {[sum], [multiply], [subtract]} → [Output]

let firstName = "Amruth ";
let secondName = "s k";
//[firstName] ----------->[string]{Amruth}
// /[let firstName] → [string]{"Amruth "}; [let secondName] → [string]{"s k"}

let fullName = firstName + secondName;

//(String Concatenation) @ {[firstName], [secondName]} → [let fullName] → [string]{"Amruth s k"}
console.log(fullName);// Amruth s k
//(console.log) @ [fullName]{"Amruth s k"} → [Output]
//need: using comment
//

let firstName = "Amruth S K ";
let secondName = 9;// number to string

let fullName = firstName + secondName;
//(Type Coercion & Concatenation) @ {[firstName], [secondName]} → [let fullName] → [string]{"Amruth S K 9"}


console.log(fullName);// Amruth S K 9

//**js engine**- js script-execute-code line by line- very fast

//1. Memory allocation
//2. Code execution
//[JS Engine] ↔ {Fast} ⊂ [[JS Script]] → (Memory Allocation) → (Code Execution)

//Array
let arr = [1, 2, 3, 4, 5, 6];

// arr--->[array]{0:1,1:2: 2, 3:3, 4:4, 5:5, 6:6]}
//[let arr] → [Array]{[0]:1, [1]:2, [2]:3, [3]:4, [4]:5, [5]:6} ↔ {Indexed, Mutable}

console.log(arr);

//1,2,3,4,5,6
//0,1,2,3,4,5

let sum = arr[5] + arr[2];
//(Element Access & Addition) @ [arr]{arr[5]=6, arr[2]=3} → [let sum] → [number]{9}


console.log(sum);//9
//(console.log) @ [sum]{9} → [Output]

//if called non existed array - undefined

//object
let obj = {
    num: 9,
    name: "Amruth S K",
    bool:true
}

//obj --->[object]{num: 9,name: "Amruth S K",bool:true}
//[let obj] → [Object]{num:9, name:"Amruth S K", bool:true} ↔ {Key-Value, Mutable}
console.log(obj);
//(console.log) @ [obj] → [Output]

//access using key

console.log(obj.num);//9
console.log(obj.name);//Amruth S K
console.log(obj.bool);//true
//(Property Access) @ [obj]{.num, .name, .bool} → [Output]{9, "Amruth S K", true}