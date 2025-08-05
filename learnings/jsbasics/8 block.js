// //single statement
// console.log('abcd');
// //block - {}
// //compound statement
// {
//     var a = 10;
//     console.log(a);
// }

// //using compound statement in place of single statement

// if(true)console.log("abcd");

// //use it where js requires one statement
// // need to use block to combine multiple statements - group these statement using block
// if (true) {
//   var a = 10;
//   console.log(a);
// };

//scope -what all x,f()are accessible in the place

// {
//     var a = 100;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

//     console.log(a);
//     //console.log(b); //reference error  b is not defined
//    // console.log(c); //reference error  b is not defined

//shadowing - same named variable outside the block a

// var a = 10
// {
//   var a = 100;
//   let b = 20;
//   const c = 30;
//   console.log(a); // a = 100 shadowed and modify value referring to the same memory space
//   console.log(b);
//   console.log(c);
// }
// console.log(a); //a = 100

// //let and const shadowing same
// let b = 10
// {
//   var a = 100;
//   let b = 20;
//   const c = 30;
//   console.log(b); // b = 20 shadowing but no modification  b in block scope
//   console.log(c);
// }
// console.log(b); //b = 10 b outside block scope --> script scope

// same way for functions also
// const c = 10
// {
//   var a = 100;
//   let b = 20;
//   const c = 30;
//   console.log(b); // c = 30 shadowing but no modification  b in block scope
//   console.log(c);
// }
// console.log(c); //c = 10 b outside block scope --> script scope

// const c = 10

// function x(){
//   const c = 30; // c = 30 shadowing but no modification  b in block scope
//   console.log(c);
// }

// x();
// console.log(c); //c = 10 b outside block scope --> script scope

// // illegal shadowing
// let a = 10;
// {
//     var a= 10 ; // syntax error
// }

//lexical scope
const a = 20;
{
  const a = 40;
  console.log(a);
  {
    const a = 60;
    console.log(a);
  }
  console.log(a);
}

console.log(a);
