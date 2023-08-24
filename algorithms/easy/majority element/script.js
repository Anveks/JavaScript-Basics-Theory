
var majorityElement = function(nums) {
  // Non-optimized:
  // let hash = {};

  // for (let i = 0; i < nums.length; i++) {
  //   if (!hash.hasOwnProperty(nums[i])) {
  //     hash[nums[i]] = 1;
  //   } else {
  //     ++hash[nums[i]];
  //   }
  // }
  
  // const maxVal = Math.max(...Object.values(hash));

  // for (let elem in hash) {
  //   if (hash[elem] === maxVal) {
  //     return elem;
  //   }
  // }

  // Optimized:
  let highestOccurance = 0, count = 0; // declaring and initializing multiple variables at the same time

  for (let i = 0; i < nums.length; i++) {

    if (count === 0) { // in case count is zero
      highestOccurance = nums[i]; // set the nums[i] as the highest occurance 
      count = 1; // increment the count
    } else if (highestOccurance === nums[i]) { // in case the second num is still the same
      ++count; // increment the count
    } else {
      --count; // in case not: decrement; if count goes back to zero - highest score changes
    }
  }

  return highestOccurance;
    
};

console.log(majorityElement([3,3,4,4,2,2,2]));
