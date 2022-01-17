export type Alignment = 'neutral' | 'light' | 'dark';

export class Jedi {
  private classAlignment: Alignment;
  public closureTurnLight: () => void;
  public closureTurnDark: () => void;
  public getClosureAlignment: () => Alignment;

  constructor() {
    this.classAlignment = 'neutral';

    let closureAlignment: Alignment = 'neutral';
    this.closureTurnLight = () => {
      closureAlignment = 'light';
    };
    this.closureTurnDark = () => {
      closureAlignment = 'dark';
    };
    this.getClosureAlignment = () => closureAlignment;
  }

  public classTurnLight() {
    this.classAlignment = 'light';
  }

  public classTurnDark = () => {
    this.classAlignment = 'dark';
  };

  public getAlignment() {
    return this.classAlignment;
  }
}
