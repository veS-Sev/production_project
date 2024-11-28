import { useEffect } from 'react'
export const useInitionalEffect = (callback: () => void) => {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      callback()
    }
  }, [callback])
}
