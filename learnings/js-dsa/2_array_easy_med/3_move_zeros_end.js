
//swap
var moveZeroes = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {//collecting nonzero front
    if (nums[i] != 0) {
      nums[x] = nums[i];
      x += 1;
    }
  }
  for (let i = x; i < nums.length; i++) {//filling in 0 at the end
    nums[i] = 0;
  }

  return nums;
};


console.log(moveZeroes([0, 1, 0, 3, 12]));

var swapZeroes = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    //collecting nonzero front
    if (nums[i] != 0) {
      [nums[x],nums[i]]=[nums[i],nums[x]];
      x +=1;
  }
}

  return nums;
};

console.log(swapZeroes([0, 1, 0, 3, 12]));


var sortEvenOdd = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    //collecting nonzero front
    if (nums[i] % 2 == 0) {
      [nums[x], nums[i]] = [nums[i], nums[x]];
      x += 1;
    }
  }

  return nums;
};

console.log(sortEvenOdd([0, 1, 0, 3, 12]));
console.log(sortEvenOdd([3, 1, 2, 4]));
console.log(sortEvenOdd([0]));