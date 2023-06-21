class Chronometer {
  constructor() {
  
  }

  start(printTimeCallback) {
    timeoutID = setTimeout(printTimeCallback, 1000);
    this.currentTime +=1;
  }

  getMinutes() {
    // ... your code goes here
  }

  getSeconds() {
    // ... your code goes here
  }

  getCentiseconds() {
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
  }

  stop() {
    // ... your code goes here
  }

  reset() {
    // ... your code goes here
  }

  split() {
    // ... your code goes here
  }
}
