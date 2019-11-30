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
Strings can be defined either as a string literal or using the String constructor method. Using the String constructor method will try to convert what ever is passed into to a string.

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