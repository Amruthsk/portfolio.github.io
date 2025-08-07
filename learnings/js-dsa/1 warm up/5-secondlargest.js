// ✅ Problem: Write an function that returns the 2ndlargest number  in an array
// ✅ Approach: Loop through the array, intialize max number and keep track of the largest number found so far and swap whenever the largest number gets update
// ✅ Time: O(n), Space: O(1)


function secondlargest(arr) {
 if (!Array.isArray(arr) || arr.length < 2) {
    return null; // A clear signal for the Abhāva of a second largest.
  }
  let largest = -Infinity;
  let seclargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      seclargest = largest;
      largest = arr[i];
    } else if (arr[i] > seclargest && arr[i] != largest) {
      seclargest = arr[i];
    }
  }
  return seclargest;
}
//[num > L?] → [SL=L, L=num] || [num > SL?],`largest > arr[i] > seclargest`? → [SL=num]
console.log(secondlargest[(10, 2, 3, -4, 5, -4)]); // Expected: undefined, undefined
console.log(secondlargest([-10, -5, -2])); // Expected: -5
console.log(secondlargest([])); // Expected: -Infinity
console.log(secondlargest([5, "a", 10, null, 17])); // Expected: 10
console.log(secondlargest[(4, 9, 0, 2, 8, 7, 1)]); // expected -8 , actual- undefined
console.log(secondlargest([]));
console.log(secondlargest([9,8,7]));
console.log(secondlargest([9,8]));
console.log(secondlargest([20, 20, 10]));

//edge cases - empty array, negative numbers,duplicates,infinite numbers



function findSecondLargest(arr) { 

  if (!Array.isArray(arr) || arr.length < 2) {
    return null; 
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const number of arr) {

    //  Ignore non-numeric Dravyas inside the array.
    if (typeof number !== 'number') {
      continue; 
    }

  
    if (number > largest) {

      secondLargest = largest;
     
      largest = number;

    // H The `number` value is less than the largest but greater than the SL.
    } else if (number > secondLargest && number < largest) {
      // K replaced.
      secondLargest = number;
    }
  }

  // Final: If `secondLargest` is still -Infinity,
  // it means no unique second largest was ever found (e.g., in [5, 5, 5]).
  // This is a final check for absence.
  return secondLargest === -Infinity ? null : secondLargest;
}

// Pramāṇa (Validation against the Lakṣaṇa's edge cases)
console.log(findSecondLargest([10, 2, 8, 5]));        // Expected: 8
console.log(findSecondLargest([-10, -5, -2]));       // Expected: -5
console.log(findSecondLargest([]));                  // Expected: null
console.log(findSecondLargest([5]));                 // Expected: null
console.log(findSecondLargest([5, "a", 10, null, 17])); // Expected: 10
console.log(findSecondLargest([20, 20, 10]));        // Expected: 10
console.log(findSecondLargest([5, 5, 5]));            // Expected: null

