import { classNames } from '../../lib/classNames/classNames'
import { memo } from 'react'
import './Loader.scss'

interface LoaderProps {
  className?: string
}

export const Loader = memo(({ className }: LoaderProps) => {
  return (
<span className={classNames('loader', {}, [className])}></span>)
})
