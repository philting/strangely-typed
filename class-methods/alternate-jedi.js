export class Jedi {
  constructor() {
    /* empty */
  }

  greet() {
    console.log('Hello.');
  }

  /**
   * Notice that because TypeScript will compile this file,
   * VSCode does not flag this syntax as an error.
   * 
   * This will also be hoisted into the constructor during compilation.
   */
  farewell = () => {
    console.log('May the Force be with you.');
  };
}
