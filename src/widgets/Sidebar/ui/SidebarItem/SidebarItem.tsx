import cls from './SidebarItem.module.scss'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import { type SidebarItemType } from '../../model/types/sidebar'
import { getUserAuthData } from 'entities/User'
import { useTranslation } from 'react-i18next'
interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation('translation')
  const isAuth = useSelector(getUserAuthData)
  if (!isAuth && item.authOnly) {
    return null
  }

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  )
})
