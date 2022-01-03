export class Jedi {
    constructor() {
        /**
         * This function will be hoisted into the constructor
         * by the TypeScript compiler.
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
