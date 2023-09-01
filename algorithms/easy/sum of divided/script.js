
const sumOfDivided = num => {
  let n = num;

  while (n >= 10) {
    let numsArr = n.toString().split(""); // convert n to string and split into digits
    n = numsArr.map((elem) => Number(elem)).reduce((total, acc) => total + acc);
  }

  return n;
};

console.log(sumOfDivided(609));

// a better approach without converting num to string and string to num:

// while (num >= 10) {
//   let sum = 0;

//   // Extract digits and sum them up
//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }

//   num = sum;
// }

// return num;
