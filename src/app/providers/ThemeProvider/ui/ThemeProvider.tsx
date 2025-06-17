import React, { useMemo, useState } from 'react'
import {
  Theme,
  ThemeContext
} from '../../../../shared/lib/theme/ThemeContext'
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const'

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface ThemeProviderProps {
  initialTheme?: Theme
  children: React.ReactNode
}

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, initialTheme } = props
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  )
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
