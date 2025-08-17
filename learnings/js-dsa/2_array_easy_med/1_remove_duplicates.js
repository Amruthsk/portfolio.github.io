//use in-place techniques to eliminate duplicates from a sorted array, returning the length of the modified array.
//copy

function removeduplicate(nums){
    //two pointer
    let x = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > nums[x]){//compared in the given array
        x += 1;
        nums[x] = nums[i]//changes made in the given array
        }
        


    }
    
    return x + 1; //index start from 
}

let arr = [1,1,1,2,2,2,3,3,3,4,4,4,4,5,5,5,45]
console.log(removeduplicate(arr));