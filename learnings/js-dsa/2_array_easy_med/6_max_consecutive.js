var findMaxConsecutiveOnes = function (nums) {
  let maxcount = 0;
  let currcount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      currcount++;
    } else {
      maxcount = Math.max(maxcount, currcount);
      currcount = 0;
    }
  }
  return Math.max(maxcount, currcount);
};
