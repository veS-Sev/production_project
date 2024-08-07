import cls from './SidebarItem.module.scss'
import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import { type SidebarItemType } from 'widgets/Sidebar/model/items'
import { useTranslation } from 'react-i18next'
interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation()
  return (
    <AppLink theme={AppLinkTheme.SECONDARY} to={item.path} className={classNames(cls.item, { [cls.collapsed]: collapsed })}>
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  )
})
