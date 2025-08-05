
// //global
// function a() {
//   console.log(b); // can access b inside a?--LEC --> GEC find b value
// }
// var b = 10;// global

// a();




function e() {//global
    var d = 10000; //local
    c(); //local
    function c(){
        console.log(d);

    }
 
}


e();
// console.log(d); // uncaught error


const message = 'hi'; // script
console.log(message);

{
    const a = "hey"; // block-let const accessible inside
    console.log(a);
}

//console.log(a);// block not accesible outside-not defined

const color ='red';//script


function start(){
  const a = "hey"; // local-let const accessible inside
  console.log(a);
  const color = 'blue';//local
  console.log(color);
}

if(true){
  const a = "by"; // block-let const accessible inside
  console.log(a);
  console.log(color);//script
}

for(let i=0;i<5;i++){
    const a = "bh"; // block-let const accessible inside
    console.log(a); //block accessible within block
}


function stop(){
  const b = "bye"; // block-let const accessible inside
  console.log(b);
  
}

start();    