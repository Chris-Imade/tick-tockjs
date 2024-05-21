import { useState, useEffect, useRef, useCallback } from 'react'

const useTimer = (
  startSec = 0,
  startMin = 0,
  startHour = 0,
  startDay = 0,
  startMonth = 0,
  startY = 0,
  onComplete?: () => void
) => {
  const [currentTime, setCurrentTime] = useState(
    startSec + startMin * 60 + startHour * 3600 + startDay * 86400
  )
  const timerRef = useRef<any>(null)

  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    timerRef.current = setInterval(() => {
      setCurrentTime((prev) => {
        if (prev <= 0) {
          clearInterval(timerRef.current!)
          onComplete && onComplete()
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }, [onComplete])

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
    }
    setCurrentTime(
      startSec + startMin * 60 + startHour * 3600 + startDay * 86400
    )
  }, [startSec, startMin, startHour, startDay, startMonth, startY])

  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [resetTimer])

  return [currentTime, startTimer, resetTimer] as const
}

export default useTimer
