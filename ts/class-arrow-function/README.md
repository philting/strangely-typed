# Arrow Functions in Classes

At the time of writing,
[class fields were not part of the ECMAScript standard](https://github.com/tc39/proposal-class-fields).
I've found this to be a common pitfall for developers who have gotten used to
defining class fields because they're used to using TypeScript or Babel.

In ES2021 and older, class methods must be a
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

However, in TypeScript (and proposed for ES2022 as of Jan 10, 2022), developers
are allowed to define
[class fields](https://www.typescriptlang.org/docs/handbook/2/classes.html#fields).
This essentially allows the function expression syntax listed above. Developers
used to writing TypeScript may find it odd when this feature is missing in older
versions of ECMAScript. It's even caused parsing errors in the native ESLint
parser Espree, which has been
[fixed as of ESLint v8](https://eslint.org/blog/2021/10/eslint-v8.0.0-released).

## Class fields are equivalent to defining properties in the constructor

When targeting ES2021 or older, the TypeScript will move all class field
definitions to the constructor, and define them as properties of the class. You
can see this in the
[`js folder`](../../js/class-arrow-function/jedi.js).

```
constructor(n) {
  /* ... */
  this.farewell = () => {
      console.log(`If you need help, ask the Council for ${this.getFirstName()}.`, 'May the Force be with you.');
  };
  /* ... */
}
```

## Class fields are still not methods

Note that defining functions as class fields is still not equivalent to
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
