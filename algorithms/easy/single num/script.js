
var singleNumber = function(nums) {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
      if (!hash.hasOwnProperty(nums[i])){
        hash[nums[i]] = 1;
      } else {
        ++hash[nums[i]]
      }
    }

    for (let key in hash) {
      if (hash[key] === 1) return key; 
    }
};

console.log(singleNumber([4,1,2,1,2]));