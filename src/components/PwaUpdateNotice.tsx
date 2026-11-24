import { RefreshCw, X } from 'lucide-react'
import { useRegisterSW } from 'virtual:pwa-register/react'

export function PwaUpdateNotice() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW()

  if (!needRefresh) return null

  return (
    <aside className="update-notice" role="status" aria-live="polite">
      <div>
        <strong>Update ready</strong>
        <p>Save any work before refreshing to use the latest version.</p>
      </div>
      <div className="update-notice__actions">
        <button className="button button--primary" type="button" onClick={() => updateServiceWorker(true)}>
          <RefreshCw aria-hidden="true" size={16} />
          Update
        </button>
        <button className="icon-button" type="button" onClick={() => setNeedRefresh(false)} aria-label="Dismiss update">
          <X aria-hidden="true" size={18} />
        </button>
      </div>
    </aside>
  )
}
