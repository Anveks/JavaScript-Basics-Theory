// approach #1
const sumOfDivided = num => {
  let n = num;

  while (n >= 10) {
    let numsArr = n.toString().split(""); // convert n to string and split into digits
    n = numsArr.map((elem) => Number(elem)).reduce((total, acc) => total + acc);
  }

  return n;
};

console.log(sumOfDivided(609));

// approach #2:
const sumOfDivided2 = num => {
  while (num > 10) {
    sum = 0;

    while (num > 0){
      let lastDigit = num % 10; // extracting the last digit
      sum += lastDigit; // on each iteration - add the last num to the sum
      num = Math.trunc(num / 10); // getting new num without the last digit
    }
    // when there are no more digits inside the num, 
    num = sum;
  }

  return num;
};

console.log(sumOfDivided2(609));
