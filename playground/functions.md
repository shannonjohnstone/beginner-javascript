# Functions
Function are the fundamental building blocks in Javascript. A function is Javascript procedure, a set of statements that performs a task to calculate a value.

Function are first class function, they are just like any other value or passed into other functions

To use a function you must define it within the scope of which you wish to call/invoke it.

```
NOTE: an expression valid unit of code, there are two main types of expression

- one that assigns a value
- one that has a value

An example of an expression that assigns a value
x = 10
```

## Defining functions
A function definition/declaration/statement. A function declaration consists of three main types

 - the name
 - parameters that can be used inside the function
 - a statement inside the function

```js
function firstFunction(a, v) {
    a + b
}
```

Functions can be declared as as the follow

- declared
- arrow functions
- anonymous function expression
- named function expression
- IIFE (immediately invoked function expression)
- method (function declared on an object)
- callback function


```js
const arrowFunction = () => console.log('arrowFunction')

function functionDeclaration() {
  console.log('functionDeclaration');
}

// named expression - anonymous
const functionExpressionAnonymous = function() {
  console.log('functionExpressionAnonymous');
};

// named expression - named
const functionExpressionNamed = function named() {
  console.log('functionExpressionNamed');
};

// Immediately invoked function expression
(function () {
  console.log('IIFE')
})()

// Methods
const myObj = {
  myMethod1: () => console.log('method'),
  myMethod2() {
    console.log('method')
  },
  myMethod2: function () {
    console.log('method')
  }
}

// callback function
[element].addEventListener('click', myCallbackFunction)
[element].addEventListener('click', () => {})
```

Some differences with these different ways to declare a function are;

- how errors are handled
- where the function can be invoked
- this scoping
- weather or not you can invoke a function from within itself

A declared function can be invoke before the position it has been declared, this is due to [hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting).

**Function expression** do not get hoisted so they can't be invoked before the are declared.

**Anonymous function expression** will not give you the name of the function where the error occurred because it does not have a name but it will give you the name of the variable identifier its assigned to.

**Arrow functions** are anonymous functions, they have no `this` binding of their own like a normal function. An arrow function has a `this` binding of the enclosing [lexical](https://hackernoon.com/javascript-execution-context-and-lexical-environment-explained-528351703922) scope.

## Function arguments and parameters
Functions can be passed data to be used inside. 

When you pass that data in at the point of invoking the function these are called arguments.

When using that data inside the function, these are call parameters 

```js
firstFunction(10, 20) // arguments are the values passed in when you invoke a function
```

```js
function firstFunction(a, a) { // these are parameters
    a + b
}
```

## Primitive and non primitive function parameters
Using primitive and non primitive parameters will have different behaviour on that value.

Changing a primitive parameters will have not effect outside of that function. So if we change the parameters inside the function that value outside will not change.

```js
const a = 1;

function first(a) {
  return ++a
}

first(a) // 2
console.log(a) // a will still be 1
```

Changing a non primitive parameters will have effect that value outside of that function. So if we change the non parameters inside the function that value outside will change.

```js
const b = { a: 10 }

function second(obj) {
  return obj.a = 1000
}

second(b) // { a: 1000 }
console.log(b) // { a: 1000 }
```