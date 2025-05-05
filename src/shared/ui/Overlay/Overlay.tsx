import { classNames } from '@/shared/lib/classNames/classNames'
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

  const { t } = useTranslation()
  return <div className={classNames(cls.Overlay, {}, [className])} onClick={onClick}/>
}
