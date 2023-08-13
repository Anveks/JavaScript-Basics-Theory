
const arr = [1,1,2,3,4,4,5,6,7,8,6,6,10];

// remove all the duplicates and return a new arr
const cleanArr = arr => {
  const sortedArr = arr.sort((a,b) => a - b)
  const cleanArr = []

  for (let i = 0; i < sortedArr.length - 1; i++){
    sortedArr[i] !== sortedArr[i + 1] 
      ? cleanArr.push(sortedArr[i]) 
      : "";
  }

  return cleanArr
};

console.log(cleanArr(arr));
