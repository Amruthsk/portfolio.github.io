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


// js is a synchronous one thing at a time and single threaded language in order
// blocking the main thread
//power of callbacks
//deep about event listeners

//attach click me - cb
// document.getElementById('clickMe')
// .addEventListener('click',function xyz(){
//     console.log('button clicked')

// })


//closures demo with event listeners
//w/o closure using global variable is not safer data no hiden
// let count = 0;
// document.getElementById('clickMe')
// .addEventListener('click',function xyz(){
//     console.log('button clicked',++count);

// })

// create closure and wrap this within a closure
function attachEventListeners(){
    let count = 0;
    document
      .getElementById("clickMe")
      .addEventListener("click", function xyz() {
        console.log("button clicked", ++count);
      });
}
attachEventListeners();

//scope demo with event listeners
//elements-->event listners

//garbage collection & remove event listeners
//why remove event listeners -----------(heavy)-->closure- memory /cant free up memory when not using them----(slows the page if too much event listners)