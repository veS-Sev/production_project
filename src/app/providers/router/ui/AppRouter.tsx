import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig'
import { PageLoader } from 'widgets/PageLoader'
export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader/>}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route
            element={<div className="page-wrapper">{element}</div>}
            key={path}
            path={path}
          />
        ))}
      </Routes>
    </Suspense>
  )
}
