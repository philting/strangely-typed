"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jedi = void 0;
class Jedi {
    constructor() {
        this.classTurnDark = () => {
            this.classAlignment = 'dark';
        };
        this.classAlignment = 'neutral';
        let closureAlignment = 'neutral';
        this.closureTurnLight = () => {
            closureAlignment = 'light';
        };
        this.closureTurnDark = () => {
            closureAlignment = 'dark';
        };
        this.getClosureAlignment = () => closureAlignment;
    }
    classTurnLight() {
        this.classAlignment = 'light';
    }
    getAlignment() {
        return this.classAlignment;
    }
}
exports.Jedi = Jedi;
