import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Button } from 'shared/ui/Button'
import { useCallback, useState, memo } from 'react'
import { ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/authByUsername'
import { getUserAuthData, userActions } from 'entities/User'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Text, TextSize, TextTheme } from 'shared/ui/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import { RouterPath } from 'shared/config/routeConfig'
import { Dropdown } from 'shared/ui/Dropdown'
import { Avatar } from 'shared/ui/Avatar'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation('translation')
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
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          className={cls.appName}
          size={TextSize.L}
          theme={TextTheme.PRIMARY}
          title={'SEV-SEV APP'}
        />
        <AppLink
          className={cls.createBtn}
          theme={AppLinkTheme.PRIMARY}
          to={RouterPath.article_create}
        >
          {'Создать статью'}
        </AppLink>
        <Dropdown
          className={cls.dropdown}
          direction={'bottom-left'}
          trigger={<Avatar size={30} src={authData.avatar} />}
          items={[
            { disabled: false, content: 'Выйти', onClick: onLogOut },
            {
              disabled: false,
              content: 'Профиль',
              href: RouterPath.profile + authData.id
            }
          ]}
        />
      </header>
    )
  }
  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Text theme={TextTheme.PRIMARY} title={'SEV-SEV APP'} />
      <Button
        className={cls.links}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onSchowModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  )
})
