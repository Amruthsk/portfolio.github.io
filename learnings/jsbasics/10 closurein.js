// function x(){
//     var i = 3;
//     setTimeout(function(){
//         console.log(i);
//     },3000);
//     console.log('Run js');
// }

// x();
// // cb forms closure
// // settimeout stores cb attaching with timer
// //when timer expires cb is pushed into callstack

// x();

// // timer with var
// function x(){
//     for(var i = 1; i <= 5; i++){//var cant use but can be done using closure
//         setTimeout(function () {
//           console.log(i);
//         }, i*1000);
//     }
    
//     console.log('Run timer');
// }
// x();

// // timer with let
// function x(){
//     for(let i = 1; i <= 5; i++){//var cant use but can be done using closure
//         setTimeout(function () {
//           console.log(i);
//         }, i*1000);
//     }
    
//     console.log('Run timer');
// }

// x();

// timer with var  with closures to have new copy of i everytime
function x(){

    function close(x){
         for (var i = 1; i <= 5; i++) {
           //var cant use but can be done using closure
           setTimeout(function () {
             console.log(x);
           }, i * 1000);
         }
         close(x); 

    }
   
    
    console.log('Run timer');
}
x();


// //basic closure example
// function outer(){
//     var a = 10;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }

// outer()(); 
 