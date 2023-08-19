
const nums = [1,2,3,1];

var findPeakElement = function(nums) {
    return nums.indexOf(Math.max(...nums));
};

console.log(findPeakElement(nums));