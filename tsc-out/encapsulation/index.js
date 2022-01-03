export class Jedi {
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
