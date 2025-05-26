import { classNames, type Mods } from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss'
import type { HTMLAttributes, ReactNode } from 'react'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  cardTheme?: CardTheme
  max?: boolean
}

export const Card = ({ className, children, cardTheme = CardTheme.NORMAL, max, ...otherProps }: CardProps) => {
  const mods: Mods = {
    [cls.max]: max
  }
  return (
    <div className={classNames(cls.Card, mods, [className, cls[cardTheme]])} {...otherProps}>
      {children}
    </div>
  )
}
