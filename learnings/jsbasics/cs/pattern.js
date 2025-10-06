
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
