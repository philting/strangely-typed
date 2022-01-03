export class Jedi {
  constructor() {
    /* empty */
  }

  greet() {
    console.log('Hello.');
  }

  /**
   * This function will be hoisted into the constructor
   * by the TypeScript compiler.
   */
  farewell = () => {
    console.log('May the Force be with you.');
  };
}
