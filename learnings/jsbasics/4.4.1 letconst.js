//4.4 Declaration Grammar - keywords - own purpose/speacial meaning, usecase - cant be used as variable

// few are let,const,for,if,else,return

//n:store values inside a program
//variables- memory buckets that stores values & has name & 

//let & const declarations are hoisted and are in TDZ

//console.log(b);//undefined - global space
//console.log(c);//reference error not defined - access to global space
//console.log(a);//reference error access var in tdz - diff mem space
//console.log(pi);//reference error access var in tdz
let a = 100;
var b = 1000;
const pi = 3.14;

//let a = 200;//---(redeclaration)---syntax error
//const pi = 3.145;//---(redeclaration)---syntax error
var b = 300;//can be redeclared
//var a = 4;// ---(redeclaration)--syntax error

//syntax error due to redeclaration
// const b;
// b = 5;
 

//type error - assignment to const variable
// const c = 100;
// c = 6;



// function start(){
//     for(let i=0; i < 5; i++){
//         console.log(i);//local->block
//     }
//     console.log(i);// i not defined outside the block
// }

// start();
// Es6 : let,const => block -scoped - only inside block

function stop() {
  for (var i = 0; i < 5; i++) {
    console.log(i); //local
  }
  console.log(i); //i accesible
}
// var => function-scoped anywhere in function--attached to window object
stop();

// semicolon => instruction => statement -*E;

//variable names  -  Rules 
//1) variables can contain small alphabets, capital alphabets, 
// digits,underscore(_) or dollor$

//2) cannot have space or any other special character

//3) Meaningfull names so that reader can identify names properly

//4) No digit start

