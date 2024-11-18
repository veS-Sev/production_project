import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { memo, useState } from 'react'
import { Button } from 'shared/ui/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ButtonTheme, ButtonSize } from 'shared/ui/Button/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { getSidebarItems } from './../../model/selector/getSidebarItems'
import { useSelector } from 'react-redux'
interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollased] = useState(false)
  const sidebarItemList = useSelector(getSidebarItems)

  const onToggle = () => {
    setCollased((prev) => !prev)
  }
  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className
      ])}
    >
      <div className={cls.items}>
        {sidebarItemList.map((item) => (
          <SidebarItem collapsed={collapsed} key={item.path} item={item} />
        ))}
      </div>
      <Button
        type='button'
        className={cls.collapseBTN}
        onClick={onToggle}
        data-testid='sidebar-toggle'
        square
        size={ButtonSize.XL}
        theme={ButtonTheme.BACKGROUND_INVERTED}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  )
})
