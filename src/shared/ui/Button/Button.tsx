import { classNames, type Mods } from '../../lib/classNames/classNames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, memo, type ReactNode } from 'react'
// import '../../../app/styles/index.scss'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
  children: ReactNode
  fullWidth?: boolean
}

export const Button = memo((props: ButtonProps) => {
  const { className, children, theme = ButtonTheme.OUTLINE, square, size = ButtonSize.M, disabled, fullWidth = false, ...otherProps } = props

  const mods: Mods = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: true,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth

  }

  return (
    <button type="button" disabled={disabled} className={classNames(cls.Button, mods, [className])} {...otherProps}>
      {children}
    </button>
  )
})
