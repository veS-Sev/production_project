import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { RouterPath } from '@/shared/config/routeConfig'
import { Avatar } from '@/shared/ui/Avatar'
import { Dropdown } from '@/shared/ui/Popups'
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from '@/entities/User'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface AvatarDropdownProps {
  className?: string
}

export const AvatarDropdown = (props: AvatarDropdownProps) => {
  const { className } = props
  const { t } = useTranslation()
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const dispatch = useDispatch()
  const authData = useSelector(getUserAuthData)
  const onLogOut = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])
  const isAdminPanelAvailable = isAdmin || isManager
  if (!authData) {
    return null
  }
  return <Dropdown
          className={classNames('', {}, [className])}
          direction={'bottom-left'}
          trigger={<Avatar size={30} src={authData.avatar} />}
          items={[
            ...(isAdminPanelAvailable
              ? [
                  {
                    disabled: false,
                    content: t('Админка'),
                    href: RouterPath.admin
                  }
                ]
              : []),
            { disabled: false, content: t('Выйти'), onClick: onLogOut },
            {
              disabled: false,
              content: t('Профиль'),
              href: RouterPath.profile + authData.id
            }
          ]}
          />
}
