// What are arrays
//array -ds that stores large number of data
//way - orientation - Linear contionus orientation in memory space
//ex: Images whenever there is large number of data saved in linear continous orientation (3d array) there is a array

//arrays store hetrogenous value -different data type

// creation of arrays 
let ar = [1,2,3,4,5,6,false,"abc",true,null] //best way
console.log(ar);

//array - using index - access & updation of  value  possible - mutable - update
//strings - access - cant update value - immutable hence dont updat

// Index - positioning-unique mapping of characters of string to a unique no./position/unique mapping
//q-start-0 , end - length - 1;
//a-var[]; access & extract & update

let ar1 = [];// empty array
ar1[0] ='A';
ar1[1] = "B";
ar1[2] = "c";
ar1[3] = "d";
ar1[4] = "3";

console.log(ar1)

// using new kw

let ar2 = new Array(1,2,3,4,5,'debugger',)
console.log(ar2);

console.log(typeof ar2);


// opreation
let ar3 = [1,2,3,4,5,6,6]

console.log(ar3);

// add element at the end of the array
ar3.push(7);

console.log(ar3);

// add element at the front of the array
ar3.unshift(0);

console.log(ar3);

// add element inbetween index 3: 3--->3:44

ar3[3] = 44;

console.log(ar3);

//remove element form rear end
ar3.pop()

console.log(ar3);

//remove element form front end
ar3.shift()

console.log(ar3);

// delete element and leave it empty

delete ar3[3];

console.log(ar3);


// delete element completely

ar3.splice(3,1);

console.log(ar3);

ar3.splice(5, 1);

console.log(ar3);


// important properties
//find length of the array we have
console.log(ar3.length);

//sort an array
ar3.unshift(10);
console.log(ar3)

//sort method
ar3.sort();
console.log(ar3);

//reverse method
ar3.reverse();
console.log(ar3);

//slice - to fetcha part of a array indexed 2,3,4

ar3.reverse();
console.log(ar3);

//assignment is important
ar5 = ar3.slice(2,4); //from second to the fourth(non inclusive)
console.log(ar5);

ar6 = ar3.slice(2, 5);
console.log(ar6);


console.log("for of loop for arrays");

let array = [1,3,4,6,9,12,81]; // can acess value directly without tracking index,length

for (let value of array){
    console.log(value);
}



let name = "VIKRAM" // can acess value directly without tracking index,length

for (let char of name) {
  console.log(char);
}

//q- length
console.log("length of string: ",name.length);

//a -iterate all char through index
for(let idx= 0; idx <=((name.length) - 1); idx++){
  console.log("index with char : ",idx, name[idx])
}

//problem - check for palindrome for number

//approach
// numbers cannot be accessed as string individualy  -it cannot be transversed using indexes-  dont possess the access through indexes therefore- convert
//check directly the given no. by comparing each end -if else
//comparing process repeated for all the given numbers- loop

function checkPalindrome(n){
  if (n < 0) {
    return false;
  }
  //converting number to string
  let str = ""+n;
  let i = 0;
  let j = (str.length)-1;
  while(i<=j){// two pointer method
    if(str[i]==str[j]){
      i++;//move from s-> e
      j--;//move from e -> s
    }
    //condition failed not palindrome
    else{return false;}
  }
  //loop completed palindrome
  return true;
}

let num = checkPalindrome(1591);
console.log(num);

console.log(`Input: -1, Output: ${checkPalindrome(-1)}`); // Expected: false, Actual: true

//number-d, check panlidrome-a, palindrome-q, non palindrom -ab

//1) palindrome - no that reads the same forward & backward
// function must take an integer x. It must return false for all negative numbers. For non-negative numbers, it must return true if its sequence of digits is identical when read forwards and backwards, and false otherwise.

//2)Handle the edge case: If the number is negative, immediately return false.
// Convert the number substance into a string quality.
// Perform a series of action to reverse this new string.
// Compare the original string with the reversed string.
// Return the result of this comparison.

//[Input: 121] --(toString → split → reverse → join)--> [Reversed: "121"] ⇄ ✅["121"]


function isPalindrome(x){
//check negative numbers
  if(x<0){
    return false;
  }
  //number -> string
  const originalString = x.toString();
  //split = string-> array
  //reverse = reorders array
  //join= array -> string
  const reversedString = originalString.split('').reverse().join('');
  //comparison
  return originalString === reversedString;
}

console.log("Testing similar (should be true):");
console.log(`Input: 121, Output: ${isPalindrome(121)}`); // Expected: true
console.log(`Input: 7, Output: ${isPalindrome(7)}`);     // Expected: true
console.log(`Input: 88, Output: ${isPalindrome(88)}`);    // Expected: true

console.log("\nTesting non similar (should be false):");
console.log(`Input: 123, Output: ${isPalindrome(123)}`); // Expected: false
console.log(`Input: -121, Output: ${isPalindrome(-121)}`);// Expected: false
console.log(`Input: 10, Output: ${isPalindrome(10)}`);   // Expected: false

// Given an array which only contains 0s and 1s shuffled randomly, write a function that rearranges the data such that all 0s are present before all 1s.

//array-unsorted-sorted-rearrang- class : array partition - two pointer method

//sorted array-  assume k index  0 to k-1 index - 0 k to end index -1, empty array or array with 1 type - sorted array

//left starting at the beginning, and right starting at the end.
// The left pointer- find the first 1 that is out of place.
// The right pointer- find the first 0 that is out of place.
// When such a pair is found, the critical step is to swap their positions. This moves both elements closer to their correct final regions.
// Continue this process until the pointers cross each other. 
//[Array] ⇄ { [left] → (Swap ⇄ Mismatch) ← [right] } => [Sorted Array]

function sortZerosAndOnes(arr){
  //for empty array
  if(arr.lenght <=1){
    return arr;
  }

  //assign pointer
  let left = 0;
  let right = arr.length - 1;

  //till pointer dont cross eachother
  while(left < right){

    while (arr[left] === 0 && left < right) {
      left++;
    }
    while (arr[right] === 1 && left < right) {
      right--;
    }
    if (left < right) {
      // The Swap  using array destructuring .
      [arr[left], arr[right]] = [arr[right], arr[left]];
    
      // Move pointers to continue the search.
      left++;
      right--;

    }
  return arr;
  }

}

console.log("Testing a mixed array:");
console.log(sortZerosAndOnes([0, 1, 0, 1, 1, 0])); // Expected: [0, 0, 0, 1, 1, 1]

console.log("\nTesting edge cases:");
console.log(sortZerosAndOnes([])); // Expected: []
console.log(sortZerosAndOnes([1, 1, 0, 0])); // Expected: [0, 0, 1, 1]
console.log(sortZerosAndOnes([0, 0, 0])); // Expected: [0, 0, 0]
console.log(sortZerosAndOnes([1, 0])); // Expected: [0, 1]