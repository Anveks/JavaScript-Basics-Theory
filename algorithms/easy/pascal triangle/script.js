
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
    } else {
      const prevRow = triangle[i - 1];
      tempArr.push(1); // First element of the row is always 1

      for (let j = 1; j < prevRow.length; j++) {
        tempArr.push(prevRow[j - 1] + prevRow[j]); // we have to add the prev number to the current one since the first number is always 1
      }

      tempArr.push(1); // Last element of the row is always 1 too
      triangle.push(tempArr);
    }
  }

  console.log(triangle);
}

console.log(generate(5));


