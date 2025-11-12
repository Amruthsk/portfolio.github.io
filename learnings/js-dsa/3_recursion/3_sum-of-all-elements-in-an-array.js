// using recursion find sum of all elements in an arry

let arr = [5,3,2,0,1]

// first find the sub problem


// function sum(arr) {
//   for (let i = 0; i > arr.length; i++) {
//     if (i <= 0) return a[i];
//     return a[i] + sum(i+1);
//   }
// }

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



// sum of all the odd numbers in the array
// n
// isOdd =(arr[i]%2 !== 0);
//base -  last  
// -odd{add}
// -notodd{0}


