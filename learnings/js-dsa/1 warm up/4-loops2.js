


// ✅ Problem: Write an function that searches for an element in an array and returns the index if the element is not present return -1
// ✅ Approach: Loop & conditional check - if the element matches the target number, return the index or -1 if not found
// ✅ Time: O(n), Space: O(n)

let arr = [10, 2, 3, 4, 5, -4];

function searchElement(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    // Use i < arr.length
    if (arr[i] == num) return i;
  }
  return -1; // Return -1 only after the loop ends
}

console.log(searchElement(arr, 4)); // Output: 3


// ✅ Problem: Write an function that returns no. of negative number in an array
// ✅ Approach: Loop through the array and count negative numbers  iterate over a array  to check one by one-traverse through the array if i see negative intialize counter - maintain the count - increase the count
// ✅ Time: O(n), Space: O(1)

let arr = [10, -2, 3, -4, 5, -4];

function countNegatives(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

console.log(countNegatives(arr));// Output: 3

// ✅ Problem: Write an function that returns the largest number  in an array
// ✅ Approach: Loop through the array, intialize max number and keep track of the largest number found so far
// ✅ Time: O(n), Space: O(1)

let arr = [10, -2, 3, -4, 5, -4];
function findLargest(arr) {
    let max = arr[0]; // Initialize max with the first element
    for (let i = 1; i < arr.length; i++){
        if (arr[i]>max){
            max = arr[i]; // Update max if a larger number is found
        }
    }
    return max;
}

res = findLargest(arr);
console.log(res); // Output: 10

// **When to use this?**

// - This approach is clean and intuitive.
// - Make sure the array is not empty to avoid errors.

//To find
//max no -  -infinity
//min no - + Infinity
//Alternate
function findLargest(arr) {
    let largest = -Infinity; // Safe initial value
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
  }
  
  let arr2 = [5, 0, 10, 8, 17, 1];
  console.log(findLargest(arr2)); // Output: 17
  
  // ** Why`-Infinity` ?**

//     - JavaScript provides a value called`Infinity`.
// - Any number will be greater than`Infinity`, making it a safe starting point.

//problem: Write an function that returns the smallest number in an array
// ✅ Approach: Loop through the array, initialize min number and keep track of the smallest number found so far
// ✅ Time: O(n), Space: O(1)
function findSmallest(arr) {
  let mini = Infinity; // Safe initial value
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mini) {
      mini = arr[i];
    }
  }
  return mini;
}

let arr2 = [5, -19, 10, 8, 17, 1];
console.log(findSmallest(arr2));

