let a = 5;
let b = ++a; //  (++a) → (a=6) → (b=6). Result: a=6, b=6
let c = 5;
let d = c++; //  (c=5) → (d=5) → (c=6). Result: c=6, d=5


console.log(a);
console.log(b);
console.log(c);
console.log(d);