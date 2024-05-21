// TimerWidget.tsx
import React, { useEffect } from 'react'
import useTimer from '../hooks/useTimer'

interface TimerWidgetProps {
  styled?: boolean
  startSec?: number
  startMin?: number
  startHour?: number
  startDay?: number
  startMonth?: number
  startY?: number
  onComplete?: () => void
  toggleStart?: boolean
}

const TimerWidget: React.FC<TimerWidgetProps> = ({
  styled = true,
  startSec = 0,
  startMin = 0,
  startHour = 0,
  startDay = 0,
  startMonth = 0,
  startY = 0,
  onComplete,
  toggleStart = false
}) => {
  const [currentTime, startTimer, resetTimer] = useTimer(
    startSec,
    startMin,
    startHour,
    startDay,
    startMonth,
    startY,
    onComplete
  )

  useEffect(() => {
    if (toggleStart) {
      startTimer()
    } else {
      resetTimer()
    }
  }, [toggleStart, startTimer, resetTimer])

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div>
      {styled ? (
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
          {formatTime(currentTime)}
        </div>
      ) : (
        <span>{formatTime(currentTime)}</span>
      )}
    </div>
  )
}

export default TimerWidget
