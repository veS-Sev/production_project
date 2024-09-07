import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
  ERROR = 'error',
  PRIMARY = 'primary'
}
export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right'
}

interface TextProps {
  className?: string
  theme?: TextTheme
  title?: string
  text?: string
  align?: TextAlign
}

export const Text = (props: TextProps) => {
  const {
    className,
    theme = TextTheme.PRIMARY,
    title,
    text,
    align = TextAlign.LEFT
  } = props
  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true
  }
  return (
<div className={classNames(cls.Text, mods, [className, 'Text'])}>
{title && <p className={classNames(cls.title, {}, [className])}>{ title }</p>}
{text && <p className={classNames(cls.text, {}, [className])}>{ text }</p>}
</div>
  )
}
