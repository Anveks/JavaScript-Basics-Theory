# JS Theory

### Arrays
- [Adding Elements](#Adding-Elements)
- [Removing Elements](#Removing-Elements)
- [Finding Elements (Primitive Types)](#Finding-Elements)
- [The ...args Syntax](#The-args-syntax)


# Arrays

## Adding Elements:
1. arr.unshift() - adds new elements to the beginning of an arr
2. arr.push() - adds new elements to the end of an arr
3. arr.splice(startIndex, deleteCount, item1, item2, ...) - adds to the middle (NOTE: when adding to an array the deleteCount should be zero!)

## Removing Elements:

1. arr.shift() - beginning
2. arr.pop() - end
3. arr.splice() - middle

## Finding Elements (Primitive Types):

1. arr.includes() - returns a boolean
2. arr.indexOf() - returns all the indexes of a desired element
3. arr.lastIndexOf() - only the last index

## Finding Elements (Reference Types):

1. arr.find() - needs a callback and a condition; 

## Testing the elements of an array

1. arr.every() - returns a boolean, tests whether all the elements of an array satisfy the provided testing function. Stops the execution wupon the first falsy value. 
2. arr.some() - similar to .every but does not exit the function adfer first false value.

## Reducing an array

- arr.reduce() - is used to reduce an array into a single value by iterating over its elements and applying a provided callback function. 


## differences between slice() and splice() are:

- slice() creates a new array with a portion of the original array, while splice() modifies the original array.
- slice() does not change the original array, while splice() changes it.
- slice() takes the start and end indices as arguments, while splice() takes the start index, delete count, and optional items to insert as arguments.
- slice() returns a new array, while splice() returns the removed elements as an array.

## the difference between map() and forEach():

map() and forEach() are both array methods in JavaScript that allow you to iterate over each element of an array, but they have some differences:

- Return value: map() returns a new array with the same length as the original array, while forEach() does not return anything.

- Modification of the original array: map() does not modify the original array, but returns a new array with the modified values, while forEach() does not return anything, and only executes a function on each element of the array.

- Use case: map() is used when you want to modify each element in the array and create a new array with the modified values. forEach() is used when you want to perform a certain operation on each element of the array, but don't need to create a new array.

## What does a shallow copy mean?

 A shallow copy means that the new array contains references to the same objects as the original array, rather than creating new copies of the objects themselves.

In other words, if the elements in the original array are objects or arrays, both the original array and the new sliced array will still reference the same objects or arrays. If you modify the objects or arrays within one of the arrays, the changes will be reflected in both arrays.

## The args syntax

The ...args syntax in JavaScript is called the "rest parameter" or "rest syntax." It allows you to represent an indefinite number of arguments as an array within a function parameter. The rest parameter is prefixed with three dots (...) and followed by a parameter name, typically args (although you can use any valid identifier).

The rest parameter is useful when you want to write a function that can accept a variable number of arguments. It eliminates the need to explicitly define and handle each individual argument. Instead, you can work with the arguments as an array, making the code more flexible and concise.

The rest parameter (...args) and the spread operator (...) use the same syntax of three dots (...), but they serve different purposes. The spread operator is used to spread elements of an iterable (like an array or a string) into individual elements. It can be used in function calls, array literals, object literals, and more. In contrast, the rest parameter is used in function parameters to represent an indefinite number of arguments as an array. 

# Data Structures

Data structures are ways of organizing and storing data to perform operations efficiently. They define the behavior and operations that can be performed on the stored data. 

## Set

Set is a data structure in JavaScript. It is designed to store a collection of unique values, providing efficient methods for adding, removing, and checking the presence of elements.

Fearures of Set:

1. Unique values: A Set can only contain unique values. If you try to add a duplicate value, it will be ignored.

2. No indexing: Unlike an array, a Set does not have indexes or a specific order for its elements. Elements in a Set are iterated in the order of insertion.

3. Iterability: You can iterate over the elements of a Set using various methods, such as forEach, for...of loop, or by converting it to an array using Array.from or the spread operator.

4. No duplicate values: As mentioned earlier, a Set automatically removes duplicate values. This makes it useful when you want to store a collection of unique values or quickly check if a value is already present.

## Map

In computer science, a map is a data structure that allows you to store and retrieve key-value pairs. It is also known by other names such as dictionary, associative array, or hash table, depending on the programming language or context.

In JavaScript, the Map object is a built-in data structure that represents a collection of key-value pairs. It allows you to store and retrieve values based on their associated keys. The Map object can hold any type of values as keys and values, and the keys can be of different types within the same Map instance.

One of the advantages of using Map over plain JavaScript objects ({}) is that Map maintains the insertion order of the keys, whereas object properties in JavaScript do not have a defined order. Additionally, Map allows any type of value as keys, including objects and functions, whereas objects in JavaScript can only have strings or symbols as keys.

## Weak Set vs Weak Map

The main differences between Set and WeakSet, as well as Map and WeakMap, are related to reference handling and garbage collection.

1. Set vs WeakSet:

- Set: The Set object allows storing unique values of any type. It holds strong references to its values, meaning that if an object is stored in a Set, even if it becomes inaccessible from other parts of the code, it will still be retained in memory as long as it is referenced in the Set.
- WeakSet: The WeakSet object is a collection of weakly held object references. It only accepts object references as its values, and these references are held weakly. This means that if an object stored in a WeakSet becomes inaccessible from other parts of the code, it may be garbage collected even if it's still present in the WeakSet.

2. Map vs WeakMap:

- Map: The Map object is a key-value data structure that allows storing key-value pairs, where both the keys and values can be of any type. Like Set, it holds strong references to its keys and values, keeping them in memory even if they are inaccessible from other parts of the code.
- WeakMap: The WeakMap object is a collection of key-value pairs where the keys are weakly held object references, and the values can be of any type. If an object used as a key in a WeakMap becomes inaccessible from other parts of the code, it may be garbage collected even if it's still present in the WeakMap.

The weak versions allow objects to be garbage collected when they are no longer referenced elsewhere in the code, even if they are still present in the weak collections. This behavior can be useful when you want to associate additional data with objects without preventing them from being collected by the garbage collector.

## Garbage Collecting

Garbage collecting is a process performed by a programming language's runtime environment to automatically reclaim memory occupied by objects that are no longer needed or reachable by the program. When objects are created in a program, memory is allocated to store them. However, as the program continues to execute, objects may become no longer needed or inaccessible, such as when they go out of scope, are no longer referenced, or are explicitly deleted.

## Error Handling

1. using console.log() or/and breakpoints for debugging;
2. using the "throw" keyword with a custom error message or with a built-in Error object; throw automatically exits the function, acting like a return;
3. using try-catch-finally block; try - has the code to be executed, catch - runs when an error occurs, finally(optional) - allows the code to continue the execution even if an error occured.

## Regular Expressions

Regular expressions, often abbreviated as regex or regexp, are patterns used to match and manipulate text strings. They are a powerful tool for searching, validating, and manipulating text data. Regular expressions consist of a sequence of characters that define a search pattern, which is then used to match or replace parts of a string.

      const regEx = /hello/i; // i - means non-case sensitive
      const str = "hello my name is"
      console.log(regEx.test(str)); // will return true

The exec() method works similar to test() but instad of a boolean (in case of a match) it returns an array containing the matched substring as the first element, followed by any captured groups if present. The returned array also includes additional properties, such as index (the position of the match in the string) and input (the original input string). In case of no match it returns null.      