import Frame from "./frame";

export class LastFrame extends Frame {
  isComplete(): boolean {
    if (this.isStrike() || this.isSpare()) {
      return this.pins.length == 3;
    } else {
      return this.pins.length == 2;
    }
  }
}
