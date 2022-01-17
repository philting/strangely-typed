"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jedi = void 0;
class Jedi {
    tsPrivateAlignment;
    #esPrivateAlignment;
    closureTurnLight;
    closureTurnDark;
    getClosureAlignment;
    constructor() {
        this.tsPrivateAlignment = 'neutral';
        this.#esPrivateAlignment = 'neutral';
        let closureAlignment = 'neutral';
        this.closureTurnLight = () => {
            closureAlignment = 'light';
        };
        this.closureTurnDark = () => {
            closureAlignment = 'dark';
        };
        this.getClosureAlignment = () => closureAlignment;
    }
    tsPrivateTurnLight() {
        this.tsPrivateAlignment = 'light';
    }
    tsPrivateTurnDark = () => {
        this.tsPrivateAlignment = 'dark';
    };
    esPrivateTurnLight() {
        this.#esPrivateAlignment = 'light';
    }
    esPrivateTurnDark = () => {
        this.#esPrivateAlignment = 'dark';
    };
    getTsPrivateAlignment() {
        return this.tsPrivateAlignment;
    }
    getEsPrivateAlignment() {
        return this.#esPrivateAlignment;
    }
}
exports.Jedi = Jedi;
