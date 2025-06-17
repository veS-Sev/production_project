import { classNames } from '../../lib/classNames/classNames'
import cls from './Skeleton.module.scss'
import { type CSSProperties } from 'react'

interface SkeletonProps {
  className?: string
  width?: string | number
  border?: string
  height?: string | number
}

export const Skeleton = (props: SkeletonProps) => {
  const { className, width, border, height } = props
  const styles: CSSProperties = {
    borderRadius: border,
    width,
    height
  }
  return <div style={styles} className={classNames(cls.Skeleton, {}, [className])}>

  </div>
}
