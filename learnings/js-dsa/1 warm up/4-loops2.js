// ✅ Problem: Write an function that searches for an element in an array and returns the index if the element is not present return -1
// ✅ Approach: Loop & conditional check - if the element matches the target number, return the index or -1 if not found
// ✅ Time: O(n), Space: O(n)

//array reduction pattern - count,max,min
//[State]{Initial} → (Iterate @ [Input Array]) ⊂ { (Compare [Element] vs [State]) ⇒ (Update [State])? } ↻ → [*Final State]

//"Find First & Exit"-search elements
//(Iterate @ [Array]) ⊂ { (Compare [Element] == [Target]) ⇒ (Return [Index]) } ↻ → (absence of Match) ⇒ (Return [-1])

let arr = [10, 2, 3, 4, 5, -4];
//[let arr] → [Array]{[0]:10, [1]:2, [2]:3, [3]:4, [4]:5, [5]:-4} ↔ {Indexed, Mutable,length:6}


//[[Function Class]] ⊃ *searchElement* ⇔ {length:2 (arr,num),code: ()} → [label:searchElement]
//Function Definition: [[Function]] ⊃ *searchElement* ⇔ {Parameters: [inputArray], Returns: [index number]}
//[[Loop]] ⊃ *for loop* ⇔ {Conditional Iteration} @ [i] @ [arr] → [Start i=0] --- {Condition i < arr.length} → (Access arr[i]) ⇒ {Sub-Condition arr[i] == num} → (return i) → (Modify i++){loop}-->finish if a[i]!= num return -1

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

let arr2 = [10, -2, 3, -4, 5, -4];
//[let arr] → [Array]{[0]:10, [1]:-2, [2]:3, [3]:-4, [4]:5, [5]:-4} ↔ {Indexed, Mutable,length:6}

//[[Function Class]] ⊃ *countNegatives* ⇔ {length:1 (arr2),code: ()} → [label:countNegatives]
//Function Definition: [[Function]] ⊃ *countNegatives* ⇔ {Parameters: [inputArray], Returns: [number of negative numbers]}
//[[Loop]] ⊃ *for loop* ⇔ {Conditional Iteration} @ [i] @ [arr] → [Start i=0] --- {Condition i < arr.length} →[let count]-> (Access arr[i]) ⇒ {Sub-Condition arr[i] < 0} → (count++) → (Modify i++){loop}-->finish  return count

// [count]{0} → (Iterate @ [Array]) ⊂ { (Check [Element] < 0) ⇒ (Increment [count]) } ↻ → [*Final count]

function countNegatives(arr2) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

console.log(countNegatives(arr)); // Output: 3

// ✅ Problem: Write an function that returns the largest number  in an array
// ✅ Approach: Loop through the array, intialize max number and keep track of the largest number found so far
// ✅ Time: O(n), Space: O(1)

//[[Function Class]] ⊃ *findLargestm* ⇔ {length:1 (arr3),code: ()} → [label:findLargestm]
//Function Definition: [[Function]] ⊃ *findLargestm* ⇔ {Parameters: [inputArray], Returns: [largest number]}
//[[Loop]] ⊃ *for loop* ⇔ {Conditional Iteration} @ [i] @ [arr] → [Start i=0] --- {Condition i < arr.length} →[let max]-> (Access arr[i]) ⇒ {Sub-Condition arr[i] > max} → (update max = arr[i]) → (Modify i++){loop}-->finish  return max
//[max]{-Infinity} → (Iterate @ [Array]) ⊂ { (Compare [Element] > [max]) ⇒ ([max] = [Element]) } ↻ → [*Final max]


let arr3 = [10, -2, 3, -4, 5, -4];
function findLargestm(arr3) {
  let max = arr[0]; // Initialize max with the first element
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Update max if a larger number is found
    }
  }
  return max;
}

res = findLargestm(arr);
console.log(res); // Output: 10

// **When to use this?**

// - This approach is clean and intuitive.
// - Make sure the array is not empty to avoid errors.

//To find
//max no -  -infinity
//min no - + Infinity
//Alternate
//[[Function Class]] ⊃ *findLargestm* ⇔ {length:1 (arr3),code: ()} → [label:findLargestm]
//Function Definition: [[Function]] ⊃ *findLargestm* ⇔ {Parameters: [inputArray], Returns: [largest number]}
//Input Validation: (Check: !Array.isArray @ [inputArray]) ⇒ {Invalid Input} → (Action: console.error) → (Action: return)
//[[Loop]] ⊃ *for loop* ⇔ {Conditional Iteration} @ [i] @ [arr] → [Start i=0] --- {Condition i < arr.length} →[let max]-> (Access arr[i]) ⇒ {Sub-Condition check type  && arr[i] > max} → (update max = arr[i]) → (Modify i++){loop}-->finish  return max

//[max]{-Infinity} → (Iterate @ [Array]) ⊂ { (Check {Type: Number} && {[Element] > [max]}) ⇒ ([max] = [Element]) } ↻ → [*Final max]
function findLargest(arr) {
  if (!Array.isArray(arr)) {
    return null; // Or throw an error, as per a stricter Lakṣaṇa.
  }
  //  Initialize the largest s with a value
  // that is guaranteed to be the absolute minimum.
  let largest = -Infinity;

  // : The repetitive examination of the input .
  for (const number of arr) {
    // Check if the current element is a valid number
    // AND if its value is greater than the current largest value.
    if (typeof number === "number" && number > largest) {
      //  If  true, update the largest value.
      largest = number;
    }
  }

  //  The `return` action delivers the final  (Result).
  return largest;
}

//edge cases
console.log(findLargest([10, -2, 3, -4, 5, -4])); // Expected: 10
console.log(findLargest([-10, -5, -2])); // Expected: -2
console.log(findLargest([])); // Expected: -Infinity
console.log(findLargest([5, "a", 10, null, 17])); // Expected: 17

let arr4 = [5, 0, 10, 8, 17, 1];
console.log(findLargest(arr4)); // Output: 17

// ** Why`-Infinity` ?**

//     - JavaScript provides a value called`Infinity`.
// - Any number will be greater than`Infinity`, making it a safe starting point.
// initial value, known as a Sentinel Value
//[-Infinity] ⇔ { < any finite number} - for finding max
//[+Infinity] ⇔ { > any finite number} - for finding min



//problem: Write an function that returns the smallest number in an array
// ✅ Approach: Loop through the array, initialize min number and keep track of the smallest number found so far
// ✅ Time: O(n), Space: O(1)

//[[Function Class]] ⊃ *findSmallest* ⇔ {length:1 (arr3),code: ()} → [label:findSmallest]
//Function Definition: [[Function]] ⊃ *findSmallest* ⇔ {Parameters: [inputArray], Returns: [smallest number]}
//Input Validation: (Check: !Array.isArray @ [inputArray]) ⇒ {Invalid Input} → (Action: console.error) → (Action: return)
//[[Loop]] ⊃ *for loop* ⇔ {Conditional Iteration} @ [i] @ [arr] → [Start i=0] --- {Condition i < arr.length} →[let min]-> (Access arr[i]) ⇒ {Sub-Condition check type  && arr[i] < min} → (update min = arr[i]) → (Modify i++){loop}-->finish  return min



//[min]{+Infinity} → (Iterate @ [Array]) ⊂ { (Compare [Element] < [min]) ⇒ ([min] = [Element]) } ↻ → [*Final min]



function findSmallest(arr) {
  let mini = Infinity; // Safe initial value
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < mini) {
      mini = arr[i];
    }
  }
  return mini;
}

let arr5 = [5, -19, 10, 8, 17, 1];
console.log(findSmallest(arr5));
