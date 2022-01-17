"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Jedi_esPrivateAlignment;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jedi = void 0;
class Jedi {
    constructor() {
        /**
         * If we add "private" before #esPrivateAlignment, we'll get the following error:
         * An accessibility modifier cannot be used with a private identifier. ts(18010)
         */
        _Jedi_esPrivateAlignment.set(this, void 0);
        this.tsPrivateAlignment = 'neutral';
        __classPrivateFieldSet(this, _Jedi_esPrivateAlignment, 'neutral', "f");
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
        __classPrivateFieldSet(this, _Jedi_esPrivateAlignment, 'light', "f");
    }
    esPrivateTurnDark() {
        __classPrivateFieldSet(this, _Jedi_esPrivateAlignment, 'dark', "f");
    }
    getEsPrivateAlignment() {
        return __classPrivateFieldGet(this, _Jedi_esPrivateAlignment, "f");
    }
}
exports.Jedi = Jedi;
_Jedi_esPrivateAlignment = new WeakMap();
