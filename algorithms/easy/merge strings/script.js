
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

var mergeAlternately = function(word1, word2) {
  let merged = "";

  for (let i = 0; i <= word1.length || i <= word2.length; i++){
    if (i < word1.length) merged += word1[i]
    if (i < word2.length) merged += word2[i]
  }

  return merged;
};

// console.log(mergeAlternately('hhh', 'eee'));

// var arr = [10, 32, 65, 2];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('The index of this number is: ' + i);
//   }, 3000);
// }

// var arr = [10, 32, 65, 2];
// arr.forEach(function(ele, i) {
//   setTimeout(function() {
//     console.log('The index of this number is: ' + i);
//   }, 3000);
// })

function Person(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.incrementSalary = function (byValue) {
    this.salary = this.salary + byValue;
  };
}

function Employee(company){
	this.company = company;
}

//Prototypal Inheritance 
Employee.prototype = new Person("Nishant", 24,5000);

