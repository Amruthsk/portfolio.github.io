var missingNumber = function (nums) {
  let n = nums.length;
  let totalsum = (n * (n + 1)) / 2;
  let partialsum = 0;
  for (let i = 0; i < n; i++) {
    partialsum = partialsum + nums[i];
  }
  return totalsum - partialsum;
};


// 448 Find All Numbers Disappeared in an Array

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

var findDisappearedNumbers = function (nums) {
  const numSet = new Set(nums);
  const result = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!numSet.has(i)) {
      result.push(i);
    }
  }
  return result;
};