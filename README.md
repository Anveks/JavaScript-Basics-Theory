# JS Theory

- [Event Loop][#Event-Loop]
- [Data Types][#Data-Types]
- [Adding Elements](#Adding-Elements)
- [Removing Elements](#Removing-Elements)
- [Finding Elements (Primitive Types)](#Finding-Elements)
- [The ...args Syntax](#The-args-syntax)
- [Shallow Copy](#Shallow-Copy)
- [Objects](#Objects)
- [Object Prototypes](#Object-Prototypes)
- [Prototype design pattern](#prototype-design-pattern)
- [Classes](#Classes)
- [Data Structures](#Data-Structures:-Set-&-Map)
- [Factory Functions and Constructor Functions](#Factory-Functions-and-Constructor-Functions)
- [Asynchronous Code](#Asynchronous-Code)
- [API](#API)
- [DOM](#DOM)
- [Events](#Events)
- [Cookies](#Cookies)
- [Scopes](#Scopes-of-a-variable-in-JavaScript)
- [Functions](#Function-Declaration-vs-Function-Expression)
- ["This" Keyword]('#This-Keyword')
- [Concept of Hoisting](#Hoisting-in-JS)
- [Imports and Exports](#Imports-and-Exports-in-JavaScript)

- [Memoization](#Memoization)

- [Node.js](#Node-JS)

# Event Loop: Stacks and Queues

A lecture from Philipp Roberts, the creator of Loupe: https://www.youtube.com/watch?v=8aGhZQkoFbQ

An article in Russian: https://habr.com/ru/articles/461401/

JavaScript is a single-threaded non-blocking asynchronous concurrent language. 

it has a single call stack, which means it can do one thing at a time. Therefore the 'slow' code, or blocking, is actually a problem, because we run our js code inside the browsers. If the call stack gets blocked, everything inside the browser stops. It freezes untill it has completed all the processes inside the stack.

The solution to this problem are **callbacks**. Callback functions run concurrently to the call stack without blocking it. 

The event loop is a **constantly running process** that monitors both the callback queue and the call stack and send the new tasks to it. Yet in order to understand it fully, we should know the types of tasks JS handles (in hierarchical order):
- Synchronous Tasks: console.logs, events, etc; executed one by one
- Asynchronous Tasks: **microtasks** - promises and observables, have high priority, **macrotasks** - setTimeout, setInterval, etc. 

So basically all the tasks end up inside the event loop where they are processed depending on their sync/async behaviour and priority. First the event loop sends the sync tasks to the callstack, then it checks if there is anything inside the callback queue. If there is, it sends the callbacks to the callstack, once it has completed handling all the sync tasks. 

Terminology:
- Call Stack - a data structure that keeps track of the functions being called and executed. It uses the 'Last In First Out' (LIFO) principle to store and manage function invocation. 
- Task (JavaScript) Queue - is one of the linear data structures similar to stack; the difference is that it works based on First In First Out (FIFO) principle.

# Data Types

Based on: https://www.javascripttutorial.net/javascript-data-types/

Data types in JavaScript can be divided into two groups: primitive types and complex (reference) types:

1. Primitives:
- string - a sequence of characters
- number - represents an integer or a float
- boolean - a logical value
- undefined - a variable that has been declared but hasnt been assigned any value
- null - represents an intentional abscence of any value
- symbol - unique and immutable value used as an object key

2. Reference:
- object - collection of key-value pairs 
- array - an ordered and indexed collection of elements
- function - reusable block of code that can be invoked with arguments

Besides these two major datatype groups, there is also a 'special' one that includes:
- bigint - integers with arbitrary precision, used when numbers exceed the safe range for the 'number' type
- NaN - a value that is not a number but results from invalid mathematical operations
- infinity - a mathematical concept of positive infinity (can be negative as well)

Native JavaScript is a dynamically-typed language, which means you do not have to specify the datatype of a variable explicitly. It is determined automatically at runtime. 

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

1. arr.every() - returns a boolean, tests whether all the elements of an array satisfy the provided testing function. Stops the execution upon the first falsy value. 
2. arr.some() - similar to .every but does not exit the function adfer first false value.

## Reducing an array

- arr.reduce() - is used to reduce an array into a single value by iterating over its elements and applying a provided callback function. 

## differences between slice() and splice() are:

- slice() creates a new array with a portion of the original array, while splice() modifies the original array.
- slice() does not change the original array, while splice() changes it.
- slice() takes the start and end indexes as arguments, while splice() takes the start index, delete count, and optional items to insert as arguments.
- slice() returns a new array, while splice() returns the removed elements as an array.

## the difference between map() and forEach():

map() and forEach() are both array methods in JavaScript that allow you to iterate over each element of an array, but they have some differences:

- Return value: map() returns a new array with the same length as the original array, while forEach() does not return anything.

- Modification of the original array: map() does not modify the original array, but returns a new array with the modified values, while forEach() does not return anything, and only executes a function on each element of the array.

- Use case: map() is used when you want to modify each element in the array and create a new array with the modified values. forEach() is used when you want to perform a certain operation on each element of the array, but don't need to create a new array.

## Shallow Copy

A shallow copy means that the new array contains references to the same objects as the original array, rather than creating new copies of the objects themselves.

In other words, if the elements in the original array are objects or arrays, both the original array and the new sliced array will still reference the same objects or arrays. If you modify the objects or arrays within one of the arrays, the changes will be reflected in both arrays.

To copy an object in JavaScript, you have three options:

1. Use the spread (...) syntax - shallow
2. Use the Object.assign() method - shallow
3. Use the JSON.stringify() and JSON.parse() methods - deep

BONUS: it is possible to copy an existing array by creating a new one with the same elements by using map() method as well (along with Array.from if needed);

# Objects

Objects are a fundamental datatype used to store and organize data in key-value pairs. They are similar to dictionaries in other languages (dictionaries in Python, for example).

In JavaScript, there are **four ways** to create an object — using object literals, constructor functions, ES6 classes and object.create method, which is very useful when we need to create an object using an existing object as a prototype.

1. *Object Literal Syntax*: the most common way, involves enclosing the key-value pairs in curly braces '{}';
2. *Object Constructor*: 

    const dog = new Object();
    dog.color = 'white';
    dog.name = 'Jackie';
    dog.age = 3;

- Factory Functions + Constructor Functions: functions that return objects; similar to constructor functions;
```
    function createPerson(firstName, lastName, age, email, isStudent) {
    return {
      firstName,
      lastName,
      age,
      email,
      isStudent,
      greet: function () {
        return `Hello, my name is ${this.firstName} ${this.lastName}.`;
      },
    };
  }
```
3. *Object.create() method*: allows us to use an existing object literal as the prototype of a new object we create. 

    const person = {
      firstName: 'Mary',
      lastnameL: 'Jane',
    }
    const person2 = Object.create(person);
    person2.firstName = 'John',
    person2.lastName = 'Doe'

4. *Classes*: ES6 introduced a class keyword that allows us to create classes in JS; in a way, classes are templates that can be used to create instances of objects with 'new' keyword;

NB: More examples here - https://medium.com/@mandeepkaur1/creating-objects-in-javascript-a896e6cfa6eb#:~:text=In%20JavaScript%2C%20there%20are%20four,existing%20object%20as%20a%20prototype.

## Object Destructuring 

Object destructuring is a technique that allows you to extract properties from objects in JS and bind them to the variables. The syntax for object destructuring uses the {} curly braces, and the variable names should match the property names in the object. 

Example: 

    const person = {
      firstName: 'John',
      lastName: 'Doe'
      age: 35
    }

    const {firstN: firstName, lastN: lastName, personAge: age} = person;
    console.log(firstN); // returns 'John'
    ...

## Object Prototypes

Each object has a hidden property called "[[Prototype]]", which is a reference to another object called the 'prototype'. The concept of Prototypes is fundamental in JavaScript and it plays an important role in object **inheritance**. 

What happens behind the scenes when we try to access a property of an object? It triggers the prototype chain. JS first looks for the desired property on the obejct itself; if such property is not found, it goes to the object prototype; if the result is negative again, it continues the search up to the top-level prototype called 'Object.prototype'.

Prototype chain - a chain ob objects, made of one object prototype.

Example:

    const Employee = {
      company: 'xyz'
    }
    const emp1 = Object.create(Employee);
    delete emp1.company
    console.log(emp1.company);

In this case the console.log will still show us the company name, even though we have deleted it from the emp1 object. JavaScript starts looking for the company attr inside the object, and if it doesn't find one - it goes up the prototype chain to the prototype itself and gets the company name. Object.create() is the method that establishes the prototype chain. 

Object.prototype is the top-level prototype in the prototype-chain. It is the prototype of all objects in JS and provides default properties and methods that are inherited by all objects. 

Object.getPrototypeOf() and Object.setPrototypeOf() are the common methods to interact with the prototype chain, that replaced the _proto_ property, that, although, still exists withing all JS objects (yet it is deprecated).

# Prototype Design Pattern

The prototype design pattern is a creational design pattern in JavaScript that allows you to create objects based on a template or prototype object. **Instead of creating objects from a class or constructor function, you can clone existing objects, known as prototypes**, and modify them as needed to create new instances. This pattern promotes code reusability and can improve performance, as you create new objects by cloning existing ones rather than instantiating new objects from scratch.

Is implemented using the prototype chain, since each object in JS has an internal property called 'Prototype' (placed in double square brackets). 

The prototype design pattern is especially useful when you have objects with similar behavior and you want to avoid duplicating code for each instance. It allows you to centralize common functionalities in the prototype object and keep instance-specific data separate in each instance.

More: https://blog.bitsrc.io/the-prototype-design-pattern-in-typescript-19cff98a1639

# Classes

NB: https://habr.com/ru/articles/518386/

Classes are a syntactical abstraction over the constructor functions and a prototype-based inheritance. First introduced in 2015. Provide a more structured ways to define objects and work with inheritance. In OOP, classes typically represent the three fundamental concepts:

1. Inheritance
- is the mechanism by which a class can inherit properties and methods from another class, known as the base or parent class. The class that inherits these properties and methods is called the derived or child class. This allows you to create a hierarchy of classes, where child classes can extend the behavior of their parent classes, reusing code and promoting code reusability.

2. Encapsulation
-   refers to the bundling of data (attributes) and methods (functions) that operate on that data within a single unit, often called a class. It allows you to hide the internal details of the class and expose only the necessary functionalities to the outside world. This helps in creating more maintainable and secure code by controlling access to the internal state of objects.

3. Polymorphism 
- allows objects of different classes to be treated as objects of a common superclass. This means that objects can take on multiple forms or types, and they can be used interchangeably, as long as they are related through inheritance. Polymorphism enables you to write code that can work with objects of different classes in a unified manner, leading to more flexible and reusable code.

To create a class you use the 'class' keyword, followed by the class name (in PascalCase) and the class body. Inside the class body you can define its properties and methods just like in a regular JS object, but with a more organized syntax. 

To create instances of class you use the 'new' keyword. 

With classes, you can also use inheritance to create subclasses (also known as derived classes) that inherit properties and methods from a parent class. To achieve this, you use the extends keyword:
```
    class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // Call the parent class constructor using super()
    this.major = major;
  }

  introduce() {
    console.log(`Hello, I am ${this.name}, a ${this.age}-year-old student majoring in ${this.major}.`);
  }
}

const student1 = new Student("Eve", 21, "Computer Science");
student1.greet(); // Output: "Hello, my name is Eve and I am 21 years old."
student1.introduce(); // Output: "Hello, I am Eve, a 21-year-old student majoring in Computer Science

```
    

## The args syntax

The ...args syntax in JavaScript is called the "rest parameter" or "rest syntax." It allows you to represent an indefinite number of arguments as an array within a function parameter. The rest parameter is prefixed with three dots (...) and followed by a parameter name, typically args (although you can use any valid identifier).

The rest parameter is useful when you want to write a function that can accept a variable number of arguments. It eliminates the need to explicitly define and handle each individual argument. Instead, you can work with the arguments as an array, making the code more flexible and concise.

The rest parameter (...args) and the spread operator (...) use the same syntax of three dots (...), but they serve different purposes. The spread operator is used to spread elements of an iterable (like an array or a string) into individual elements. It can be used in function calls, array literals, object literals, and more. In contrast, the rest parameter is used in function parameters to represent an indefinite number of arguments as an array. 

```
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3, 4)); // Output: 10

```

# Data Structures: Set & Map

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

## Factory Functions and Constructor Functions

Factory functions and constructor functions are two different approaches to creating objects in JavaScript. Here's an explanation of each:

### Factory Functions:

1. A factory function is a regular JavaScript function that returns an object.
2. It is called a factory function because it acts as a factory that produces new objects.
3. The factory function encapsulates the object creation process and may perform additional logic before returning the object.
4. It uses the return statement to explicitly return the created object.
5. It does not rely on the new keyword for object creation.

```
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  };
}

const person1 = createPerson('John', 25);
const person2 = createPerson('Alice', 30);
person1.greet(); // Output: Hello, my name is John and I'm 25 years old.
person2.greet(); // Output: Hello, my name is Alice and I'm 30 years old.

```

### Constructor Functions:

1. Constructor functions are used to create and initialize objects in JavaScript. They act as "blueprints" for creating multiple instances of objects with similar properties and behaviors. 
2. It is called a constructor function because it constructs (initializes) the object.
3. The constructor function is defined using the function keyword and is typically named with PascalCase convention.
4. It uses the this keyword to refer to the newly created object.
5. It does not need to explicitly return the object, as the new keyword handles the object creation and return.
6. It can define properties and methods for the object by assigning them to this.

```
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  };
}

const person1 = new Person('John', 25);
const person2 = new Person('Alice', 30);
person1.greet(); // Output: Hello, my name is John and I'm 25 years old.
person2.greet(); // Output: Hello, my name is Alice and I'm 30 years old.

```

Both factory functions and constructor functions can be used to create objects in JavaScript. The choice between them depends on the specific requirements of your project and your coding style preferences. Factory functions offer more flexibility and control over the object creation process, while constructor functions provide a more traditional and class-like syntax.

# Generator Functions 

Generator functions are a special type of function in JS that allow you to define an iterative algorithm by using the 'yield' keyword. When a generator function gets called, it does not execute the code immediately like regular functions - it returns a special type of iterator called a generator object. 

The syntax is pretty much the same as a regular function but with an asterisk added after the 'function' keyword:

    function* myGeneratorFunction() {
      // function body here
    }

Inside a generator function you can use a 'yield' keyword to pause the function's execution and yield a value to the caller. Each time the function encounters the 'yield' keyword it returns the value specified by the 'yield' and the function's state is saved so that it can be resumed later. 

Example:

    function* countToThree(){
      yield 1;
      yield 2;
      yield 3;
    }

    const generatorObj = countToThree()

    generatorObj.next() // returns {vaue: 1, done: false}

The Generator object returned by the function is an iterator. An iterator is an object that has a next() method available, which is used for iterating through a sequence of values. The next() method returns an object with value and done properties. value represent the returned value, and done indicates whether the iterator has run through all its values or not.

You can close a Generator by using the .return() method:

    generatorObj.next() // {value: 1, done: false}
    generatorObj.return('Function has ended!') // {value: 'Function has ended!', done: true}
    generatorObj.next() // {value: undefined, done: true}

NB: an interesting article on the subject: https://www.digitalocean.com/community/tutorials/understanding-generators-in-javascript

# Asynchronous Code

Asynchronous code in JavaScript refers to code that does not execute in a sequential or blocking manner. Instead of waiting for a task to complete before moving on to the next one, asynchronous code allows other tasks to continue running while waiting for certain operations to finish. This enables non-blocking execution and can improve the overall efficiency and responsiveness of programs.

In JavaScript, asynchronous code is commonly used when dealing with operations that may take some time to complete, such as network requests, file I/O, or database queries. Rather than halting the execution of the program until these operations are finished, asynchronous code allows other parts of the program to continue running, and a callback function or a promise is used to handle the result of the asynchronous operation when it completes.

There are several ways to write asynchronous code in JavaScript, including:

1. Callbacks: Traditional asynchronous programming in JavaScript often involves using callbacks. A callback is a function that is passed as an argument to an asynchronous function, and it is called once the operation is completed. Callbacks can be error-first callbacks or success callbacks.

2. Promises: Promises provide a more structured and intuitive way to handle asynchronous operations. Promises represent a value that may be available now, in the future, or never. They allow chaining of operations and provide methods like then() and catch() to handle success and error cases.

3. Async/await: Introduced in ES2017, async/await is a syntactic sugar built on top of promises. It allows writing asynchronous code that looks and behaves more like synchronous code, making it easier to read and understand. The async keyword is used to define an asynchronous function, and the await keyword is used to wait for the completion of a promise before proceeding.

Asynchronous code is important in JavaScript to handle time-consuming operations without blocking the main thread and to ensure that programs remain responsive. It allows for more efficient resource utilization and better user experience in applications that involve network requests, I/O operations, or any other tasks that can cause delays.

## Main Thread

In computer programming, the main thread refers to the primary execution thread - or flow - of a program. 

In the case of JavaScript running in a web browser, the main thread executes JavaScript code in the order it appears in the program. It starts at the entry point of the program and progresses through the code, executing statements one by one. This includes initializing variables, calling functions, making decisions, and performing other operations.

The main thread is responsible for driving the execution of the program and coordinating various tasks, such as updating the user interface, handling events, and interacting with other parts of the system. It ensures that the program executes in a predictable and sequential manner.

However, it's important to note that the main thread can be interrupted or blocked by long-running operations, synchronous tasks, or heavy computations. This can lead to unresponsiveness in the user interface, as the main thread is occupied with a single task and cannot respond to other events or user interactions.

To avoid blocking the main thread and maintain a smooth user experience, asynchronous programming techniques are used. By offloading time-consuming or blocking tasks to separate threads or utilizing asynchronous APIs, the main thread can remain free to handle UI updates and respond to user interactions while the asynchronous tasks are executed concurrently.

So, while the main thread represents the main flow of code execution, it's important to consider efficient programming practices and leverage asynchronous techniques when needed to ensure responsiveness and optimal performance in your applications.

## Callbacks

Callbacks are a fundamental concept in JavaScript that allow you to pass a function as an argument to another function and have it executed at a later time or in response to an event. Callback functions are commonly used in asynchronous operations, such as making API requests or handling user interactions, where the result or the event may not be immediately available.

```
function fetchData(callback) {
  // Simulating asynchronous operation
  setTimeout(() => {
    const data = 'Some fetched data';
    callback(data);
  }, 2000);
}

function processFetchedData(data) {
  console.log('Processing data:', data);
}

fetchData(processFetchedData);

```

Explanation: In this example, we have a fetchData function that simulates an asynchronous operation, such as fetching data from an API. It takes a callback function as an argument. Inside fetchData, we use setTimeout to simulate a delay of 2000 milliseconds (2 seconds), after which we invoke the callback function and pass the fetched data as an argument.

We define another function called processFetchedData, which will be used as the callback. It simply logs the received data to the console.

Finally, we call fetchData and pass processFetchedData as the callback function. When fetchData completes the asynchronous operation after 2 seconds, it invokes the callback function processFetchedData with the fetched data as the argument. In this way, we can process the fetched data once it becomes available.

## Promises

A promise is an object in JavaScript that represents the eventual completion or failure of an asynchronous operation and its resulting value. It is a way to handle asynchronous operations more elegantly and avoid the "callback hell" scenario where callbacks are nested within each other.

A promise can be in one of three states:

- Pending: The initial state of a promise. It is neither fulfilled nor rejected.

- Fulfilled: The state of a promise when the asynchronous operation has completed successfully, and the promise has a resulting value. Once fulfilled, the promise cannot transition to any other state.

- Rejected: The state of a promise when the asynchronous operation encounters an error or fails to complete. Once rejected, the promise cannot transition to any other state.

A promise is created using the Promise constructor, which takes a function as an argument, often referred to as the "executor" function. The executor function accepts two parameters: resolve and reject. Inside the executor function, you perform the asynchronous operation, and when it completes successfully, you call the resolve function with the resulting value. If an error occurs, you call the reject function with the reason for the rejection.

When using the promise, we can attach callbacks to the promise using the then method. The then method takes two optional parameters: a success callback and an error callback. If the promise is fulfilled, the success callback is called with the resolved value. If the promise is rejected, the error callback is called with the rejection reason.

Promises provide a more structured and readable way to handle asynchronous operations and avoid callback nesting. They allow you to chain multiple asynchronous operations together using then and handle errors using catch. Additionally, promises can be used with async/await, which provides a more synchronous-like syntax for working with asynchronous code.

### Handling Multiple Promises

Promise.all([]) is a static method available on the Promise object in JavaScript. It takes an array (or any iterable) of promises as input and returns a new promise that resolves when all the input promises have resolved, or rejects if any of the input promises reject.

The Promise.all() method is useful when you want to perform multiple asynchronous operations in parallel and wait for all of them to complete before continuing with further logic. It allows you to handle a group of promises as a single unit.

```
const promise1 = new Promise((resolve, reject) => {
      setTimeout(() => resolve(1), 2000)
});

const promise2 = new Promise((resolve, reject) => {
       setTimeout(() => reject(new Error("Something went wrong...")), 2000)
});

Promise.all([promise1, promise2])
      .then((res) => console.log(res)) // will print 1
      .catch((err) => {console.log(err)}); // will print err message

```

### async/await

async/await is a modern JavaScript syntax for handling asynchronous code in a more synchronous-like manner. It provides a way to write asynchronous code that looks and behaves more like synchronous code, making it easier to read and understand.

```
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Request failed');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();

```

# API

An API (Application Programming Interface) is a set of rules and protocols that allows different software applications to communicate and interact with each other. It defines how different components of software systems should interact and provides a set of methods, protocols, and data formats that developers can use to build software applications and integrate them with other systems.

APIs are used to enable the exchange of data and functionality between different software systems, enabling them to work together seamlessly. They provide a standardized way for applications to request and receive data or perform certain actions from another application or service.

APIs can be categorized into different types based on their purpose and how they are accessed. Some common types of APIs include:

- Web APIs: These are APIs that allow communication over the internet and are typically used to access web-based services or interact with web applications. Web APIs are often based on HTTP protocols and can be accessed using URLs.

- REST APIs: Representational State Transfer (REST) APIs are a type of web API that follows a set of architectural principles. They use HTTP methods like GET, POST, PUT, and DELETE to perform operations on resources, and data is often exchanged in JSON or XML format.

- SOAP APIs: Simple Object Access Protocol (SOAP) APIs are another type of web API that uses XML as the data format and typically relies on the SOAP protocol for communication. SOAP APIs are more complex and feature-rich compared to REST APIs.

- Library/APIs: These are APIs provided by programming libraries or frameworks that developers can use to access pre-defined functions and services within those libraries. They often provide specific functionality for a particular programming language or domain.

APIs enable developers to build applications that leverage the functionality and data of other systems without having to understand the intricate details of how those systems are implemented. They provide a level of abstraction and standardization that simplifies software development and fosters interoperability between different applications and services.

# DOM

DOM - Documet Object Model - is an HTML representation of a web page. The DOM provides a way to interact with and manipulate the elements, attributes, and text content of a page. The DOM represents the web page as a hierarchical tree structure, where each element, attribute, and text node is represented by a corresponding object. These objects can be accessed and modified using JavaScript, allowing developers to dynamically manipulate the content and appearance of a web page.

## HTML Collection 

An HTMLCollection is a collection-like object that represents a collection of elements in the HTML document. It is similar to an array in some ways but has its own specific properties and methods.

HTMLCollections are typically used to represent groups of HTML elements that share a common characteristic, such as all elements with a specific tag name or class name. For example, when you use the getElementsByTagName() or getElementsByClassName() methods in JavaScript, they return an HTMLCollection containing all the elements that match the specified criteria.

It's important to note that HTMLCollections are not actual arrays, so they do not have all the methods and features of arrays. However, you can convert an HTMLCollection to a regular array using techniques like Array.from() or the spread operator [...collection] if you need to perform array-specific operations on the collection.

Useful methods:
- document.all - if you want to see all the elements that are present inside an HTML collection o fa given element.
- document.domain - used to get or set the domain portion of the current document's URL. It allows you to manipulate the domain for security and cross-origin communication purposes.
- document.URL - shows current URL.
- document.body.className/classList - in case you want to access all the class elements.
- document.forms (or any other elem) - gives you access to all the form-elements inside html; document.forms[0] will return the first form; document.forms[0].id/className will return its id/class;

## Events

Events in JavaScript are objects that encapsulate information about the event occurrence, including useful properties that provide details about the event. Here are some commonly used properties of an event object:

- event.target - references the element on which the event was originally triggered.
- event.currentTarget - references the element that currently has the event handler attached.
- event.type - epresents the type of the event that occurred, such as "click," "submit," "mouseover," etc. 
- event.preventDefault() - a method that, when called within an event handler, prevents the default behavior associated with the event.
- event.stopPropagation() - a method that stops the event from further propagation through the DOM; useful in case of event bubbling and nested elements with event handlers.
- event.clientX/clientY - properties that provide the coordinates of the mouse pointer when a mouse-related event occurs.

## This Keyword

The 'this' keyword is a special identifier that refers to the context in which a function is executed. The value of 'this' si determined dynamically at runtime based on how the function is called. it allows a function to access the properties and methods of the object that called it, known as 'calling context'.

Possible scenarios:

1. **Global** context: when a function is called in the global scope (outside any object or function), 'this' refers to the global object. In a browser environment, the global object is typically the window object.
2. **Function** context: when a function is called as a method of an object, 'this' refers to the object hat the method is called on. 
3. **Constructor** context: when a function is used as a constructor function, 'this' will refer to the newly created instance of the object (or instance of a class, if the constructor function is used inside a class);
4. **Explicit binding**: in some situations you can explicitly set the values of 'this' using methods like call(), apply() or bind();

## Binding, types of binding, and how it is connected to 'this'

Binding is the process of setting the value of the 'this' keyword. But before you dive deep into theory, make sure you remember what is a **call-site** and a **call-stack**Ж

- call-site is WHERE you call a function;
- call-stack is is a **data structure that keeps track of the function calls** made during program execution;

There are four main types of binding:

1. Default Binding: 

    function f() {
        console.log(this.a)
    }

    var a = 2;
    f(); // output: 2, use-strict output: undefined

In this case the call-site of the function is window object, so the value of 'this' will be the same.

2. Implicit Binding: this refers to the object that is invoking a function as a method:

    function f() {
      console.log(this.a)
      }
      var obj = {
          a = 2,
          f: f, // сохраняем ссылку на нашу функцию в объекте 
      }
      obj.f();

Here the output will be the object.

3. Explicit Binding: uses functions or methods like call(), apply(), and bind() to explicitly set the value of 'this' within a function.

- **Hard Binding**: when using the "bind()" method, we create a hard binding - a technique that ensures that a funxction will always have a specific 'this' context, regardless of how it is called. 

    const person = {
      name: 'John',
    };

    function greet() {
      console.log('Hello, my name is ${this.name}');
    }

    const boundGreet = greet.bind(person);
    boundGreet(); // Output: "Hello, my name is John"

    // Even if 'greet' is called with a different context, it will still use the bound context:
    const anotherObject = { name: 'Alice' };
    greet.call(anotherObject); // Output: "Hello, my name is John"
  
- **Arrow Functions**: in a way arrow functions also represent 'hard binding' because they capture the 'this' value from their surrounding context. Meaning - the value of 'this' will always be the same value the arrow function had whe it was defined.

# ViewState Vs SessionState

1. **View State**, also known as the client-side state, refers to the data that is stored and managed within the clien-side of a web application.
- typically managed by JavaScript frameworks or libraries like Ract, Vue, Angular;
- is suitable for managing UI-related data, form inputs or temporary information that doesn't need to persist across different page loads or sessions. 

2. **Storage State** refers to the data stored and managed on the server-side.
- associated with a user's session and can be maintained across multiple requests from the same user during a session;
- unlike local state, session state persists across page loads and navigation, allowing data to be carried over between different parts of the application;
- often used to store user-specific information such as authentication status, user preferences, or shopping cart contents;
- user login details, user settings, and data stored in a shopping cart during an online shopping session;

# Cookies

Cookies are small pieces of data that websites store on a user's web browser. They are used to remember information about the user's interactions with the website, such as login credentials, shopping cart items, user preferences, and other data that helps enhance the user experience.

When a user visits a website, the website's server sends a response to the user's browser, which includes one or more cookies. The browser then stores these cookies locally on the user's device. The next time the user visits the same website, the browser sends the stored cookies back to the website's server along with the request, allowing the server to recognize the user and remember their previous interactions.

Cookies can be classified into two main types:

1. Session Cookies: These cookies are temporary and are deleted when the user closes their web browser. They are typically used for session management and authentication purposes.

2. Persistent Cookies: These cookies have an expiration date set by the website and remain on the user's device even after the browser is closed. They are used for long-term tracking and personalization.

## How to create a cookie?

To create a cookie in JavaScript, you can use the **document.cookie** property to set the cookie value. Here's a basic example of how to create a cookie:

    function setCookie(name, value, daysToExpire) {
      const date = new Date();
      date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    // Usage example:
    setCookie("username", "JohnDoe", 30);

setCookie takes three parameters; then it calculates the expiration date of the cookie; after this it sets the cookie using the document.cookie property: a new cookie is created with additioal option like expiration date and a path.

The path attribute in a cookie is used to specify the URL path for which the cookie is valid. If it is not defined, the default path of the cookie will be the current path. The purpose is to control the scope of the cookie and limit its accessibility to specific parts of your website. 

NB: Cookies are client-side storage mechanism. They are not stored on the backend!

# Scopes of a variable in JavaScript

In JS variables have different scopes, which determine where the variable can be accessed or referenced within the code. Main types are:

- **Global Scope**: variables declared outside of any function or block; can be accessed throughout the whole code; are attached to global objects (window in browser, global in node.js);
- **Function Scope**: variables declared inside a function; can be accessed only within that function;
- **Block Scope (ES6)**: variables declared inside a block (inside an if-else block/loop/etc); can only be accessible within that block/loop;
- **Lexical Scope (closure)**: if a function is declared inside another function, it has access to it's parent scope. 

Closure example:

    function outerFunction() {
      var outerVar = "I am an outer variable";

      function innerFunction() {
        console.log(outerVar); // Accessing the outerVar from the parent scope
      }

      return innerFunction;
    }

    var closureFunc = outerFunction();
    closureFunc(); // "I am an outer variable" is logged

## Scope Chaining

JavaScript uses scopes to find out the exact location or accessibility of variables and that particular process is known as Scope Chaining. 

Example:

    const x = 1;
    const output = (function() {
      delete x;
      return x;
    })();

    console.log(output); // the output will still be 1

In this case we have an IFFE output that returns variable called x. First it looks for x variable inside its function scope, and in case it doesn't find a match, it goes to the global scope. 

# Function Declaration vs Function Expression 

The main difference in how they are defined and where are they placed in a call-stack:

1. Function Declaration:
- start with the 'function' keyword;
- placed at the top of call-stack during their execution (allows to call a function before its actual declaration in the code);

2. Function Expression:
- is assigned to a variable or a constant;
- can be anonymous - without a name;
- cannot be used before they are declared;

# Arrow Functions 

Arrow functions are the newest syntax for writing JS functions, introduced in ES6:

    const functionName = (param1, param2, ...) => {
      // Function body
      // Return statement (if necessary)
    };

Key features are:
- shorter syntax: if it consists of one expression, the return statement can be omitted;
- implicit return: even if there is no return statement, the function will still return a value;
- single parameter: if there is only one parameter, parenthesis can be omitted;
- lexical 'this': 'this' inside an arrow function refers only to the function itself and cannot be changed throughout the code;

# Higher-order Functions (HOFs)

In short: a function that *can take other function/s as arguments*, return functions, or do both. Therefore we have two types of HOFs:

- HOFs that take functions as arguments: like Array.prototype.map() or filter() etc.
- HOFs that return functions: 

    function calculator(a){
      return function(b){
        return a * b;
      }
    }
  
    const double = calculator(2);
    console.log(double(5)); // 10 

Another example for HOF that return a function:

    function add2(num) {
      return num + 2;
    }

    function multiplyBy3(num) {
      return num * 3;
    }

    function compose(func1, func2) {
      return function (x) {
        return func1(func2(x));
      };
    }

    const addThenMultiply = compose(multiplyBy3, add2);
    console.log(addThenMultiply(5)); // (5 + 2) * 3 = 21

## Hoisting in JS

Hoisting is a JavaScript behavior where variable and function **declarations are moved to the top of their containing scope** during the execution phase, before the actual code execution.

- Hoisting variable declarations:

    console.log(x); // Output: undefined
    var x = 5;
    console.log(x); // Output: 5

In the first console.log, x is hoisted, so it exists, but its value is undefined because it has not been assigned a value yet. In the second console.log, x has been assigned the value 5.

- Hoisting and *function declarations*: 

    sayHello(); // Output: "Hello, world!"

    function sayHello() {
      console.log("Hello, world!");
    }

In this example, the sayHello function declaration is hoisted to the top of the scope, so we can call it before its actual definition.

- Hoisting and *function expressions*:

    sayHi(); // Error: sayHi is not a function
    var sayHi = function() {
      console.log("Hi!");
    };

In case of function expressions - the variable is hoisted, but it's value, which is a function, is not. Therefore when we try to call the function before assignment, we get an error. 

# Imports and Exports in JavaScript

Imports and exports are used for module management, thus allowing you to split the code into separate files and selectively use variables, functions and classes. This feature was introduced in ES6 in 2015. 

1. **Exporting** from a module: to make a variable available for use in other modules, you use the 'export' keyword followed by the item you want to export. There two ways of exporting items from a module: 

- **Named Export**: when the export keyword is put right before the variable you want to export; used to export *multiple* items from a module;

    export const x = 10;

- **Default Export**: by addding the 'default' keyword to the export; there can only be one default export per module, and it is imported without using the curly braces;

    const x = 10;
    export default x;

2. **Importing** to a module: in order to use the exported items from another module, you use the 'import' keyword followed by the item you want to import; you also specify the path of the module where the item is exported. Again, there are two types:

- **Named Import**: in case you want to import selected elements from a module; curly braces needed;

    import { x } from './module.js'

- **Default Import**: importing without the curly braces:

    import customX from './custom-module.js'

- **Import Everything**: it is possible to import all the exported items from a module using "* as" syntax:

    import * as exampleModule from './example-module.js'
    console.log(exampleModule.x);

NB: a nice article explaining the difference between named and default exports: https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910#:~:text=Named%20exports%20are%20useful%20to,an%20object%20or%20anything%20else.

# Type of Errors 

There are several types of errors that can occur in JavaScript, yet the most common errors include:

1. Syntax Errors: occur when the syntax rules get violated: missing brackets, parenthesis, etc;
2. Reference Errors: when trying to access a value that does not exist or is out of scope;
3. Type Errors: when a value is not of an expected type;
4. Range Errors: when value is not within acceptable range, for example when index exceeds the number of elements in an array;
5. Eval Errors: when there is an error with eval() function - a function that evaluates JS code in a string;
6. URI Errors: in case there are issues with functions that deal with Uniform Resource Identifiers (URIs);
7. Internal Errors: when the engine encounters an internal problem or limitation;

With all these and many other possible errors in JS it is generally recommended to use try-catch blocks, so that the code could catch and process exceptions and prevent the programm from terminating unexpectedly. 

# Memoization

Memoization is an optimization technique used to improve the perfomance of functions, especially the recursive ones. It involves saving (caching) the result of a function call and re-using it when the same input occur again, rather than recalculating the result. 

In JavaScript the most common way to implement memoization is to use a data structure like an object or a Map to store the results. 

For example, an algorithm with the fibonacci numbers:

    function fibonacci(n, memo = {}) {
      if (n in memo) {
        return memo[n]; // Return the cached result if available
      }

      if (n <= 2) {
        return 1; // Base case for the Fibonacci sequence
      }

      memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo); // Compute and cache the result
      return memo[n];
    }

    console.log(fibonacci(6)); // Output: 8

Another example with a function that simply adds 10 to its argument:

```
    // without memoization it would run anew each time:
    const add = (n) => (n + 10);
    add(9);

    // with memoization:
    const memoizedAdd = () => {
      let cache = {};
      return (n) => {
        if (n in cache) {
          console.log('Fetching from cache');
          return cache[n];
        }
        else {
          console.log('Calculating result');
          let result = n + 10;
          cache[n] = result;
          return result;
        }
      }
    }
    
    const newAdd = memoizedAdd();
    console.log(newAdd(9)); // calculated
    console.log(newAdd(9)); // taken from cache
```
Good to know: https://habr.com/ru/companies/ruvds/articles/332384/

# BOM: Browser Object Model

Article: https://www.javascripttutorial.net/javascript-bom/

It is a set of JavaScript APIs provided by web browsers. It allows the JS code to interact with and manipulate the browser window and its components. The BOM provides access to various browser-related objects such as the window object, navigator object, history object and screen object. 

The key objects are:

1. Window: is the global object of JS inside the web browser;
- alert(): display an alert dialog;
- confirm(): display a modal dialog with a question;
- prompt(): prompt the user to input some text;
- setTimeout(): set a timer;
- setInterval(): execute smth repeatedly;

2. Location: manipulate the location of a documebnt via the location object; represents the current URL of the page and allows navigation to different URLs.

3. Navigator: provides information about the browser and its capabilities, such as the browser name, version, user agent string, and whether cookies are enabled.

4. Screen: provides information about the user's screen, such as screen width, height, color depth, and pixel density.

5. History: allows manipulation of the browser's history, such as adding or modifying history entries, and navigating back and forward through the user's browsing history.

6. Document: NOT a part of BOM but closely related to it; the document represents the HTML displayed in the browser window. Allows manipulations with DOM to modify the content and the structure of the webpage. 

# Client-Side vs Server-Side

Client-side and server-side are **two distinct environments where JavaScript code can be executed**.

1. Client-side JavaScript:
- runs on the user's *browser*.
- provides interactivity to web pages.
- the code itself is embedded directly into HTML files or included through external JS files. 
- has access to the Browser Object Model (BOM) and the Document Object Model (DOM) for interacting with the browser and manipulating web page content.
- client-side JavaScript frameworks and libraries include React, Angular, and Vue.js.

2. Server-side JavaScript:
- runs on the *server*, typically in a Node.js environment.
- used for handling backend logic and server-side processing.
- use cases include handling API requests, processing form submissions, interacting with databases, and performing server-side rendering for applications.
- server-side frameworks for JavaScript include Express.js, Koa.js, and Nest.js.

## Currying Technique in JS

Examples and info taken from here: https://learn.javascript.ru/currying-partials

Curruing is an advanced JS technique based on the closure concept. It **transforms** a function that way so it can accept arguments not only in a regular way: mul(1,2,3), nut as a sequence mul(1)(2)(3). 

Example:

    function mul (x) {
      return function (y) { // anonymous function
        return function (z) { // anonymous function
          return x * y * z;
        };
      };
    }

## IIFE

IIFE stands for Immediately Invoked Function Expression and has the following syntax:

    const output = (
      function(x) { // anonymous function 
        delete x; // delete keyword ONLY works with objects; doesnt affect the code here
        return x; // will return x
      }
    )(0); // here we pass the argument to the anon function

In the following example the output will be 0 because the delete keyword wont affect the code. 

## JavaScript Operator Precedence

More: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

The priority of the operators is evaluated the same as it is in basic maths. However, in case we have a row of the same operators, JavaScript engine will evaluate them from RIGHT to LEFT. Example:

    var z = 1, y = z = typeof y;
    console.log(y); // undefined

First, typeof y will evaluate the y variable, which is 'undefined' by default. Then assign it to z, and then to y. The overall sequence will look like that:

    var z;
    z = 1;
    var y;
    z = typeof y;
    y = z;


# Node JS

Node.js is a runtime environment that allows you to run JavaScript on the server-side. It uses the V8 JavaScript engine, originally created for Google Chrome, to execute JavaScript code outside of the browser. Node.js provides an event-driven, non-blocking I/O model, making it efficient and suitable for building scalable network applications.

In Node.js, packages and modules are fundamental concepts for organizing and reusing code.

## Packages

A package in Node.js is a directory that contains a package.json file, which describes the package's metadata and dependencies. Packages can be published and shared through the npm (Node Package Manager) registry, allowing developers to easily install and use them in their projects. Packages can range from small utility libraries to complete frameworks.

## Modules

A module in Node.js is a single file or a group of related files that encapsulate a set of functionalities. Modules allow you to split your code into smaller, manageable units and provide a way to import and export functionality between files. Each module has its own scope, and the exported functions, objects, or values can be accessed by other modules using the require function.

The require function is used to import modules in Node.js. By specifying the module's name or file path, Node.js resolves the dependencies and loads the module into the current file. Modules can expose functionality through the module.exports object or by assigning values directly to exports. Other modules can then use require to access the exported functionality.

## package.json vs package-lock.json

Both pacakge.json and package-lock.json are used to manage dependencies and packages. However, they serve different purposes:

- **package.json** is the heart of a Node.js project. It is a JSON file that contains various metadata about the project, including the project's name, version, description, entry point, scripts, dependencies, and more. It is manually maintained by the developer or generated using tools like npm init. The dependencies section lists the packages that the project depends on, along with their versions.

- **package-lock.json** is automatically generated by npm when installing or updating packages. It is used to lock the versions of the installed dependencies to ensure that the project uses the same versions consistently across different environments. It helps in ensuring that every developer and every server running the project will use the exact same versions of the dependencies, avoiding any potential discrepancies or conflicts.


