export class Jedi {
  constructor() {
    /* empty */
  }

  public greet() {
    console.log('Hello.');
  }

  /**
   * This function will be hoisted into the constructor
   * by the TypeScript compiler.
   */
  public farewell = () => {
    console.log('May the Force be with you.');
  };
}
