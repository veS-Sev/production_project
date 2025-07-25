import { createContext } from 'react'

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
  PEACH = 'app_peach_theme'
}

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})
