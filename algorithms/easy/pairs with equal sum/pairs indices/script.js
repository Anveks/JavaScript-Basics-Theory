
const arr = [2,7,11,15]

const twoSum = (nums, target) => {
  const indicesPairs = []
  for (let i = 0; i < nums.length - 1; i++){
    nums[i] + nums[i + 1] === target 
      ? indicesPairs.push([i, i+1]) 
      : '';
  }

  return indicesPairs
}

console.log(twoSum(arr, 9));