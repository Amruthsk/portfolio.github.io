// Bubble-sort
// bubble sort algorithm, where adjacent elements are compared and swapped to move larger elements to the end of the list.
// why name bubble sort?
//- after 1st iteration - largest number @ end - bubbling up the largest number at the end

// [5,2,4,1] -> [1,2,4,5] sorted & ascending order

// Approach
// //comparison
// - check values pair by pair
// - 5 vs 2 -> less------> high - shift
// - check first 2 numbers ->swap if needed yes [2,5]
// - next pair check [5,4]-> swap  [4,5]
// - next pair check [5,1]-> swap  [1,5] -> [2,4,1,5]
// - swapped 2 number. *3 times comparing
//  [2,4,1,5]
// - next pair check [2,4]-> No swap  [2,4]
// - next pair check [4,1]-> swap  [1,4]
// - next pair check [4,5]-> No swap  [4,5] -> [2,1,4,5]

// - swapped 1 number. *3 times comparing
// [2,1,4,5]
// -- next pair check [2,1]-> swap  [1,2]
// - next pair check [2,4]-> No swap  [2,4]
// - next pair check [4,5]-> No swap  [4,5] -> [1,2,4,5]

// - swapped 1 number. *3 times comparing

// - comparison 9
// // optimization

// n =4 
// @ after 1st iteration 3 comparison  - [2,4,1,5] 5 last position -  correct position
// @ after 2nd iteration 2 comparison - [2,1,4,5] 4 second last correct position
// @after 3rd iteration 0 comparison -[1,2,4,5]


// comparison 6 always iterates for  
// condition for loops for iterating
// - (n-1) - outerloop
// - 1st - 3times 
// - 2nd - 2times
// - 3rd - 0 times
// -(n-i-1) - innerloop
// // how to write code for this

// - loop  & iteration (n-1)....1 & comparing (>)  decreases

// n=4

function bubble(arr){
let n = arr.length;

for( let i = 0; i <= n-1;i++){

// improvement#1 - tracking sorting
let isSwapped = false;

// how many comparison 
for (let j = 0; j < n-i-1; j++){
    if (arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;

        isSwapped = true;

    }
}

if(!isSwapped) break;

}

return arr;

}


// Time & Space complexity
// - outer loop - (n-1)times 
// - inner loop- (n-i-1)times
// - worstcase - loop runs (n-1)*(n-i-1) Time = (n^2) => bad sorting time complexity- therefore not preferred in production
// - Space = O(1)

// // improvement #1
// - imporve the time complexity   Time = (n^2) is constant but can improve the method 

// - give an already sorted array - applies the bubblesort

// - [9,1,2,3]
// - 1st iteration -[1,2,3,9] 
// - algorithm => 2nd iteration

// - improvement - if any iteration no swaping happening  -> need to stop bubblesort at that point 
// - iteration where no swaping - stop it!