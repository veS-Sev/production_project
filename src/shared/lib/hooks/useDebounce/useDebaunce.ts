import { type MutableRefObject, useCallback, useRef } from 'react'

export function useDebounce (callback: (...arg: any[]) => void, delay: number) {
  const timer = useRef() as MutableRefObject<any>

  return useCallback((...arg: any[]) => {
    if (timer.current) {
      clearInterval(timer.current)
    }
    timer.current = setTimeout(() => { callback(...arg) }, delay)
    console.log(timer.current)
  }, [callback, delay])
}
