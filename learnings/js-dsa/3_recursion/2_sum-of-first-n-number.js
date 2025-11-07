// sum of first n numbers
// [A,B,C,D,E]
// - behind -A - 1 + behind B
// - behind -B - 1 + behind C
// - behind -C - 1 + behind D
// - behind -D - 1 + behind E
// - E - 0 behind

// [(1-for-total-including-A+4)A(1-for-B+3),B(1-for-c+2),C(1-for-D+1),D(1-for-E+0),E(0)]


// - [A,B,C,D,E]

// - [5(15)+4(10)+3(6)+2(3)+1(0)]

// - n = 5

function sum (n){
    if(n==0) return 0;
    return n + sum(n-1)

}

let sum_n = sum(5);
console.log(sum_n);

// @ call stack
// - 5+sum(4) -> 4+sum(3) -> 3+sum(2) -> 2+sum(1)->1+sum(0)->0


// - 5+10 -> 4+6 -> 3+3 -> 2+1->1+0->0

// - return 15

// tree fromat - recursion tree till the basecase - > comeback again
// whole tree with 1 line of code - code small
// thinking in recursion is very important


// how to find a sub problem is important skill in recursion
