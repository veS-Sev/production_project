import { classNames } from '../../lib/classNames/classNames'
import cls from './Avatar.module.scss'
import { type Mods } from '../../lib/classNames/classNames'
import { memo, useMemo, type CSSProperties } from 'react'
import { AppImage } from '../AppImage'
import { Skeleton } from '../Skeleton'
import UserFilledIcon from '../../assets/icons/user-filled.svg'
import { Icon } from '../Icon'
interface AvatarProps {
  className?: string
  src?: string
  size: number
  alt?: string
  fallbackInverted?: boolean
}

export const Avatar = memo(({ className, src, size = 50, alt, fallbackInverted = false }: AvatarProps) => {
  const mods: Mods = {}

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size
    }),
    [size]
  )
  const fallback = <Skeleton border={'50%'} width={size} height={size}/>
  const errorFallback = <Icon inverted={fallbackInverted} Svg={UserFilledIcon} width={size} height={size} />
  return (
    <AppImage className={classNames(cls.AppImage)}
      src={src}
      style={styles}
      alt={alt}
      fallback={fallback}
      errorFallback={errorFallback}
    />
  )
})
