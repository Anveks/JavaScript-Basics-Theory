
const findPeek = nums => {
  let peak = nums[0];
  let peakIndex = 0;

  for (let i = 0; i < nums.length; i++){
    if (nums[i] > peak) {
      peak = nums[i];
      peakIndex = i;
    }
  }

  return peakIndex;
};

console.log(findPeek([-2147483648,-2147483647]));

// BINARY:

const findPeakBinary = nums => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[mid + 1]) {
      // You're on the decreasing slope, so the peak is to the left.
      right = mid;
    } else {
      // You're on the increasing slope, so the peak is to the right.
      left = mid + 1;
    }
  }

  // At the end of the loop, left and right will be pointing to the peak element.
  return left;
};

console.log(findPeakBinary([-2147483648, -2147483647]));