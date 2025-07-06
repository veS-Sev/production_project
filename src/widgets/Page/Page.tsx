import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import {
  type ReactNode,
  type MutableRefObject,
  useRef,
  type UIEvent
} from 'react'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { uiAction, getUIScrollByPath } from '@/features/UI'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useInitionalEffect } from '@/shared/lib/hooks/useInitionalEffect/useInitionalEffect'
import { type StateSchema } from '@/app/providers/StoreProvider'
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle'
import { TestProps, TypeProps } from '@/shared/types'
interface PageProps extends TestProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const PAGE_ID = 'PAGE_ID'

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd, } = props
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const wrapperRef = useRef() as MutableRefObject<HTMLElement>
  const dispatch = useAppDispatch()
  const { pathname } = useLocation()

  const scrollPosition = useSelector((state: StateSchema) =>
    getUIScrollByPath(state, pathname)
  )

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd
  })

  useInitionalEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition
  })
  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      uiAction.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname
      })
    )
  }, 500)

  return (
    <main
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
      onScroll={onScroll}
      id={PAGE_ID}
      data-testid={props['data-testid'] ?? 'Page'}
    >
      {children}
      {onScrollEnd && <div ref={triggerRef} className={cls.scrollEnd}/>}
    </main>
  )
}
