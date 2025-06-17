import { Theme, ThemeContext } from './ThemeContext'
import { LOCAL_STORAGE_THEME_KEY } from '../../const/localStorage'
import { useContext } from 'react'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)
  let newTheme: Theme
  const toggleTheme = () => {
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT
        break
      case Theme.LIGHT:
        newTheme = Theme.PEACH
        break
      case Theme.PEACH:
        newTheme = Theme.DARK
        break
    }
    setTheme?.(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme
  }
}
