import { useEffect } from 'react'
export const useInitionalEffect = (callback: () => void) => {
  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest') {
      console.log('useInitionalEffect useEffect')
      callback()
    }
  }, [])
}
