import { type ImgHTMLAttributes, type ReactElement, useLayoutEffect, useState } from 'react'

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  fallback?: ReactElement
  errorFallback?: ReactElement
}

export const AppImage = (props: AppImageProps) => {
  const { className, src, alt = 'image', fallback, errorFallback, ...otherProps } = props
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useLayoutEffect(() => {
    const img = new Image()
    img.src = src ?? ''
    img.onload = () => {
      setIsLoading(false)
    }
    img.onerror = () => {
      setIsLoading(false)
      setHasError(true)
    }
  }, [src])

  if (isLoading && fallback) {
    return fallback
  }

  if (hasError && errorFallback) {
    return errorFallback
  }
  return <img src={src} alt={alt} className={className} {...otherProps} />
}
