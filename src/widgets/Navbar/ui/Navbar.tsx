import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { useCallback, useState } from 'react'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/authByUsername'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onSchowModal = useCallback(() => {
    setIsAuthModal(true)
    console.log()
  }, [])
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>{t('/')}
      <Button theme = {ButtonTheme.CLEAR_INVERTED} onClick={onSchowModal}>{t('Войти')}</Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
      </div>
    </div>
  )
}
