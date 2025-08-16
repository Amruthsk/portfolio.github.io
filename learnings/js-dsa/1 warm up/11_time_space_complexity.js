function getFirstElement(arr) {
  return arr[0]; // One action
}

// Time Complexity: O(1) (Constant Time) accessing element
// Space Complexity: O(1) (Constant Space) no new variables, arrays, or objects.

function findSum(arr) {
  let sum = 0; // One action
  for (let i = 0; i < arr.length; i++) {
    // Loop runs 'n' times
    sum += arr[i]; // One action, repeated 'n' times
  }
  return sum; // One action
}



// Time Complexity: O(n) (Linear Time) for loop
// Space Complexity: O(1) (Constant Space) sum,i

function duplicateArray(arr) {
  let newArr = []; // Create a new array
  for (let i = 0; i < arr.length; i++) {
    // Loop runs 'n' times
    newArr.push(arr[i]); // Add an element to the new Dravya 'n' times
  }
  return newArr;
}

// Time Complexity: O(n) (Linear Time) -  for loop
// Space Complexity: O(n) (Linear Space) - newArr array(most significant), i


function hasDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    // Outer loop runs 'n' times
    for (let j = 0; j < arr.length; j++) {
      // Inner loop runs 'n' times FOR EACH outer loop
      if (i !== j && arr[i] === arr[j]) {
        // Comparison 
        return true;
      }
    }
  }
  return false;
}

// Time Complexity: O(n²) (Quadratic Time) - nested loop
// Space Complexity: O(1) (Constant Space) - i,j
// This assumes the input array 'arr' is already sorted.
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1; // Discard the left half
    } else {
      right = mid - 1; // Discard the right half
    }
  }
  return -1;
}

// Time Complexity: O(log n) (Logarithmic Time) - halving pattern
// Space Complexity: O(1) (Constant Space) - left, right, and mid