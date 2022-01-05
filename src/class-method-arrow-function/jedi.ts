export class Jedi {
  public firstName: string;

  constructor(n: string) {
    this.firstName = n ?? 'a Jedi';
  }

  /**
   * TypeScript recognizes this as a method.
   */
  public greet() {
    console.log(`Hello, I am ${this.getFirstName()}.`);
  }

  public getFirstName() {
    return this.firstName;
  }

  /**
   * This function will be hoisted into the constructor
   * by the TypeScript compiler.
   *
   * TypeScript recognizes this as a property, not a method.
   */
  public farewell = () => {
    console.log(
      `If you need help, ask the Council for ${this.getFirstName()}.`,
      'May the Force be with you.',
    );
  };
}
