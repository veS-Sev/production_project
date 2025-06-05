import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Button } from '@/shared/ui/Button'
import { useCallback, useState, memo } from 'react'
import { ButtonTheme } from '@/shared/ui/Button/Button'
import { LoginModal } from '@/features/authByUsername'
import {
  getUserAuthData
} from '@/entities/User'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Text, TextSize, TextTheme } from '@/shared/ui/Text'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink'
import { RouterPath } from '@/shared/const/route'
import { HStack } from '@/shared/ui/Stack'
import { NotificationButton } from '@/features/notificationButton'
import { AvatarDropdown } from '@/features/avatarDropdown'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation('translation')
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onSchowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

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
          {t('Создать статью')}
        </AppLink>
        <HStack gap={'16'} className={classNames(cls.actions)}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>

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
