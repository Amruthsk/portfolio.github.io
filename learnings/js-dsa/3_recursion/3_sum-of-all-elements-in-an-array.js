// using recursion find sum of all elements in an arry

let arr = [5,3,2,0,1]

// first find the sub problem



// sum(arr)


// proper thought process

// first find the sub problem
// n length
// go for 4 to 0
// return arr[n] + sum(n-1) recursive case
// if(n==0) return arr[0] basecase


function sum(n){
    if(n===0)
    {
        return arr[n];
    }
    return arr[n] + sum(n-1);
}


console.log(sum(arr.length - 1));


let testarray = [10, 20, 30, 40];

// function sumarr(arr,n){
//     if(n===0){ return arr[n]}
//     return arr[n] + sumarr(arr, n-1);

// }

// console.log(sumarr(testarray, testarray.length - 1));

// sum of all the odd numbers in the array
// n
// isOdd =(arr[i]%2 !== 0);
//base condition -  last  
// -odd{add}
// -notodd{0}

const testArray = [11, 20, 31, 40, 5];

function sumOdd(arr,n){
    if( n===0 ){return arr[n]%2 !== 0 ? arr[n] : 0}
    return (arr[n] % 2 !== 0 ? arr[n] : 0) + sumOdd(arr, n - 1);

}

console.log(sumOdd(testArray, testArray.length - 1));

