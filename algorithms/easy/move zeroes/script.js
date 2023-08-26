
var moveZeroes = function(nums) {
    for (const num of nums) {
      if (num === 0){
        nums.splice(nums.indexOf(num), 1);
        nums.push(0);
      }
    }

    return nums;
};

console.log(moveZeroes([0,1,0,3,12]));