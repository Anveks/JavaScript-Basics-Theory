
const arr = [1,5,6,1,0,1,4,2,3,3];
const value = 6;

const getPairs = (arr, value) => {
  const matchingPairs = []

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] + arr[i + 1] === value 
      ? matchingPairs.push([arr[i], arr[i + 1]]) 
      : '';
  }

  return matchingPairs
}

console.log(getPairs(arr, value));