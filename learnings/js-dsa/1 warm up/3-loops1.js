//to print hello world -20 times
for (let i = 1; i < 21; i++){
    console.log("Hello World")
}

for (let i = 3; i < 5; i = i + 1) {
  console.log("Hello World" + " " + i);
}

let arr = [10, 12, 3, 4, 5, 34, 9];

console.log(arr);

let length = arr.length;
console.log(length);

for (let i = 0; i < length; i++) {
  console.log(arr[i]);
}

//print all the even number in the console
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) console.log(arr[i]);
}

//print all the odd number in the console
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 1) console.log(arr[i]);
}

//while loop
let i = 0;

while (i < 5) {
  console.log("Easy");

  i++;
}


function getEvenNumbers(inputArray) { // p `inputArray`

  //  Handle the "not an array" edge case.
  if (!Array.isArray(inputArray)) {
     console.error("Invalid input: An array is required.");
    return; // Return an empty [] to prevent errors.
  }

  // a: Create the new Dravya to hold the result.
  const evenNumbers = [];

  //  The repetitive examination of the input .
  for (const item of inputArray) {
    
    //  (Inference): A nested inference to check the value.
    // H  Is the item a number AND is its remainder when divided by 2 zero?
    if (typeof item === 'number' && item % 2 === 0) {
      
      // K perform the action of adding the item
      // to our new Dravya.
      evenNumbers.push(item);
    }
  }

  // K `return` action delivers the final (Result).
  return evenNumbers;
}
// edge cases
console.log(getEvenNumbers([10, 12, 3, 4, 5, 34, 9, 0, -2])); // Expected: [10, 12, 4, 34, 0, -2]
console.log(getEvenNumbers([1, 3, 5]));                   // Expected: []
console.log(getEvenNumbers([]));                          // Expected: []
console.log(getEvenNumbers([2, 'a', 4, null, 8]));       // Expected: [2, 4, 8]
console.log(getEvenNumbers("not an array"));              // Expected: []
console.log(getEvenNumbers([null,undefined,4,6])); 