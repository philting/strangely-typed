This is where all the TypeScript files are placed upon output.

Normally a directory like this would be placed in the `.gitignore` file,
but we're keeping it here for demonstration purposes.

A `package.json` file is created with `type: module` to make it easier to
use `import` syntax in the Node REPL.

As of Node 16.6, you can do [async dynamic imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports) as follows:

```
> const myModule = await import('./index.js')
undefined
> myModule.Jedi
[class Jedi]
> const anakin = new myModule.Jedi();
undefined
```
