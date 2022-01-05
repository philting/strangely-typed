export class Jedi {
    constructor(n) {
        /**
         * This function will be hoisted into the constructor
         * by the TypeScript compiler.
         *
         * TypeScript recognizes this as a property, not a method.
         */
        this.farewell = () => {
            console.log(`If you need help, ask the Council for ${this.getFirstName()}.`, 'May the Force be with you.');
        };
        this.firstName = n ?? 'a Jedi';
    }
    /**
     * TypeScript recognizes this as a method.
     */
    greet() {
        console.log(`Hello, I am ${this.getFirstName()}.`);
    }
    getFirstName() {
        return this.firstName;
    }
}
