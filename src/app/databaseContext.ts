import { createContext } from 'react'

export type DatabaseState = 'initializing' | 'ready' | 'error'

export const DatabaseContext = createContext<DatabaseState>('initializing')
