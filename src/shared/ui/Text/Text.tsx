import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Text.module.scss'

export enum TextTheme {
  ERROR = 'error',
  INDERTED = 'inverted',
  PRIMARY = 'primary',
}

export enum TextSize {
  S = 'size_s',
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

type HeaderTagType = 'h1' | 'h2' | 'h3'
const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.L]: 'h1',
  [TextSize.M]: 'h2',
  [TextSize.S]: 'h3'
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

  const HeaderTag = mapSizeToHeaderTag[size]
  return (
    <div className={classNames(cls.Text, mods, [className, 'Text'])}>
      {title && (
        <HeaderTag className={classNames(cls.title, {}, [className])}>{title}</HeaderTag>
      )}
      {text && <p className={classNames(cls.text, {}, [className])}>{text}</p>}
    </div>
  )
}
