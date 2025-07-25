import { classNames } from '../../lib/classNames/classNames'
import cls from './Overlay.module.scss'
import { useTranslation } from 'react-i18next'

interface OverlayProps {
  className?: string
  onClick?: () => void
}

export const Overlay = (props: OverlayProps) => {
  const {
    className, onClick
  } = props

  useTranslation()
  return <div className={classNames(cls.Overlay, {}, [className])} onClick={onClick}/>
}
