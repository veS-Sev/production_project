import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss'
import type { HTMLAttributes, ReactNode } from 'react'

export enum CapdTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  cardTheme?: CapdTheme
}

export const Card = ({ className, children, cardTheme = CapdTheme.NORMAL, ...otherProps }: CardProps) => {
  return (
    <div className={classNames(cls.Card, {}, [className, cls[cardTheme]])} {...otherProps}>
      {children}
    </div>
  )
}
