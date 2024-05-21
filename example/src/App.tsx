import React from 'react'
import {
  InfiniteTimerWidget,
  RelativeTime,
  TimerWidget
} from 'react-tick-timer'

const App: React.FC = () => {
  // Set various past dates for testing
  const pastDate1 = new Date(2024, 4, 18, 12, 0, 0) // Today (May 18, 2024) at 12:00 PM
  const pastDate2 = new Date(2024, 4, 17, 10, 0, 0) // Yesterday (May 17, 2024) at 10:00 AM
  const pastDate3 = new Date(2024, 3, 15, 8, 30, 0) // April 15, 2024 at 8:30 AM

  return (
    <div>
      <h1>Timer Widget App</h1>
      <div>
        <h2>Test Timer</h2>
        <TimerWidget
          startSec={0}
          startMin={10}
          startHour={0}
          onComplete={() => console.log('Timer completed!')}
          toggleStart={true}
        />
      </div>

      <div>
        <h2>Test Infinite Timer</h2>
        <InfiniteTimerWidget
          onStart={() => console.log('Infinite Timer started!')}
          onStop={() => console.log('Infinite Timer stopped!')}
          toggleStart={true}
        />
        <div>Elapsed Time (Today): {RelativeTime(pastDate1)}</div>
        <div>Elapsed Time (Yesterday): {RelativeTime(pastDate2)}</div>
        <div>Elapsed Time (April 15th): {RelativeTime(pastDate3)}</div>
      </div>
    </div>
  )
}

export default App
