import Game from "../src/bowling_game/game";

describe("Bowling Game", () => {
  let game: Game = null;
  beforeEach(() => {
    game = new Game();
  });

  const roll = (times: number, pins: number) => {
    Array.from(Array(times).keys()).forEach(() => {
      game.roll(pins);
    });
  };
  test("rolls 2, 1", () => {
    roll(2, 1);
    expect(game.score()).toBe(2);
  });

  test("rolls 0, 1", () => {
    roll(0, 1);
    expect(game.score()).toBe(0);
  });

  test.only("rolls 20, 0", () => {
    roll(20, 0);
    expect(game.score()).toBe(0);
  });

  test.only("rolls 20, 1", () => {
    roll(20, 1);
    expect(game.score()).toBe(20);
  });

  test.only("one spare", () => {
    roll(2, 5);
    game.roll(4);
    roll(17, 0);
    expect(game.score()).toBe(20);
  });
});
