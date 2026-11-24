import { useEffect, useState, type ReactNode } from 'react'
import { database } from '../database/database'
import { DatabaseContext, type DatabaseState } from './databaseContext'

export function DatabaseProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DatabaseState>('initializing')

  useEffect(() => {
    let active = true

    database
      .open()
      .then(() => active && setState('ready'))
      .catch((error: unknown) => {
        console.error('Unable to initialize the local database.', error)
        if (active) setState('error')
      })

    return () => {
      active = false
    }
  }, [])

  return <DatabaseContext.Provider value={state}>{children}</DatabaseContext.Provider>
}
