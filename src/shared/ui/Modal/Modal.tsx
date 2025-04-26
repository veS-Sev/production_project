import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { type ReactNode } from 'react'
import '../../../app/styles/index.scss'
import { Portal } from '../Portal'
import { type Mods } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { Overlay } from '../Overlay/Overlay'
import { useModal } from 'shared/lib/hooks/useModal/useModal'
export interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose: () => void
  lazy?: boolean
}

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props

  const {
    isMounted,
    isClosing,
    close
  } = useModal({
    animationDelay: 300,
    isOpen,
    onClose
  })
  const { theme } = useTheme()
  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  if (lazy && !isMounted) {
    return null
  }
  return (
    <Portal>
      <div
        className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}
      >
        <Overlay className={cls.overlay} onClick={close}/>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
      </div>
    </Portal>
  )
}
