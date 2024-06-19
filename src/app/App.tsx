import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router/ui/AppRouter'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar/ui'
import { Suspense } from 'react'
import { Theme } from './providers/ThemeProvider'

const App = () => {
  console.log('Theme', Theme)
  return (
    <div className={classNames('app', {}, [])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
