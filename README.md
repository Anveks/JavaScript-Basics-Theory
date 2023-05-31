# JS Theory

### Arrays
- [Adding Elements](#Adding-Elements)
- [Removing Elements](#Removing-Elements)
- [Finding Elements (Primitive Types)](#Finding-Elements)
- [The ...args Syntax](#The-args-syntax)
- [Shallow Copy](#Shallow-Copy)
- [Shallow Copy](#Shallow-Copy)
- [Data Structures](#Data-Structures)
- [Factory Functions and Constructor Functions](#Factory-Functions-and-Constructor-Functions)
- [Asynchronous Code](#Asynchronous-Code)
- [API](#API)
- [DOM](#DOM)
- [Events](#Events)


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

1. A constructor function is a special function that is used with the new keyword to create objects.
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


# Node JS

Node.js is a runtime environment that allows you to run JavaScript on the server-side. It uses the V8 JavaScript engine, originally created for Google Chrome, to execute JavaScript code outside of the browser. Node.js provides an event-driven, non-blocking I/O model, making it efficient and suitable for building scalable network applications.

In Node.js, packages and modules are fundamental concepts for organizing and reusing code.

## Packages

A package in Node.js is a directory that contains a package.json file, which describes the package's metadata and dependencies. Packages can be published and shared through the npm (Node Package Manager) registry, allowing developers to easily install and use them in their projects. Packages can range from small utility libraries to complete frameworks.

## Modules

A module in Node.js is a single file or a group of related files that encapsulate a set of functionalities. Modules allow you to split your code into smaller, manageable units and provide a way to import and export functionality between files. Each module has its own scope, and the exported functions, objects, or values can be accessed by other modules using the require function.

The require function is used to import modules in Node.js. By specifying the module's name or file path, Node.js resolves the dependencies and loads the module into the current file. Modules can expose functionality through the module.exports object or by assigning values directly to exports. Other modules can then use require to access the exported functionality.

## package.json vs package-lock.json



