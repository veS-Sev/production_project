import { useState, useMemo, useCallback } from 'react'

interface UseHoverBind {
  onMouseEnter: () => void
  onMouseLeave: () => void
}
type useHoverReturn = [boolean, UseHoverBind]
export const useHover = (): useHoverReturn => {
  const [isHover, setIsHover] = useState(false)
  const onMouseEnter = useCallback(() => {
    setIsHover(true)
  }, [])
  const onMouseLeave = useCallback(() => {
    setIsHover(false)
  }, [])

  return useMemo(() => [isHover, { onMouseLeave, onMouseEnter }], [isHover, onMouseLeave, onMouseEnter])
}
