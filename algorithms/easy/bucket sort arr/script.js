
function bucketSort(arr, bucketSize = 5) {
  if (arr.length === 0) {
      return arr;
  }

  // Find minimum and maximum values in the array
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
          min = arr[i];
      } else if (arr[i] > max) {
          max = arr[i];
      }
  }

  // Calculate the number of buckets needed
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  console.log(bucketCount);

  // Create buckets
  const buckets = new Array(bucketCount);
  for (let i = 0; i < buckets.length; i++) {
      buckets[i] = [];
  }

  // Distribute elements into buckets
  for (let i = 0; i < arr.length; i++) {
      const bucketIndex = Math.floor((arr[i] - min) / bucketSize);
      buckets[bucketIndex].push(arr[i]);
  }

  // Sort each bucket and concatenate the result
  const result = [];
  for (let i = 0; i < buckets.length; i++) {
      buckets[i].sort((a, b) => a - b);
      result.push(...buckets[i]);
  }

  return result;
}

// Example usage:
const unsortedArray = [29, 15, 28, 6, 11, 25, 23, 14, 26, 19];
const sortedArray = bucketSort(unsortedArray);
console.log(sortedArray);