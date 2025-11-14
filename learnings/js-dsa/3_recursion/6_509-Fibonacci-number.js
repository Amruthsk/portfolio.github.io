// Fibonacci-number
// think recursively
// train to think recursively

// Fibonacci sequence ->  Fibonacci-number
// every element sum of previous 2 numbers

// [[start-0,1]1, 2,3,5,8,13,21,34....................]
// index
// [0,1,2,3,4,5,6,...........]

//fib(n) = fib(n-1) + fib(n-2)
// fib(0)=0
// fib(1)=1
// fib(2)=1
// fib(3)=2
// fib(4)=3

// fib(n) = fib(n-1) + fib(n-2)
// fib(4) = fib(3) + fib(2) => 2+1 = 3

// problem fib(n){
// return fib number (n)position}

// 2 approach
//1) iterative approach - topdown approach - for loop(i=2;i<n;i++) sum and return - works forward

//2) recursive approach - works backward - bottom up approach
//  recursive tree  --- stops not until return value  - end values -basecase
// function calls two other functions  to find out its value - recursive case
//  once value found keeps returning until 

// at each recursion level - fib(4) return fib(3) + fib(2)

// base case - start 1,n => @ n=1 gives 1  @ n=0 gives 0 
// this code will run two times more again again again
// calculate in branches

// why it is making tree ----(called 2 times)(fib(3) + fib(2))------- makes 2 branches until the base case

function fib(n){
    if(n<=1) return  n
    
    return fib(n-1) + fib(n-2)
}

// 2 times called  n->2n->4n->8n->16n
// n*2^x
// time complexity o(2^n) - bad - solution : Dynamic programming


// internview q 2 rabbits multiply by 2 every month-  how many rabbit will be there for n month? - think in recursion