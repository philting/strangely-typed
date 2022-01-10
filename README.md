# Strangely Typed

This is a compilation of interesting TypeScript features.

* Class Fields
* Encapsulation (TBD)
* Enums vs Type Literals (TBD)

## Installation

Install dependencies

```
npm i
```

## Running TypeScript examples

Run [ts-node](https://github.com/TypeStrong/ts-node) (TypeScript REPL for node.js)

```
npx ts-node
```

Import example files

```
> import { Jedi } from './ts/class-arrow-function/jedi';
undefined
> const luke = new Jedi('Luke');
undefined
> luke.greet();
Hello, I am Luke.
undefined
```

## Running JavaScript examples

All the JavaScript examples are transpiled from TypeScript, and you can run these examples using NodeJS.

As of Node 16, you cannot do imports inside the NodeJS REPL like in ts-node. You'll need to do dynamic imports as follows:

```
> const { Jedi } = await import('./js/class-arrow-function/jedi.js');
undefined
> const anakin = new Jedi('Anakin');
undefined
> anakin.greet();
Hello, I am Anakin.
undefined
```

See the [`js`](./js/README.md) folder for more details.
