export class Jedi {
    constructor() {
        /**
         * ES only allows class methods to be function declarations
         * rather than function expressions. This function will be
         * hoisted into the constructor by the TypeScript compiler.
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
