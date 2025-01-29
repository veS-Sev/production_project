import { classNames, type Mods } from 'shared/lib/classNames/classNames'
import cls from './Flex.module.scss'

type FlexJustify = 'start' | 'end' | 'center' | 'between'
type FlexAlign = 'center' | 'start' | 'end'
type FlexDirection = 'row' | 'column'
type FlexGap = '4' | '8' | '16' | '32'

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
export interface FlexProps extends DivProps {
  className?: string
  children: React.ReactNode
  justify?: FlexJustify
  align?: FlexAlign
  direction?: FlexDirection
  gap?: FlexGap
  max?: boolean
}

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  end: cls.justifyEnd,
  center: cls.justifyCenter,
  between: cls.justifyBetween
}

const alignClasses: Record<FlexAlign, string> = {
  center: cls.alignCenter,
  start: cls.alignStart,
  end: cls.alignEnd
}

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn
}

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max
  } = props
  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap]
  ]

  const mods: Mods = {
    [cls.max]: max
  }

  return <div className={classNames(cls.Flex, mods, classes)}>{children}</div>
}
