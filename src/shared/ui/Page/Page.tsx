import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { type ReactNode, type MutableRefObject, useRef } from 'react'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })
  return (
    <section ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  )
}
