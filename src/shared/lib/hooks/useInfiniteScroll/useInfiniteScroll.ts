import { type MutableRefObject, useEffect } from 'react'

export interface useInfiniteScrollProps {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = ({
  callback,
  triggerRef,
  wrapperRef
}: useInfiniteScrollProps) => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null
    if (callback) {
      const options = {
        root: wrapperRef.current,
        rootMargin: '0px',
        threshold: 1.0
      }

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback()
        }
      }, options)
      observer.observe(triggerRef.current)
    }
    return () => {
      if (observer && triggerRef.current
      ) {
        observer.unobserve(triggerRef.current)
      }
    }
  }, [wrapperRef, triggerRef, callback])
}
