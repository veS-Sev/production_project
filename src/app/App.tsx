import './styles/index.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppRouter } from './providers/router/ui/AppRouter'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userActions, getUserInited } from '@/entities/User'
import { useTheme } from '@/shared/lib/theme/useTheme'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  const inited = useSelector(getUserInited)
  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])
  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback=''>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  )
}

export default App
