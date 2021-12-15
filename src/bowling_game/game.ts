import Frame from "./frame";

export default class Game {
  private frames: Frame[] = new Array<Frame>(10);
  private currentFrame: Frame | null = null;
  private numMaxFrames = 10;

  constructor() {
    this.initFrames();
    this.currentFrame = this.frames[0];
  }

  roll(pins: number) {
    if (this.currentFrame.isCompleted()) {
      this.currentFrame = this.currentFrame.getNextFrame();
    }
    if (this.isGameOver()) {
      throw new Error("Game Over");
    }
    this.currentFrame.roll(pins);
  }

  score() {
    let scoreFinal = 0;
    this.frames.forEach((frame) => {
      scoreFinal = scoreFinal + frame.score();
    });
    return scoreFinal;
  }

  private isGameOver() {
    return this.currentFrame == null;
  }

  private initFrames() {
    for (let index = 0; index < this.numMaxFrames; index++) {
      this.frames[index] = new Frame();
      if (index > 0) {
        this.frames[index - 1].setNextFrame(this.frames[index]);
        this.frames[index].setPreviousFrame(this.frames[index - 1]);
      }
    }
  }
}
