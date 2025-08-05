console.log("Start"); //exe

setTimeout(function cb() {
  //register cb in web api-->cb queue-->event loop
  console.log("inside cb");
}, 6000); //similar for 0ms time  too

console.log("End"); //exe


// block main thread for 10 sec use while loop
let startDate = new Date().getTime();
let endDate = startDate;

while(endDate < startDate + 10000){
    endDate = new Date().getTime();
  
}
console.log('while expires');