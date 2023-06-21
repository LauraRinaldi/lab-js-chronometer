class Chronometer {
  constructor() {
  this.currentTime = 0;
  this.intervalId = null;
  }

  start(printTimeCallback) {
  this.intervalId = setInterval(() =>{
    this.currentTime++;
    if(printTimeCallback) {
      printTimeCallback();
    }
  }, 1000);
  }


  getMinutes() {
    let minutes = Math.floor(this.currentTime/60)
    return minutes
  }

  getSeconds() {
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
   let result = value.toString()
   if(result.length < 2) {
    result = '0'+ result.slice(0,1)
   }
   return result
  }

  stop() {
    clearInterval((this.intervalId))
  }

  reset() {
    this.currentTime = 0
  }

  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
