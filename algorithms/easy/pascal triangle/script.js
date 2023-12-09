
// function generate(numRows) {
//   if (numRows <= 0 || numRows >= 30) return -1; // exception

//   const triangle = [];

//   for (let i = 0; i < numRows; i++) {
//     const tempArr = [];

//     for (let j = 0; j <= i; j++) {
//       if (j === 0 || j === i) {
//         tempArr.push(1);
//       } else {
//         tempArr.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
//       }
//     }

//     triangle.push(tempArr);
//   }

//   return triangle;
// }

// console.log(generate(5));

function generate(rowsNum) {
  if (rowsNum <= 0 || rowsNum >= 30) return -1; // exception

  const triangle = [];

  for (let i = 0; i < rowsNum; i++) {
    let tempArr = [];

    if (i === 0) {
      tempArr.push(1);
      triangle.push(tempArr);
    } else if (i === 1) {
      tempArr = [1, 1];
      triangle.push(tempArr);
    } else if (i !== 0 && i !==1) {
      const prevRow = triangle[i - 1];
      for (let j = 0; j < prevRow.length; j++) {
        // Your logic for generating values in the current row goes here
      }
    }
  }

  console.log(triangle);
}

console.log(generate(5));

