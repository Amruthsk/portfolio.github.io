//factorial using recursion
// n! = n*(n-1)*(n-2).......1

// base case 1
function fact(n){
    if (n == 1) {return 1 ;}
    return n * fact(n - 1);
}

console.log(fact(5));