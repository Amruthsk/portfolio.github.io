// // what is callback function in js
// //cb helps to do asynchronous
setTimeout(function () {
  console.log("timer");
}, 5000);


// web api with cbf() with timer store  & register
function x() {
  console.log("x");
  
}
x();



//callback
function z(y){
    console.log('z');
    y();

}

z(function y(){
    console.log("y");
});



function fun(r,fn){
    for(let i=0;i<r;i++){
      console.log(i);
    }

    fn()

}

// first fun executed
// second fn () gets executed
// fn() - callback funcion

// fucntion passed inside the HOF callback function

fun(10,function exec(){
  console.log("executed 2nd")
})


