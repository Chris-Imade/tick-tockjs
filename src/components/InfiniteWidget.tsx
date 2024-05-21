// InfiniteTimerWidget.tsx
import React, { useEffect, useState } from 'react'
import InfiniteTimer from '../timers/InfiniteTimer'

interface InfiniteTimerWidgetProps {
  onStart?: () => void
  onStop?: () => void
  toggleStart?: boolean
}

const InfiniteTimerWidget: React.FC<InfiniteTimerWidgetProps> = ({
  onStart,
  onStop,
  toggleStart = true
}) => {
  const [currentTime, setCurrentTime] = useState(0)
  const [infiniteTimer] = useState(() => new InfiniteTimer(setCurrentTime))

  useEffect(() => {
    if (toggleStart) {
      infiniteTimer.start()
      if (onStart) onStart()
    } else {
      infiniteTimer.stop()
      if (onStop) onStop()
    }
  }, [toggleStart, infiniteTimer, onStart, onStop])

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
      {formatTime(currentTime)}
    </div>
  )
}

export default InfiniteTimerWidget
