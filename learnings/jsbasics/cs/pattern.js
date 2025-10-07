
// 1
let x = 100;
let y = x++;
let z = ++x;


console.log(`x is:` ,x );
console.log(`y is:`, y);
console.log(`z is:`, z);

let n = ( x==y ) ? z++ : ++z;

console.log(n);
console.log("--------------------------------------------")
//2
const f = new Boolean(false);

if(f){
    console.log(1);
}
else{
    console.log(2);
}

console.log(typeof f);


console.log("--------------------------------------------");

//3 
const obj = {x:1,y:2};
let {x:a, y:b} = obj;
a = 2;
console.log(obj.x, obj.y); //how 1,2  why not 2,2

console.log("--------------------------------------------");

//4
let elf = "ESTEL"

function lapland(parmas){
    console.log(elf);
    let elf = "Arwen";
}

//lapland();//reference error
// why not Arwen within scope or ESTEL outside the function 
//why error

console.log("--------------------------------------------");

//5
const obje = {};
obje.value = undefined;
console.log(Object.hasOwn(obje, "value"));


console.log("--------------------------------------------");

console.log("--------------------------------------------");
