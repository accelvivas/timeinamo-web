import { useContext } from 'react'
import { DatabaseContext } from '../app/databaseContext'

export function useDatabaseStatus() {
  return useContext(DatabaseContext)
}
