export class Jedi {
  constructor() {}
  public greet() {
    console.log('Hello.');
  }
  // ES doesn't accept 
  public farewell = () => {
    console.log('May the Force be with you.');
  };
}
