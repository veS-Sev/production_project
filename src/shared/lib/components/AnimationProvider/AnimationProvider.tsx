import { createContext, type ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react'

type SpringType = typeof import('@react-spring/web')
type GestureType = typeof import('@use-gesture/react')

interface AnimationContextPayload {
  Spring?: SpringType
  Gesture?: GestureType
  isLoaded?: boolean
}

const AnimationContext = createContext<AnimationContextPayload>({})
const getAsyncAnimationModules = async () => {
  // Эти библиотеки будут подгружаться праллельно
  return await Promise.all([import('@react-spring/web'), import('@use-gesture/react')])
}

// хук возвращает данные из этого контекста
export const useAnimationLibs = () => {
  // пишем что вернет то, что прописали в AnimationContextPayload в обязательном порядке, чтобы не писать typeGuards, но нужно слелить за isLoaded, чтобы библиотеки были подгружены
  return useContext(AnimationContext) as Required<AnimationContextPayload>
}

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  const SpringRef = useRef<SpringType>()
  const GestureRef = useRef<GestureType>()
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      SpringRef.current = Spring
      GestureRef.current = Gesture
      setIsLoaded(true)
    })
  }, [])
  const value = useMemo(() => ({
    Spring: SpringRef.current,
    Gesture: GestureRef.current,
    isLoaded
  }), [isLoaded])

  return <AnimationContext.Provider
   value={value}>
    { children }
    </AnimationContext.Provider>
}
