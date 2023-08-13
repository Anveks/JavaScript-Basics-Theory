
const arr = [1,2,3,4,5,6,7,8,6,10];

// solution for 1 duplication:
const getDuplicates = arr => {
  const obj = {};
  for (let i = 0; i < arr.length - 1; i++){
    if (obj[arr[i]]){
      return arr[i]; // in case we already have this key in an object - return it
    } else {
      obj[arr[i]] = 1; // in case we dont = assign a 1 value to it
    }
  }
  return false;
}
console.log(getDuplicates(arr));