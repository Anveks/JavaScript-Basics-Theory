

var removeElement = function(nums, val) {
  let uniqueNums = 0;
  for (let i = 0; i < nums.length; i++){
    if (nums[i] !== val){
      ++uniqueNums;
    }
  }
  return uniqueNums;

  // version with arr methods:
  // return nums.filter((elem) => elem !== val).length;
};

console.log(removeElement([3,2,2,3], 3));