// //basic closure
// function x() {   //closure x
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y(); //calling function y
// }

// x();

//can assign functions to variable

// function x() {
//   //closure x
//   var a = function y() {
//     console.log(a);
//   };

//   y(); //calling function y
// }

// x();

//can pass  a function as a parameter insid a fun
// function x() {
//   //closure x
//   var a = 7;

//   y(); //calling function y
// }

// x(function y() {
//   console.log(a);
// });

// // return functions
// function x() {
//   //closure x
//   var a = 7;
//   function y() {
//     console.log(a);
//   }

//   return y; //returning function y whole closure was returned
// }

// var z = x();
// console.log(z); // return function y which was inside function x

// z(); //calling z gives value 7 bcoz it retains memory returns value rember where they were actually present and its lexical scope


// // same representation
// function x() {
//   //closure x
//   var a = 7;
//   return function y() {
//     console.log(a);
//   }; //returning function y whole closure was returned
// }

// x();

// // return functions
// function x() {
//   //closure x
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   a = 100;

//   return y; //returning function y whole closure was returned
// }

// var z = x();
// console.log(z); // return function y

// z(); //calling z gives valu

//whole thing inside the function
// one more level deep inside
function z(){
    var b = 900;
    function x() {
      //closure x
      var a = 7;
      function y() {
        console.log(a,b);
      }
     y();
    }
    x();
}
z();