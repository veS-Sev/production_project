import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import {
  type ReactNode,
  type MutableRefObject,
  useRef,
  type UIEvent
} from 'react'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { uiAction } from 'features/UI'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useInitionalEffect } from 'shared/lib/hooks/useInitionalEffect/useInitionalEffect'
import { getUIScrollByPath } from 'features/UI/model/selectors/ui'
import { type StateSchema } from 'app/providers/StoreProvider'
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle'
interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = (props: PageProps) => {
  const { className, children, onScrollEnd } = props
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
    <section
      ref={wrapperRef}
      className={classNames(cls.Page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      {onScrollEnd && <div ref={triggerRef} className={cls.scrollEnd}/>}
    </section>
  )
}
