# react-tick-timer

`react-tick-timer` is a lightweight, versatile JavaScript library designed to handle all your time calculation and formatting needs. Whether you're building countdown timers, displaying elapsed time since events, or providing relative time information in your applications, `react-tick-timer` offers a straightforward and efficient solution.

[![NPM](https://img.shields.io/npm/v/react-tick-timer.svg)](https://www.npmjs.com/package/react-tick-timer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-tick-timer
```

## Components

### TimerWidget

`TimerWidget` is a configurable countdown timer that allows you to set the starting time and handles completion callbacks.

#### Props

- `startSec` (number): Initial seconds for the timer.
- `startMin` (number): Initial minutes for the timer.
- `startHour` (number): Initial hours for the timer.
- `onComplete` (function): Callback function to be called when the timer completes.
- `toggleStart` (boolean): Boolean to control the start/stop state of the timer.

### InfiniteTimerWidget

`InfiniteTimerWidget` is a timer that starts from zero and counts upwards indefinitely.

#### Props

- `onStart` (function): Callback function to be called when the timer starts.
- `onStop` (function): Callback function to be called when the timer stops.
- `toggleStart` (boolean): Boolean to control the start/stop state of the timer.

### RelativeTime

`RelativeTime` is a utility function that returns a human-readable string representing the time elapsed since a given date.

#### Usage

```javascript
import { RelativeTime } from 'react-tick-timer'

const pastDate = new Date(2024, 4, 18, 12, 0, 0) // Today (May 18, 2024) at 12:00 PM
const elapsedTime = RelativeTime(pastDate) // "X minutes/hours/days ago"
```

## Example Usage

```tsx
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
      </div>

      <div>
        <h2>Relative Time Examples</h2>
        <div>Elapsed Time (Today): {RelativeTime(pastDate1)}</div>
        <div>Elapsed Time (Yesterday): {RelativeTime(pastDate2)}</div>
        <div>Elapsed Time (April 15th): {RelativeTime(pastDate3)}</div>
      </div>
    </div>
  )
}

export default App
```

## License

MIT © [Chris-Imade](https://github.com/Chris-Imade)
