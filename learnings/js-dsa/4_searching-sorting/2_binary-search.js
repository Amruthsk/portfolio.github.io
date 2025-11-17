// searches for an element inside an array/constrint:{sorted array}
// 704
// - searches for an target inside the sorted array
// - loop through all the elements
// - if it is present (element == target) or not (element != target)
// - if present - what index - return index
// - if not present -  return -1


// Binary search
// - given array & target
// - array sorted - [ ascending ] 

// # How binary search works 
// - sorted array -> find middle element - divide ->search -divide -search
// - finding middle element - take two pointer - Left,right - rep index
// - middle = right index + left index /2 = middel index round down - ignore decimal - floor
// - is middle element = target - yes -> return middle element index / NO
// - is middle element < target - yes -> fixed right pointer, change left pointer middle-element index + 1 and again find middle value  -  middle = right index + left index /2 = middel index  & check middle == target -> return -> repeat till reached/No
// - 3 cases  - less than fixed left; right= m-1 | equal  return m| greater than fixed right; left = m+1

// - Loop -  linear - forloop
// - random position  - use While Loop

// //base condition - important train to think  test case
// - incase of target not present inside the array- 
// m , m+1
// m,m
// m-1,m ---->if r < l- if right pointer less tha left pointer ->  cannot find 
//if the array has only one element -  ideal condition  r <= l

function(nums,target){
    let leftpointer = 0;
    let rightpointer = nums.length -1;

    while(rightpointer > leftpointer ){
        middle = Math.floor((leftpointer + rightpointer )/2);
        if(target == middle){}
        else if(target < middle){
            rightpointer = middle + 1;
        }
        else {
            leftpointer = middle + 1;
        }

    
    }

    return -1:
}

var search = function(nums, target) {
    let leftpointer = 0;
    let rightpointer = nums.length -1;
    while(leftpointer <= rightpointer ){
        let middle = Math.floor((leftpointer + rightpointer)/2);
        if(target == nums[middle]){return middle}
        else if(target < nums[middle]){ rightpointer  = middle - 1}
        else { leftpointer = middle + 1}

    }
    return -1
    
};



// Time and Space complexity of binary search
// - after every iteration ->  sample size reduces by half becoz pointer movers
// - stops @ one element when left and right meet
// - n * 1/2*1/2*1/2.....* x times = 1
// - n/2^x = 1 => 2^x = n = x = logbase2 n

// - log2n 
// n = 10-> 10/5/2/1 -> 3 iteration
// n = 100 -> 100/50/25/12/6/3/1 -> 6 iteration
// n = 1000 -> 1000/500/250/125/64/32/16/8/4/2/1 -> 10 iteration

// - log2 10  = 3 
// - log2 100 = 6
// - log2 1000 = 10

// - dividing array by 2 => timecomplexity  comes to o(log n)


// - space complexity - used 3 variables (leftpointer,rightpointer,middle) =>O(3) trivial => O(1)