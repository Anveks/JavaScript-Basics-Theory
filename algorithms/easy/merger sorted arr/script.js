
const nums1 = [1,2,3,0,0,0]
const m = 3
const nums2 = [2,5,6]
const n = 3

var merge = function(nums1, m, nums2, n) {
  const sortedArr = [...nums1.slice(0, m), ...nums2.slice(0, n)].sort((a, b) => a - b);
  return sortedArr;
};

console.log(merge(nums1, m, nums2, n));

// ----------------------------------------------
