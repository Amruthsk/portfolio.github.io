var missingNumber = function (nums) {
  let n = nums.length;
  let totalsum = (n * (n + 1)) / 2;
  let partialsum = 0;
  for (let i = 0; i < n; i++) {
    partialsum = partialsum + nums[i];
  }
  return totalsum - partialsum;
};
