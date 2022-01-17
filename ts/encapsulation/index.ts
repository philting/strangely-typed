export type Alignment = 'neutral' | 'light' | 'dark';

export class Jedi {
  private tsPrivateAlignment: Alignment;
  #esPrivateAlignment: Alignment;
  // If we add "private" before #esPrivateAlignment, we'll get the following error:
  // An accessibility modifier cannot be used with a private identifier.ts(18010)

  public closureTurnLight: () => void;
  public closureTurnDark: () => void;
  public getClosureAlignment: () => Alignment;

  constructor() {
    this.tsPrivateAlignment = 'neutral';
    this.#esPrivateAlignment = 'neutral';

    let closureAlignment: Alignment = 'neutral';
    this.closureTurnLight = () => {
      closureAlignment = 'light';
    };
    this.closureTurnDark = () => {
      closureAlignment = 'dark';
    };
    this.getClosureAlignment = () => closureAlignment;
  }

  public tsPrivateTurnLight() {
    this.tsPrivateAlignment = 'light';
  }

  public tsPrivateTurnDark = () => {
    this.tsPrivateAlignment = 'dark';
  };

  public esPrivateTurnLight() {
    this.#esPrivateAlignment = 'light';
  }

  public esPrivateTurnDark = () => {
    this.#esPrivateAlignment = 'dark';
  };

  public getTsPrivateAlignment() {
    return this.tsPrivateAlignment;
  }

  public getEsPrivateAlignment() {
    return this.#esPrivateAlignment;
  }
}
