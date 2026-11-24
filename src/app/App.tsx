import { RouterProvider } from 'react-router-dom'
import { DatabaseProvider } from './DatabaseProvider'
import { router } from './router'

export function App() {
  return (
    <DatabaseProvider>
      <RouterProvider router={router} />
    </DatabaseProvider>
  )
}
