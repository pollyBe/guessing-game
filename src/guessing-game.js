class GuessingGame {
  max;
  last;
  min;
  constructor() {
    this.min = 0;
    this.max = 0;
    this.last = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.last = Math.ceil((this.max - this.min) / 2) + this.min;
    return this.last;
  }

  lower() {
    this.max = this.last;
  }

  greater() {
    this.min = this.last;
  }
}

module.exports = GuessingGame;
