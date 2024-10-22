class GuessingGame {
  constructor() {
    this.min = null;
    this.max = null;
    this.currentGuess = null;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.currentGuess = Math.floor((this.min + this.max) / 2);
    return this.currentGuess;
  }

  lower() {
    this.max = this.currentGuess - 1;
  }

  greater() {
    this.min = this.currentGuess + 1;
  }
}

module.exports = GuessingGame;
