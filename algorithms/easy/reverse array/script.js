
const reverseArr = arr => {
  const reversedArr = [];

  for (let i = arr.length - 1; i >= 0; i--){
    reversedArr.push(arr[i])
  }

  return reversedArr;
};

console.log(reverseArr([3,2,5])); // should be 5, 2, 3

// TWO-POINTER

const reverseArr2 = arr => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  return arr;
};

console.log(reverseArr2([3,2,5]));