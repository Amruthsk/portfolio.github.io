// 231 power of two

// how to find the power of 2
// even no
// n/2 -> recursion on dividing -> 1 power of 2
// odd no cannot be a power of 2
// n/2 -> recursion -> 0 or less than 0

function powerOfTwo(n){
if(n == 1){ return true}
else if ( n < 1 || (n%2 !== 0)) return false;
return  powerOfTwo(n/2)
}


console.log(powerOfTwo(13));
