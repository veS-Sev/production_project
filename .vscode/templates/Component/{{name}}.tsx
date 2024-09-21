import { classNames } from 'shared/lib/classNames/classNames'
import cls from './{{name}}.module.scss'

interface {{name}}Props {
  className?: string
}

export const {{name}} = ({ className }: {{name}}Props) => {
  return <div className={classNames(cls.{{name}}, {}, [className])}></div>
}
