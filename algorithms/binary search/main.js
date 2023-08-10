// basic binary search algorithm for finding the index of a given target value within a sorted array:

const arr = [0,8,2,3,6,5,66,7,8]
const sortedArr = arr.sort((a, b ) => a - b) // the data should be sorted!

const search = (arr, target) => {
  let min = 0; // the lower bound of the search range
  let max = arr.length - 1; // as the index of the last element
  let mid;

  while (min <= max) {
    mid = ~~((max - min)/2) + min;
    
    if (target == arr[mid]){
      return mid; // if there is a match return the index of the mid elem
    } else if (target < arr[mid]) {
      max = mid - 1; // if the target is less than mid elem, shift to the right part
      console.log('max:' + max);
    } else {
      min = mid + 1; // if the target is bigger, shift ot the left part
      console.log('min:' + min);
    }
  }

  return -1; // case if an elem is not found
}

console.log(search(sortedArr, 3));



