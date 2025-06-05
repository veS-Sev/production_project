import { Suspense, useCallback } from 'react'
import { RequireAuth } from './RequireAuth'
import { type AppRouteProps } from '@/shared/types/route'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from '@/widgets/PageLoader'
import { routeConfig } from '../config/routeConfig'

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (<Suspense fallback={<PageLoader />}>
      {route.element}
    </Suspense>)

    return (
      <Route
        element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
        key={route.path}
        path={route.path}
      />
    )
  }, [])

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}
