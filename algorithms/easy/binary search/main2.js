
// binary search

const arr = [1,65,34,6,79,32,3,56,78,4];

const binarySearch = (arr, target) => {
  const sortedArr = arr.sort((a,b) => a - b);
  let min = 0;
  let max = sortedArr.length - 1;
  let mid;
  
  while (min <= max){
    mid = ~~(max - min / 2);
    console.log('mid:' + mid);

    if (target == arr[mid]){
      return mid;
    } else if (target > arr[mid]){
      min = mid + 1;
      console.log('min:' + min);
    } else {
      max = mid - 1;
      console.log('max:' + max);
    }
  }

  return -1;

}

const index = binarySearch(arr, 1);
console.log(index);