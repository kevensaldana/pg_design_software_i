export default class Frame {
  protected pins: number[] = [];
  private nextFrame: Frame | null = null;
  private previousFrame: Frame | null = null;
  private bonus = 0;

  constructor() {}

  setNextFrame(nextFrame: Frame) {
    this.nextFrame = nextFrame;
  }

  setPreviousFrame(previousFrame: Frame) {
    this.previousFrame = previousFrame;
  }

  score() {
    let scoreFinal = 0;

    this.pins.forEach((value) => {
      scoreFinal = scoreFinal + value;
    });

    return scoreFinal;
  }

  roll(pins: number) {
    if (this.isCompleted()) throw new Error("Completed Frame");
    this.pins.push(pins);
  }

  private updateBonus() {
    // TODO
  }

  getNextFrame(): Frame | null {
    return this.nextFrame;
  }

  protected isSpare(): boolean {
    return this.pins.length >= 2 && this.pins[0] + this.pins[1] == 10;
  }

  protected isStrike(): boolean {
    return this.pins[0] == 10;
  }

  isCompleted(): boolean {
    return this.pins.length == 2;
  }
}
