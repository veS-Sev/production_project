import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'
import { Modal } from 'shared/ui/Modal'
import { useCallback, useState } from 'react'
import { ButtonTheme } from 'shared/ui/Button/Button'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>{t('/')}
      <Button theme = {ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>{t('Войти')}</Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>{t('Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, adipisci ut? Excepturi incidunt possimus ipsa quasi, esse sit sunt expedita necessitatibus laboriosam voluptatibus corporis, eligendi fugiat a molestias iste iure!')}</Modal>
      </div>
    </div>
  )
}
