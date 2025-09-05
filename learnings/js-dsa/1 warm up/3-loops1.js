
//for loop
//to print hello world -20 times
// [[Loop]] ⊃ *for loop* ⇔ {Iteration, Indexed, Range-bound} @ [i] → [Start i=1] --- {Condition i<21} → (Execute: console.log @ "Hello World") → (Modify i++)for (let i = 1; i < 21; i++){
    console.log("Hello World")

// [[Loop]] ⊃ *for loop* ⇔ {Counter-driven, Range-bound} @ [i] → [Start i=3] --- {Condition i<5} → (Execute: console.log @ "Hello World" + [i]) → (Modify i++)
for (let i = 3; i < 5; i = i + 1) {
  console.log("Hello World" + " " + i);
}
//[Array] ⊂ [[Elements]] @ (Index) → (Repeat: (Access [Element]) → (Action @ [Element]))
let arr = [10, 12, 3, 4, 5, 34, 9];
//[let arr] → [Array]{[0]:10, [1]:12, [2]:3, [3]:4, [4]:5, [5]:34} ↔ {Indexed, Mutable, Size: 7}


console.log(arr);

let length = arr.length;
console.log(length);

// [[Loop]] ⊃ *for loop* ⇔ {Indexed Iteration} @ [i] @ [arr] → [Start i=0] --- {Condition i < arr.length} → (Access arr[i]) → (Execute: console.log @ [arr[i]]) → (Modify i++)
for (let i = 0; i < length; i++) {
  console.log(arr[i]);
}

//([[Loop]] ⊃ *for loop) @ [Program Counter] ↔ [arr] → (console.log @ [arr[i]])
// [[Loop]] ⊃ *for loop* ⇔ {Conditional Iteration} @ [i] @ [arr] → [Start i=0] --- {Condition i < arr.length} → (Access arr[i]) ⇒ {Sub-Condition arr[i] % 2 == 0} → (Execute: console.log @ [arr[i]]) → (Modify i++)//print all the even number in the console
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) console.log(arr[i]);
}
//[Loop] ⊂ {Condition} ⇒ (Conditional Action)
//[[Loop]] ⊃ *for loop* ⇔ {Conditional Iteration} @ [i] @ [arr] → [Start i=0] --- {Condition i < arr.length} → (Access arr[i]) ⇒ {Sub-Condition arr[i] % 2 == 1} → (Execute: console.log @ [arr[i]]) → (Modify i++)

//print all the odd number in the console
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 1) console.log(arr[i]);
}

//[[Loop]] ⊃ *while loop* ⇔ {Condition-driven Iteration} @ [i] → [Start i=0] --- {Primary Condition i<5} ⇒ (Execute: console.log @ "Easy") → (Modify i++)

//while loop
let i = 0;

while (i < 5) {
  console.log("Easy");

  i++;
}



//high level

// [[Function]] ⊃ *getEvenNumbers* ⇔ {Input: [Array], Output: [Array]} @ [Execution Context] ⇒ (Process [InputArray] → (Filter {Even Numbers}) → (Return [EvenNumbers]))

//Function Definition: [[Function]] ⊃ *getEvenNumbers* ⇔ {Parameters: [inputArray], Returns: [evenNumbers]} @ [Scope]
// /Input Validation: (Check: !Array.isArray @ [inputArray]) ⇒ {Invalid Input} → (Action: console.error) → (Action: return)
//Result Initialization: [evenNumbers: Array] ⊂ {}
//[[Loop]] ⊃ *for-of loop* @ [item] ∈ [inputArray] ⇒ {Condition: typeof item === 'number' && item % 2 === 0} → (Action: evenNumbers.push @ [item])
//(Action: return @ [evenNumbers])

//[[Function Class]] ⊃ *getEvenNumbers* ⇔ {length:1 (x),code: ()} → [label:getEvenNumbers]

//[[Function]] ⊃ *getEvenNumbers ⇔ {Parameters: [inputArray], Returns: [evenNumbers]} @ [Scope]

function getEvenNumbers(inputArray) { // p `inputArray`

  //  Handle the "not an array" edge case.
  if (!Array.isArray(inputArray)) {
     console.error("Invalid input: An array is required.");
    return; // Return an empty [] to prevent errors.
  }

  // a: Create the new  to hold the result.
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

// [[Function]] ⊃ *getEvenNumbers* ⇔ {Purpose: Extract Even Numbers, Parameters: [inputArray], Returns: [evenNumbers]} @ [Execution Context] → (Validate [inputArray] → (If Invalid: (Error) & (Return Empty))) → [evenNumbers: Array] ⊂ {} → [[Loop]] @ [item] ∈ [inputArray] ⇒ {item ∈ Numbers AND item % 2 == 0} → (Add [item] @ [evenNumbers]) → (Return [evenNumbers])






// edge cases
console.log(getEvenNumbers([10, 12, 3, 4, 5, 34, 9, 0, -2])); // Expected: [10, 12, 4, 34, 0, -2]
console.log(getEvenNumbers([1, 3, 5]));                   // Expected: []
console.log(getEvenNumbers([]));                          // Expected: []
console.log(getEvenNumbers([2, 'a', 4, null, 8]));       // Expected: [2, 4, 8]
console.log(getEvenNumbers("not an array"));              // Expected: []
console.log(getEvenNumbers([null,undefined,4,6])); 