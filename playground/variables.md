# Variables

Variables is a named location for storing a values. 

## Declaration
To make a variable you `declare` it. There are kinds of variable declarations, those are 

- var
- let
- const

Variables are used as symbolic names for a value in your application.

The names of variables are called identifiers.

`var` and `let` are variables that can be updated throughout your application. `const` is a constant variable and can not be updated/overwritten once it has be declared.

When updating you `var` or `let` you do not need to declare it again, you can just update it.

```js
let name = 'max';
name = 'doug';
```

When you assign a variable value without declaring it you will set this value to the global scope and in strict mode will be given a warning. You should avoid doing this 

```js
name = 'max'
```

## Evaluation

When you have an identifier declared using `var` or `let` the value will be assign as `undefined`.

```js
let name
```

When trying to access an undeclared variable you will get a `ReferenceError`, as this variable is not declared within the scope.

```
console.log(a)
```

## Scope
Variables have different scoping rules.

`var` is function scoped
`let` and `const` are block scoped

`var` declared variables are only scoped by functions. So if you have a `var` declared inside a function, that `var` is not accessible outside of the function. This is the same of when a `var` is declared inside curly brackets (if statement) `{}`. In this case the `var` value is still accessible from outside of that block.

```js
{
    var name = 'max'
}
console.log(name) // this would output max
```

`let` and `const` variables are block scoped and this means that they are only accessible from beyond the point they are declared. Also if declared withing a block of curly brackets the variable will be scoped to that block and not accessible outside

```js
{
    let name = 'max'
}
console.log(name) // this would output a Reference error
```

## Hoisting
Hoisting is when the variable's left hand side identifier is read by the compiler into memory and can be referenced a head of time. 

This is due to the way the JS compiler works, it will read the left hand side of the statements assignment on first pass before going back and read the right side or invoking functions.
