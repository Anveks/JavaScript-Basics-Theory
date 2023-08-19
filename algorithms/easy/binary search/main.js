// basic binary search algorithm for finding the index of a given target value within a sorted array:lin

const arr = [1,65,34,6,79,32,3,56,78,4];

const binarySearch = (arr, target) => {
  const sortedArr = arr.sort((a,b) => a - b);
  let min = 0; // min index
  let max = sortedArr.length - 1; // max index 
  let mid;

  let iteration = 0;
  
  while (min <= max){
    mid = ~~(max - min / 2); // finding the mid index;

    iteration += 1;
    console.log('iteration: ' + iteration); // to check the num of iterations;

    if (target == arr[mid]){
      return mid; // return and exit the loop
    } else if (target > arr[mid]){
      min = mid + 1; // if the target is bigger than mid elem, set the min as mid plus one
    } else {
      max = mid - 1; // if the target is less, set the max as mid plus one
    }
  }

  return -1; // in case no elem found 

}

const index = binarySearch(arr, 32);
console.log(index);

// another approach:
// https://www.youtube.com/watch?v=7lGiPItOVCM



