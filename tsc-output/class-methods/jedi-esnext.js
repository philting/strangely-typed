export class Jedi {
    constructor() {
        /* empty */
    }
    greet() {
        console.log('Hello.');
    }
    /**
     * This file was compiled with target: esnext
     * 
     * This function does not get hoisted into the constructor.
     */
    farewell = () => {
        console.log('May the Force be with you.');
    };
}
