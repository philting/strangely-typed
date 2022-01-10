"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jedi = void 0;
class Jedi {
    constructor() {
        this.turnDark = () => {
            this.alignment = 'dark';
        };
        this.alignment = 'neutral';
    }
    turnLight() {
        this.alignment = 'light';
    }
    getAlignment() {
        return this.alignment;
    }
}
exports.Jedi = Jedi;
