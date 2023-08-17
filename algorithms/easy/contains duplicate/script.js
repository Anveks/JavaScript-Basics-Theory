
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
  const newArr = Array.from(new Set(nums));
  return newArr.length === nums.length ? false : true;
};