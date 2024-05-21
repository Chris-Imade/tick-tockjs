class InfiniteTimer {
  private currentTime: number
  private intervalId: any
  private onTick: (time: number) => void

  constructor(onTick: (time: number) => void) {
    this.currentTime = 0
    this.intervalId = null
    this.onTick = onTick
  }

  start() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        this.currentTime += 1
        this.onTick(this.currentTime)
      }, 1000)
    }
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
    this.currentTime = 0
    this.onTick(this.currentTime)
  }

  public getCurrentTime(): number {
    return this.currentTime
  }
}

export default InfiniteTimer
