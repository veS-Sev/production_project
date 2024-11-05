import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
  ERROR = 'error',
  PRIMARY = 'primary',
}

export enum TextSize {
  M = 'size_m',
  L = 'size_l'
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

interface TextProps {
  className?: string
  theme?: TextTheme
  title?: string
  text?: string
  align?: TextAlign
  size?: TextSize
}

export const Text = (props: TextProps) => {
  const {
    className,
    theme = TextTheme.PRIMARY,
    title,
    text,
    align = TextAlign.LEFT,
    size = TextSize.M
  } = props
  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true
  }

  return (
    <div className={classNames(cls.Text, mods, [className, 'Text'])}>
      {title && (
        <p className={classNames(cls.title, {}, [className])}>{title}</p>
      )}
      {text && <p className={classNames(cls.text, {}, [className])}>{text}</p>}
    </div>
  )
}
