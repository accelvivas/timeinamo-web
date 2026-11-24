import { Database, WifiOff } from 'lucide-react'
import { useDatabaseStatus } from '../hooks/useDatabaseStatus'

const statusCopy = {
  initializing: 'Preparing local storage…',
  ready: 'Local storage ready',
  error: 'Local storage unavailable',
} as const

export function FoundationPage() {
  const databaseStatus = useDatabaseStatus()

  return (
    <section className="intro" aria-labelledby="intro-title">
      <div className="intro__copy">
        <p className="eyebrow">Personal Work &amp; OJT Tracker</p>
        <h1 id="intro-title">Track Time. Record Progress.</h1>
        <p className="intro__description">
          TimeInamo keeps your work records on this device, ready for the next stage of setup.
        </p>
      </div>
      <div className="foundation-status" aria-label="Application foundation status">
        <div className="status-item">
          <Database aria-hidden="true" />
          <span>{statusCopy[databaseStatus]}</span>
        </div>
        <div className="status-item">
          <WifiOff aria-hidden="true" />
          <span>Designed for offline use</span>
        </div>
      </div>
      <p className="storage-note">
        Records stored in your browser can be removed by clearing site data or by browser storage eviction.
      </p>
    </section>
  )
}
