import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Drawer.module.scss'
import { Overlay } from '../Overlay/Overlay'
import { Portal } from '../Portal'
import { type ReactNode } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
interface DrawerProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void

}

export const Drawer = (props: DrawerProps) => {
  const {
    className, children,
    isOpen, onClose
  } = props
  const mods: Mods = {
    [cls.opened]: isOpen
  }
  const { theme } = useTheme()
  return <Portal>
    <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
      <Overlay onClick={onClose} />
      <div className={classNames(cls.content, {}, [className])}>
        {children}
      </div>
    </div>
  </Portal>
}
