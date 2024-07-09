import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { useCallback, useState } from 'react'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/authByUsername'
import { getUserAuthData, userActions } from 'entities/User'
import { useDispatch, useSelector } from 'react-redux'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onSchowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogOut = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  if (authData) {
    return (
      <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>{t('/')}
        <Button theme = {ButtonTheme.CLEAR_INVERTED} onClick={onLogOut}>{t('Выйти')}</Button>
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
        </div>
      </div>
    )
  }
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>{t('/')}
      <Button theme = {ButtonTheme.CLEAR_INVERTED} onClick={onSchowModal}>{t('Войти')}</Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
}</div>
    </div>
  )
}
