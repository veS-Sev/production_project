import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { type Mods } from 'shared/lib/classNames/classNames'
import { memo, useMemo, type CSSProperties } from 'react'
interface AvatarProps {
  className?: string
  src?: string
  size: number
  alt: string
}

export const Avatar = memo(({ className, src, size, alt }: AvatarProps) => {
  const mods: Mods = {}
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size
    }),
    [size]
  )
  return (
    <img
      className={classNames(cls.Avatar, mods, [className])}
      src={src}
      style={styles}
      alt={alt}
    />
  )
})
