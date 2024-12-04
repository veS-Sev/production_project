import { Suspense, useCallback } from 'react'
import { RequireAuth } from './RequireAuth'
import { routeConfig, type AppRouteProps } from 'shared/config/routeConfig'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (<Suspense fallback={<PageLoader />}>
      {route.element}
    </Suspense>)

    return (
      <Route
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
        key={route.path}
        path={route.path}
      />
    )
  }, [])

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}
