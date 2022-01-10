export type Alignment = 'neutral' | 'light' | 'dark';

export class Jedi {
  private alignment: Alignment;
  constructor() {
    this.alignment = 'neutral';
  }

  public turnLight() {
    this.alignment = 'light';
  }

  public turnDark = () => {
    this.alignment = 'dark';
  };

  public getAlignment() {
    return this.alignment;
  }
}
