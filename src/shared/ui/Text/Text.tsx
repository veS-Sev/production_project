import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
  ERROR = 'error',
  PRIMARY = 'primary'
}

interface TextProps {
  className?: string
  theme?: TextTheme
  title?: string
  text?: string
}

export const Text = (props: TextProps) => {
  const {
    className,
    theme = TextTheme.PRIMARY,
    title,
    text
  } = props
  return (
<div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
{title && <p className={classNames(cls.title, {}, [className])}>{ title }</p>}
{text && <p className={classNames(cls.text, {}, [className])}>{ text }</p>}
</div>
  )
}
