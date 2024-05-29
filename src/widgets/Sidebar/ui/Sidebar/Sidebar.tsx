import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ButtonTheme, ButtonSize } from 'shared/ui/Button/Button'
import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink'
import { RouterPath } from 'shared/config/routeConfig'
interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollased] = useState(false)
  const { t } = useTranslation()

  const onToggle = () => {
    setCollased((prev) => !prev)
  }
  return (
    <div data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className
      ])}
    >
      <div className={cls.items}>

  <AppLink theme={AppLinkTheme.SECONDARY}to={RouterPath.main} className={cls.item}><MainIcon className={cls.icon}/>
         <span className={cls.link}>{t('Главная')}</span>
        </AppLink>

        <AppLink theme={AppLinkTheme.SECONDARY}
        to={RouterPath.about} className={cls.item}
        ><AboutIcon className={cls.icon}/>
          <span className={cls.link}>{t('О сайте')}</span></AppLink>

      </div>
      <Button type="button" className={cls.collapseBTN}onClick={onToggle} data-testid='sidebar-toggle' square size={ButtonSize.XL}
      theme={ButtonTheme.BACKGROUND_INVERTED}>{collapsed ? '>' : '<'}</Button>
      <div className={cls.switchers}>
        <ThemeSwitcher/>
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  )
}
