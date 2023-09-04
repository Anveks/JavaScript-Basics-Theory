
var maxSum1 = function(nums) {

  let maxSum = 0;
  for (let i = 0; i < nums.length; i++){
    for (let j = 0; j < nums.length; j++) {
      if (i === j) continue;
      console.log("i:" + i);
      console.log("j:" + j);
      if (getMaxDigit(nums[i]) == getMaxDigit(nums[j])) {
        maxSum = Math.max(maxSum, nums[i] + nums[j]);
      }

    }
  }

  function getMaxDigit(n) {
    return Math.max(...n.toString().split(""));
  }

  return maxSum || -1;

};

console.log(maxSum1([51,71,17,24,42]));

// --------------------------------------------------------

var maxSum = function(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
          if (i === j) continue;
          if (maxDigit(nums[i]) === maxDigit(nums[j])) {
              max = Math.max(max, nums[i] + nums[j]);
          }
      }
  }
  return max || -1;
};

function maxDigit(n) {
  if (n < 10) return n;
  return Math.max(n % 10, maxDigit(Math.floor(n / 10)));
}


console.log(maxSum([51,71,17,24,42]));


