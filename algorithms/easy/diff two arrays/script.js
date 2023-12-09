// return different elements of an arr:

function diffArray (arr1, arr2) {
  const obj = {};
  const arr3 = [...arr1, ...arr2];
  const uniqueArr = [];

  for (let i = 0; i<arr3.length; i++){
    if (obj[arr3[i]] === undefined) {
      obj[arr3[i]] = 1;
    } else {
      obj[arr3[i]]++;
    }
  };

  for (const elem in obj) {
    if (obj[elem] === 1) {
      uniqueArr.push(elem)
    }
  };

  return uniqueArr;  
}

console.log(diffArray(["red", "white", "blue", "pink", "purple"], ["red", "white", "blue", "green", "yellow"])); // should be: pink purple green yellow