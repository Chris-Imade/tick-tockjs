// timers/Timer.ts
class Timer {
  currentTime: number
  intervalId: any
  onComplete: (() => void) | undefined

  constructor(
    startSec: number = 0,
    startMin: number = 0,
    startHour: number = 0,
    startDay: number = 0,
    startMonth: number = 0,
    startY: number = 0
  ) {
    this.currentTime =
      startSec +
      startMin * 60 +
      startHour * 3600 +
      startDay * 86400 +
      startMonth * 2592000 +
      startY * 31536000
    this.intervalId = null
    this.onComplete = undefined
  }

  start(onComplete?: () => void) {
    this.onComplete = onComplete
    this.intervalId = setInterval(() => {
      if (this.currentTime > 0) {
        this.currentTime -= 1
      } else {
        this.stop()
        if (this.onComplete) this.onComplete()
      }
    }, 1000)
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }
}

export default Timer
