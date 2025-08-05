function f(x){
    console.log(x);
    x += 2;
    x -= 2;
    x *=2;

    return x *10;
}


function g(y){
    console.log(y*2);
    let z = f(y);
    return z;
}

let ans = g(10);
console.log(ans);