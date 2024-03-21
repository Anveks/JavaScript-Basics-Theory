// 1. Assignment of strings(Compare strings):

// let firstWord = "Mary";
// let secondWord = "Army";
const isAnagram = (str1, str2) => {
  const reversed = str => str.toLowerCase().split("").sort().join("");
  return reversed(str1) === reversed(str2);
};

console.log(isAnagram("Mary", 'Army'));


// 2. Change side of string:

let str1 = "asdtghujiklop";
console.log(str1.split('').reverse().join(''));

// 3. Remove duplicates

// let str = "asfoaopgeofkcaslhgkls";
function removeDupl(s) {
  const clearArr = [];
  for (const letter of s) {
    if (!clearArr.includes(letter)) clearArr.push(letter);
    else continue;
  } 
  return clearArr;
};

function removeDupl2(str) {
  let obj = {};
  let arr = str.split("").sort();
  arr.forEach(e => obj[e] = true);
  console.log(Object.keys(obj));
};
console.log(removeDupl('asfoaopgeofkcaslhgkls'));

// 4.

// let str = "aabsdeef"; //AaBSDEeF
function upperCase(s) {
  const clearArr = [];

  for (const l of s) {
    if (!clearArr.includes(l) && !clearArr.includes(l.toUpperCase())) {
      clearArr.push(l.toUpperCase());
    } else {
      clearArr.push(l);
    }
  };

  return clearArr.join("");
};
console.log(upperCase("aabsdeef"));

// 5. uniqueInOrder('AAAABBBCCDAABBB'), ['A','B','C','D','A','B'])
function uniqueInOrder(str) {
  let temp;
  const uniqueArr = [];

  for (const l of str) {
    if (temp !== l) {
      uniqueArr.push(l);
      temp = l;
    } else continue;
  };

  return uniqueArr;
};
console.log(uniqueInOrder('AAAABBBCCDAABBB'));

// 6. The biggest difference between numbers:
function biggestDif(arr) {
  let profit = 0;
  let bestToBuy = arr[0]; // is 10

  for (let i = 0; i < arr.length; i++) {
    if (bestToBuy > arr[i]) bestToBuy = arr[i]; // if bestToBuy is bigger than current elem - the current elem will be the best to buy

    let currProfit = arr[i] - bestToBuy; // calc profit per 
    if (currProfit > profit) profit = currProfit;
  }

  return profit;
}
console.log(biggestDif([10, 7, 5, 8, 11, 9, 1]));
// const arr = [10, 7, 5, 8, 11, 9, 1];

// 7

let users = [
  { name: "Maria", role: "frontend developer", salary: 15000 },
  { name: "Doron", role: "frontend developer", salary: 57000 },
  { name: "Ana", role: "backend developer", salary: 23000 },
  { name: "Maor", role: "backend developer", salary: 60000 },
];

const findMax = (users) => {
  const salaries = users.map((el) => el.salary);
  return Math.max(...salaries);
};

const findMaxwReduce = users => {
  const salaries = users.map((el) => el.salary);
  let maxSalary = 0;                                 
  salaries.reduce((acc, curr) => {
    if (curr > maxSalary) {
      maxSalary = curr;
      acc = curr;
    }
  });
  return maxSalary;
};

// // task 1 Find max salary of users:
// const max = users.reduce((prev, next) =>
//   prev.salary > next.salary ? prev : next
// );
// console.log("max: ", max.salary);

const findMin = (users) => {
  const salaries = users.map((el) => el.salary);
  return Math.min(...salaries);
};

const avgSalary = (users) => {
  const salaries = users.map((el) => el.salary);
  return Math.trunc(salaries.reduce((curr, acc) => curr += acc) / salaries.length);
}; 

const backends = (users) => {
  return users.filter((el) => el.role === 'backend developer');
};

console.log(findMax(users), findMin(users), avgSalary(users), backends(users), findMaxwReduce(users));
// task 1 Find max salary of users:
// task 2 Find max salary of users:
// task 3 Find min salary of users:
// task 4 Find average salary of users:
// task 5 find all backends:

// 8 find str in nested object

const data = {
    name: "Doron",
    firstData: {
        name: "Hagay",
        secondData: {
            name: "Moty"
        },
    }
};

function findString(str, data) {
  return JSON.stringify(data).indexOf(str) !== -1 ? true : false;
}

console.log(findString("Moty", data));

// 9 Write a function to check the correctness of brackets:

// console.log(isBalanced("{{([])}}"));

// 10. Write a function that will delete all duplicates:

//  in the following array :[1,2,2,3,5,4,6,7,3,2,5,7,9,22,35,6]

// 11. What will be printed?
//way 1
// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode(`Button ${i}`));
//   btn.addEventListener('click', function(){ console.log(i); });
//   document.body.appendChild(btn);
// }

// way 2
// for (var i = 0; i < 5; i++) {
//   var btn = document.createElement('button');
//   btn.appendChild(document.createTextNode('Button ' + i));
//   btn.addEventListener('click', (function(i) {
//     return function() { console.log(i); };
//   })(i));
//   document.body.appendChild(btn);
// }

// 12 What will be printed?
// var myObject = {
//   foo: "bar",
//   func: function() {
//       var self = this;
//       console.log("outer func:  this.foo = " + this.foo);
//       console.log("outer func:  self.foo = " + self.foo);
//       (function() {
//           console.log("inner func:  this.foo = " + this.foo);
//           console.log("inner func:  self.foo = " + self.foo);
//       }());
//   }
// };
// myObject.func();

// 13. Find angle between hours and minutes arrows:

// let h = +prompt("Enter a hour: ");
// let m = +prompt("Enter a minute: ");

// let hourAngleEveryMinute = 0.5;
// let angle;

// 14. What will be printed? 

// console.log(1 + "2" + "2");
// console.log(1 + +"2" + "2");
// console.log(1 + -"1" + "2");
// console.log(+"1" + "1" + "2");
// console.log("A" - "B" + "2");
// console.log("A" - "B" + 2);


// 15. What will be printed?

// console.log("0 || 1 = " + (5 || 2));
// console.log("1 || 2 = " + (1 || 2));
// console.log("0 && 1 = " + (0 && 1));
// console.log("1 && 2 = " + (1 && 2));


// 16. What will be printed?

// first
// function add(num1) {
//     let sum = num1;
//     function a(num2) {
//         sum += num2;
//         return a;
//     }

//     a.valueOf = () => sum;
//     return a;
// }

// console.log(add(2)(3)(4) === 9); 
// console.log(add(2)(3)(4) == 9);

// second
// function add (x) {
//     return function (y) { // anonymous function
//       return function (z) { // anonymous function
//         return x + y + z;
//       };
//     };
// }

// console.log(add(2)(3)(4) === 9); //true


// 17. Write Fibonacci logic:

//  0  1  2  3  4  5  6  7   8   9   10
//  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55


// 18. Merge and sort:

// let str1 = "afhghhhhh";
// let str2 = "abbbbb";


// 19. write Promise.all():

// p1 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 100, 'hi');
// });
// p2 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 100, 'all');
// });
// p3 = new Promise(function (resolve, reject) {
//     setTimeout(resolve, 100, 'there');
// });


// 20. Avg of salaries:

// const users = [
//     { company: "Microsoft", salary: 50000 },
//     { company: "Google", salary: 1000 },
//     { company: "Microsoft", salary: 50000 },
//     { company: "Microsoft", salary: 1000 },
//     { company: "Meta", salary: 30000 },
//   ];


// 21. Write debouce:

// 22. Write Binary search: