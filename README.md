## Arrays

# Adding Elements:

1. arr.unshift() - adds new elements to the beginning of an arr
2. arr.push() - adds new elements to the end of an arr
3. arr.splice(startIndex, deleteCount, item1, item2, ...) - adds to the middle (NOTE: when adding to an array the deleteCount should be zero!)

# Removing Elements:

1. arr.shift() - beginning
2. arr.pop() - end
3. arr.splice() - middle

# Finding Elements (Primitive Types):

1. arr.includes() - returns a boolean
2. arr.indexOf() - returns all the indexes of a desired element
3. arr.lastIndexOf() - only the last index

# Finding Elements (Reference Types):

1. arr.find() - needs a callback and a condition; 

# Testing the elements of an array

1. arr.every() - returns a boolean, tests whether all the elements of an array satisfy the provided testing function. Stops the execution wupon the first falsy value. 
2. arr.some() - similar to .every but does not exit the function adfer first false value.


# differences between slice() and splice() are:
- slice() creates a new array with a portion of the original array, while splice() modifies the original array.
- slice() does not change the original array, while splice() changes it.
- slice() takes the start and end indices as arguments, while splice() takes the start index, delete count, and optional items to insert as arguments.
- slice() returns a new array, while splice() returns the removed elements as an array.

# the difference between map() and forEach():
map() and forEach() are both array methods in JavaScript that allow you to iterate over each element of an array, but they have some differences:

- Return value: map() returns a new array with the same length as the original array, while forEach() does not return anything.

- Modification of the original array: map() does not modify the original array, but returns a new array with the modified values, while forEach() does not return anything, and only executes a function on each element of the array.

- Use case: map() is used when you want to modify each element in the array and create a new array with the modified values. forEach() is used when you want to perform a certain operation on each element of the array, but don't need to create a new array.


