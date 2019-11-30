# Functions
Function are the fundamental building blocks in Javascript. A function is Javascript procedure, a set of statements that performs a task to calculate a value.

To use a function you must define it within the scope of which you wish to call/invoke it.

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

## Function expressions
Function can also be declared as a function expression.

```
NOTE: an expression valid unit of code, there are two main types of expression

- one that assigns a value
- one that has a value

An example of an expression that assigns a value
x = 10
```

A function expression can be either names like the functions above or anonymous (no name).

```js
const fist = function fist() {} // named
const second = function() {} // anonymous
```

