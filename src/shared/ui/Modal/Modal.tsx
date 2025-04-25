import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Modal.module.scss'
import { type ReactNode, useState, useRef, useEffect, useCallback, type MutableRefObject } from 'react'
import '../../../app/styles/index.scss'
import { Portal } from '../Portal'
import { type Mods } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { Overlay } from '../Overlay/Overlay'

export interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300
export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props

  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { theme } = useTheme()
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>
  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler()
      }
    },
    [closeHandler]
  )
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearInterval(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])
  if (lazy && !isMounted) {
    return null
  }
  return (
    <Portal>
      <div
        className={classNames(cls.Modal, mods, [className, theme, 'app_modal'])}
      >
        <Overlay className={cls.overlay} onClick={closeHandler}/>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
      </div>
    </Portal>
  )
}
