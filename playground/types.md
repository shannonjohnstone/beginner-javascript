# Types

Current types in JS are;

* Boolean
* Null
* Undefined
* Number
* BigInt
* String
* Symbol
* Object

All types in JS a part from Object are Primitive.

Primitive types are immutable and have no methods, you can not mutate these types and the only way to update one of these types is for it to be re assigned.

Objects are not Primitive and can be mutated at any point.

## String
Strings can be defined either as a string literal or using the String function method. Using the String function method will try to convert what ever is passed into to a string.

String literals can be defined using single quotes, double quotes or backtick. Depending which you use will depending on if you use escaping and if you can use variables.

### Escaping
When using single or double quote to declare a string you need to worry about escaping. Escaping is when you use the same type of quote in your string as you use to define the start and finish of that string.

```js
// this will break
const name = 'dog's'
```

```js
// this will work
const name = 'dog\'s';
```

### concatenation or interpolation

String can use concatenation or interpolation, 

- concatenation is when you add two or more string together 
- interpolation is when you inject a variable into a string.

```js
const name = 'Zag';
const bark = 'Woof, my name is ' + name; // Woof, my name is Zag
```

If you are using backtick you can use variables in your string

```js
const name = 'Zag'
const bark = `Woof, my name is ${name}` // Woof, my name is Zag
```

## Number
Number in JS can be defined with either the Number function or just a number declared to a variable.

```js
const first = Number(11)
const second = 22
```

Main reasons for using the function are;

- If the application is unsure if the argument can be converted into a number, use the function so it will return you NaN if it can't
- it can also be used to perform type conversion

Number has range or properties and methods that can be used, best place to check for those are [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

## Object
An object is a collection of key/value pairs, these can hold values or functions.

Order with in an object does not matter, it can be created and reference in any order.

```js
const dog = {
    name: 'Zag',
    bark() {
        console.log(`Woof`)
    } 
}
```

## Symbol
Symbol is a unique identifier

## Undefined
Undefined is a primitive value that is in the global scope. 

A declared variable that is yet to have a value assigned to it will have a value of undefined.

## Null
Null is used to intentionally represent a absence of any object value.

Null when checked against `typeof` will be `object`

## Boolean
Boolean is primitive value or true or false value. This can be created from using the `Boolean` function or from explicitly setting an variable to `true` or `false`

`0`, `-1`, `null`, `false`, `NaN`, `undefined` and `""` are all false, while everything else is true

NOTE: using `new Boolean()` this is different to using `Boolean()`, this is a Boolean object and using this `new Boolean()` with a false value like `new Boolean(false)` will create a truthy value

```js
const x = new Boolean(false) // true
if (x) {
    // this if statement will be executed
}
```

A primitive boolean will work as expected

```js
const x = false
if (x) {
    // this if statement will NOT be executed
}
```

### Converting boolean value
Because of the above catch around using the boolean function, do not use it to convert non boolean values. To perform this use the boolean function or the NOT operator.

```js
const a = Boolean('string')
const b = !!'string'
const c = !!''
```

## Equality
To check equality you have `==` (double equal or loose equal) or `===` (triple equal or strict equal). You should always be using triple equal.

Triple equal is faster and a better check. It will check the values and the values type are the same.

```js
10 === 10 // are both values 10 and are both values a number
```

Double equal will check if the value are equal but rather than checking the type it will perform a type conversion. This conversion is implicit and should really ber avoided where possible. 

```js
10 == '10' // is the value 10, if both values are different types it will convert one into the others type
```

