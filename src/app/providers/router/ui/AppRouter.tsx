import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig'
import { useTranslation } from 'react-i18next'
export const AppRouter = () => {
  const { t } = useTranslation()
  return (
    <Suspense fallback={<div>{t('Загрузка...')}</div>}>
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
