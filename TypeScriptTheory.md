
# TypeScript

Official site: https://www.typescriptlang.org/

TypeScript is a strongly typed programming language that extends JavaScript. Developed and presented by Microsoft in 2012. In terms of features, here are 10 significant differences between JavaScript and TypeScript:

1. TypeScript can be strongly typed, while JavaScript is dynamically typed only.
2. TypeScript is more readable and maintainable than JavaScript.
3. TypeScript supports abstraction through interfaces, while JavaScript does not.
4. TypeScript allows developers to annotate code with decorators, while JavaScript does not.
5. TypeScript supports the ability to modularize and organize components through the use of namespaces, which is not supported in JavaScript.
6. TypeScript is more expressive than JavaScript, through the use of syntax elements such as optional and named parameters.
7. TypeScript supports generics and a type inference feature that is not available in JavaScript.
8. TypeScript IDEs have more features, as it is easier to build plugins and tools for a statically typed language.
9. TypeScript code is easier to debug as the codebase expands, because type errors can be discovered at compilation time rather than runtime.
10. TypeScript implements additional features beyond the limited ECMAScript specification to which JavaScript complies.

TypeScript makes JavaScript better. 💘

## TypeScript Benefits:

- Static Typing: TypeScript is known for its strong static typing feature. It allows developers to define types for variables, function parameters, and return values. This helps catch type-related errors at compile time, providing better code quality and preventing runtime errors.

- Type Annotations: TypeScript allows you to annotate variables and functions with type information. This helps in documenting the code and providing clear expectations about the data being used.

- Type Inference: TypeScript can infer types based on how variables and functions are used. This reduces the need for explicit type annotations while still providing type checking.

- Interfaces and Classes: TypeScript supports object-oriented programming features like interfaces and classes. This makes it easier to define complex data structures and models.

- Transpilation: TypeScript code is transpiled into JavaScript code before running in a browser or Node.js environment. This means that TypeScript code can target different ECMAScript versions and still be compatible with older browsers.

- Compilation Checks: TypeScript provides compile-time checks for errors, helping you catch issues early in the development process. JavaScript, being dynamically typed, relies more on runtime checks for type-related errors.

- Compatibility: TypeScript is a superset of JavaScript, meaning that valid JavaScript code is also valid TypeScript code. This allows developers to gradually adopt TypeScript in existing projects.

- Tooling and IDE Support: TypeScript offers rich tooling, including advanced autocompletion, refactoring support, and better IntelliSense in IDEs like Visual Studio Code.

- ES Next Features: TypeScript often incorporates upcoming ECMAScript features before they are officially supported in browsers. This enables developers to use modern JavaScript features earlier.

- Community and Ecosystem: JavaScript has a larger user base and ecosystem due to its long history. TypeScript's community and ecosystem are growing, but JavaScript still has a broader range of libraries and frameworks available.

## Class vs Object

**Object** is a composite data type that groups together variables (known as properties or fields) and functions (methods) into a single unit. They provide a way to organize and structure data in a more meaningful and manageable manner. Objects allow you to encapsulate data and behavior related to a specific entity in your program. They play a central role in many programming paradigms, including object-oriented programming (OOP), where objects are used to model real-world entities and interactions between them.

**Class** is a template used to create instances of classes - as objects. Has pre-defined list of properties and methods, and a constructor function used to initialize the new instances. Objects made out of a class are created with 'new' keyword. 

## Unions and Intersection Types

Doc: https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html

A **union type** ('|') is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.

    function printId(id: number | string) {
      console.log("Your ID is: " + id);
    }
    // OK
    printId(101);
    // OK
    printId("202");
    // Error
    printId({ myID: 22342 });

In this example we can see the union type for number/string. BUT: TypeScript will only allow an operation if it is *valid* for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string:

    function printId(id: number | string) {
      console.log(id.toUpperCase());
    Property 'toUpperCase' does not exist on type 'string | number'.
      Property 'toUpperCase' does not exist on type 'number'.
    }

**Intersection types** ('&') are closely related to union types, but they are used very differently. An intersection type *combines multiple types into one*. This allows you to add together existing types to get a single type that has all the features you need. 

For example, if you had networking requests with consistent error handling then you could separate out the error handling into its own type which is merged with types which correspond to a single response type.

    interface ErrorHandling {
      success: boolean;
      error?: { message: string };
    }
    
    interface ArtworksData {
      artworks: { title: string }[];
    }
    
    interface ArtistsData {
      artists: { name: string }[];
    }
    
    // These interfaces are composed to have
    // consistent error handling, and their own data.
    
    type ArtworksResponse = ArtworksData & ErrorHandling; // an intersection of 2 intrfaces
    type ArtistsResponse = ArtistsData & ErrorHandling;
    
    const handleArtistsResponse = (response: ArtistsResponse) => {
      if (response.error) {
        console.error(response.error.message);
        return;
      }
    
      console.log(response.artists);
    };

## Static Function vs Instance Function 

Ref: https://stackoverflow.com/questions/45594196/difference-between-static-function-declaration-and-the-normal-function-declarati#:~:text=A%20static%20method%20is%20callable,able%20to%20access%20that%20method.

A static method (=function) is callable from the class itself. You do not have to create an instance of a class to call it. Usually used for utility purposes (like validations etc).

    class MyClass {
      static staticMethod() {
        // ...
      }
    }

    // Calling a static function
    MyClass.staticMethod(someVariable);

 A non-static method is callable from an instance of the class, so you basically have to create an object before being able to access that method.

    class MyClass {
      instanceMethod() {
        // ...
      }
    }

    // Creating an instance and calling an instance function
    const obj = new MyClass();
    obj.instanceMethod();

## Polymorphism

Polymorphism is the ability to create a class that has more than one form. Or in other words, classes have the same methods but different implementations. 

Imagine we have two animal classes, one class is called Dog, the other class is called Cat. Both classes should have the same properties and methods.

    class Animal {
      public name: string;

      constructor(name: string) {
        this.name = name;
      }

      public makeSound(): void {
        process.stdout.write('generic animal sound\n');
      }
    }

    export class Dog extends Animal {
      public makeSound(): void {
        process.stdout.write('wuff wuff\n');
      }
    }

    class Cat extends Animal {
      public makeSound(): void {
        process.stdout.write('meow meow\n');
      }
    }

    const pocky: Cat = new Cat('Pocky');
    pocky.makeSound(); // -> meow meow

    const toshii: Dog = new Dog('Pocky');
    toshii.makeSound(); // -> wuff wuff

## Interfaces in TypeScript

Doc: https://www.typescriptlang.org/docs/handbook/interfaces.html

One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”. 

In TypeScript, interfaces fill the role of *naming these types*, and are a powerful way of defining contracts within your code as well as contracts with code outside of your project. It is a way to define *a contract or a structure* that an object must adhere to.

    interface LabeledValue {
      label: string;
    }
    
    function printLabel(labeledObj: LabeledValue) {
      console.log(labeledObj.label);
    }
    
    let myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);

Interfaces can be used to achieve *better type checking*, especially when dealing with complex data structures, classes, and function signatures.

Interfaces can be extended, and classes can implement interfaces. This allows you to define reusable structures and behaviors that can be applied to different parts of your codebase.

    interface Shape {
      area(): number;
    }

    class Circle implements Shape {
      constructor(private radius: number) {}

      area() {
        return Math.PI * this.radius ** 2;
      }
    }

## Creating New Types with Interfaces

In TypeScript, you can create a new type using a subset of an interface by simply using the interface name as the type. When you use an interface as a type, it automatically creates a type with the same structure as the interface. You can then pick specific properties from the interface to include in your new type.

Here's how you can create a new type using a subset of an interface:
```
    interface Person {
      firstName: string;
      lastName: string;
      age: number;
    }

    type BasicInfo = Pick<Person, "firstName" | "lastName">;

    const personInfo: BasicInfo = {
      firstName: "John",
      lastName: "Doe",
    };
```

## Interface vs Abstract Class

An **interface** is a "contract" that defines the properties and methods of an object that implements it. Its like a list of properties and methods and their types. 

    interface Electrician { // defining the methods for an Electrician
      layWires(): void
    }

    interface Plumber { // defining the methods for a Plumber
      layPipes(): void
    }

    function restoreHouse(e: Electrician, p: Plumber) {
      e.layWires()
      p.layPipes()
    }

An interface doesn't exist at all at runtime, so it is not possible to make an introspection. It is the classic JavaScript way to deal with object programming, but with a good control at compile time of the defined contracts.

An **abstract clas**s is a special type of class that serves as a blueprint for the classes that want to inherit from it. An asbstract class can contain properties and methods, but you **cannot** instantiate it (create an instance), only inherit. 

When you define an abstract class, you often try to control how a process has to be implemented. For example, you could write something like this:

    abstract class HouseRestorer {
      protected abstract layWires(): void
      protected abstract layPipes(): void
      restoreHouse() {
        this.layWires()
        this.layPipes()
      }
    }

This abstract class HouseRestorer defines how the methods layWires and layPipes will be used, but it is up to a child class to implement the specialized treatments before it can be used.

## Enums 

Doc: https://www.typescriptlang.org/docs/handbook/enums.html#:~:text=Enums%20are%20one%20of%20the,numeric%20and%20string%2Dbased%20enums.

Enum stands for 'enumeration'. It is a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

For example, a numeric enum will look like the following:

    enum Direction {
      Up = 1,
      Down,
      Left,
      Right,
    }

Above, we have a numeric enum where Up is initialized with 1. All of the following members are auto-incremented from that point on. In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.

## Generics

Doc: https://www.typescriptlang.org/docs/handbook/2/generics.html


