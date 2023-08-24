
var mostFrequentEven = function(nums) {
    const filteredNums = nums.filter((elem) => elem % 2 === 0);

    if (filteredNums.length === 0) return -1

    let maxOccurance = 0, count = 0;

    for (let i = 0; i < filteredNums.length; i++) {
      if (count === 0) {
        maxOccurance = filteredNums[i];
        ++count;
      } else if (maxOccurance === filteredNums[i]){
        ++count;
      } else {
        --count;
      }
    }

    return maxOccurance;
};

console.log(mostFrequentEven([0,1,2,2,4,4,1]));

