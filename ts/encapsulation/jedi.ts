export type Alignment = 'neutral' | 'light' | 'dark';

export class Jedi {
  /**
   * tsPrivateAlignment is not properly encapsulated in the js file
   * and is accessible in JavaScript runtimes.
   * 
   * As of TypeScript 4.5.4, this does not get converted into JS
   * private identifiers (i.e. prefixed with #), even with compile targets
   * that support private variables. See esnext/encapsulation for details.
   */
  private tsPrivateAlignment: Alignment;

  /**
   * If we add "private" before #esPrivateAlignment, we'll get the following error:
   * An accessibility modifier cannot be used with a private identifier. ts(18010)
   */
  #esPrivateAlignment: Alignment;

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

  public tsPrivateTurnDark() {
    this.tsPrivateAlignment = 'dark';
  }

  public getTsPrivateAlignment() {
    return this.tsPrivateAlignment;
  }

  public esPrivateTurnLight() {
    this.#esPrivateAlignment = 'light';
  }

  public esPrivateTurnDark() {
    this.#esPrivateAlignment = 'dark';
  }

  public getEsPrivateAlignment() {
    return this.#esPrivateAlignment;
  }
}
