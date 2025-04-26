import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type MutableRefObject
} from 'react'
interface useModaPtops {
  isOpen: boolean
  onClose: () => void
  animationDelay?: number
}
export const useModal = (props: useModaPtops) => {
  const { isOpen, onClose, animationDelay } = props
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>

  const close = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, animationDelay)
    }
  }, [onClose, animationDelay])

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close()
      }
    },
    [close]
  )
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      clearInterval(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])
  return {
    isMounted,
    isClosing,
    close
  }
}
