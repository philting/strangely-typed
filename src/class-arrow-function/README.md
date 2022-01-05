# Arrow Functions in Classes

In ES2021, class methods must be a
[function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function):

```
  greet() {
    console.log(`Hello, I am ${this.getFirstName()}.`);
  }
```

Arrow functions can only be a
[function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function),
so it's impossible to define a function at the top level of a class.

```
  greet = () => {
    console.log(`Hello.`);
  }
```

However, in TypeScript (and ESNext as of Jan 5, 2022), developers are allowed to
define
[class fields](https://www.typescriptlang.org/docs/handbook/2/classes.html#fields).
This essentially allows the function expression syntax listed above. Developers
used to writing TypeScript may find it odd when this feature is missing in
vanilla ECMAScript. It's even caused parsing errors in the native ESLint parser
Espree, which have been
[fixed as of ESLint v8](https://eslint.org/blog/2021/10/eslint-v8.0.0-released).

## Class fields are equivalent to defining properties in the constructor

In the `tsc-output`, you can see that class fields are equivalent to defining a
property in the constructor.

## Class fields are still not methods

Note that defining functions as class fields are still not equivalent to
defining class methods. If you use any of the `Object` functions, you will see
that class fields are defined as properties.

## Class fields need to be carefully refactored if class methods desired

It's risky to simply change the following arrow function expression:

```
  greet = () => {
    console.log(`Hello, I am ${this.getFirstName()}.`);
  }
```

Into a function declaration:

```
  greet() {
    console.log(`Hello, I am ${this.getFirstName()}.`);
  }
```

The reason is because the variable `this`
[works differently in arrow functions](https://exploringjs.com/impatient-js/ch_callables.html#this-in-callables)
than in ordinary functions.
