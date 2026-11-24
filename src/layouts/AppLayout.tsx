import { Outlet } from 'react-router-dom'
import { Brand } from '../components/Brand'
import { PwaUpdateNotice } from '../components/PwaUpdateNotice'

export function AppLayout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container site-header__inner">
          <Brand />
        </div>
      </header>
      <main className="container app-main">
        <Outlet />
      </main>
      <footer className="container site-footer">
        <span>TimeInamo</span>
        <span>Offline-first personal Work &amp; OJT Tracker</span>
      </footer>
      <PwaUpdateNotice />
    </div>
  )
}
