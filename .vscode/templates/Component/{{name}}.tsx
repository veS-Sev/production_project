import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './{{name}}.module.scss'
import { useTranslation } from 'react-i18next'

interface {{name}}Props {
  className?: string
}

export const {{name}} = (props: {{name}}Props) => {
  const { className } = props
  const { t } = useTranslation()
  return <div className={classNames(cls.{{name}}, {}, [className])}></div>
}
