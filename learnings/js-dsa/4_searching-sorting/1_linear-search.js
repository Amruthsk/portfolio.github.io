// searches for an element inside an array
// - searches for an target inside the array
// - loop through all the elements
// - if it is present (element == target) or not (element != target)
// - if present - what index - return index
// - if not present -  return -1


let arr = [4,9,1,0,2];

function linearSearch(arr,target){
    for(let i = 0; i< arr.length; i++){
        if(arr[i] === target){ return i;}
    }
    return -1
}

let result = linearSearch(arr,9);
console.log(result)