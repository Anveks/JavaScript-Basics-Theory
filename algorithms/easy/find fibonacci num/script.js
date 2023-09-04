
var fib = function(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fib(n - 1) + fib(n - 2);
};

console.log(fib(5));

//---------------------------------

var fibSequence = function(n) {
  if (n === 0 || n === 1) return n;

  let prev = 0;
  let next = 1;

  while (next <= n) {
    const temp = next;
    next += prev;
    prev = temp;
  }

  return prev;
};

console.log(fibSequence(5));

//---------------------------------

const fibs = n => {
  let prev = 0, next = 1;
  for(let i = 0; i < n; i++){
    let temp = next;
    next = prev + next;
    prev = temp;
  }

  return prev;
}

console.log(fibs(5));