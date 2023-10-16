class GuessingGame {
  constructor() {
    this.maxRange = null;
    this.minRange = null;
    this.result = null;
  }

  setRange(min, max) {
    this.maxRange = max;
    this.minRange = min;
  }

  guess() {
    this.result = Math.ceil((this.minRange + this.maxRange) / 2);
    return this.result;
  }

  lower() {
    this.maxRange = this.result;
  }

  greater() {   
    this.minRange = this.result

  }
}

module.exports = GuessingGame;
