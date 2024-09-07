import { Suspense, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig'
import { PageLoader } from 'widgets/PageLoader'
import { getUserAuthData } from 'entities/User'
export const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData)

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter((rout) => {
      if (rout.authOnly && !isAuth) {
        return false
      }
      return true
    })
  }, [isAuth])
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route
            element={<div className='page-wrapper'>{element}</div>}
            key={path}
            path={path}
          />
        ))}
      </Routes>
    </Suspense>
  )
}
