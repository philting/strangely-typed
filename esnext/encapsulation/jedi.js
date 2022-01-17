"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jedi = void 0;
class Jedi {
    /**
     * tsPrivateAlignment is not properly encapsulated in the js file
     * and is accessible in JavaScript runtimes.
     *
     * As of TypeScript 4.5.4, this does not get converted into JS
     * private identifiers (i.e. prefixed with #), even with compile targets
     * that support private variables. See esnext/encapsulation for details.
     */
    tsPrivateAlignment;
    /**
     * If we add "private" before #esPrivateAlignment, we'll get the following error:
     * An accessibility modifier cannot be used with a private identifier. ts(18010)
     */
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
    tsPrivateTurnDark() {
        this.tsPrivateAlignment = 'dark';
    }
    getTsPrivateAlignment() {
        return this.tsPrivateAlignment;
    }
    esPrivateTurnLight() {
        this.#esPrivateAlignment = 'light';
    }
    esPrivateTurnDark() {
        this.#esPrivateAlignment = 'dark';
    }
    getEsPrivateAlignment() {
        return this.#esPrivateAlignment;
    }
}
exports.Jedi = Jedi;
