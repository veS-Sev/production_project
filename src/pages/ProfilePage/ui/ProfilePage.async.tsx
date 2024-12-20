import { lazy } from 'react'

// export const ProfilePageAsync = lazy(
//   () => import('./ProfilePage'))

export const ProfilePageAsync = lazy(
  async () => await import('./ProfilePage')
)
