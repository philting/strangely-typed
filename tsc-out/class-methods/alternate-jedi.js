export class Jedi {
    constructor() {
        /**
         * Notice that because TypeScript will compile this file,
         * VSCode does not flag this syntax as an error.
         *
         * This will also be hoisted into the constructor during compilation.
         */
        this.farewell = () => {
            console.log('May the Force be with you.');
        };
        /* empty */
    }
    greet() {
        console.log('Hello.');
    }
}
