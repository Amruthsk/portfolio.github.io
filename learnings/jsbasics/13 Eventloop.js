//1
function a(){
    console.log('a');
}
a();
console.log('end')


// settimeout
console.log("start");
function a() {
  console.log("a");
}
a();
console.log("end");


console.log("Start");        //exe
setTimeout(function cb() {  //register cb in web api-->cb queue-->event loop 
  console.log("inside cb");
},6000);
console.log("End");//exe

// DOM api
console.log("START");        //exe

document.getElementById("clickMe")
.addEventListener("click", function cbe() {
  console.log("button clicked");
});

console.log("END");//exe


//fetch()

console.log("Start"); 
       //exe
setTimeout(function cb() {  //register cb in web api-->cb queue-->event loop 
  console.log("inside fetchcb");
},7000);

fetch('https://api.netflix.com')
.then(function cbF(){
    console.log('CB netflix')
});

console.log("End");//exe

