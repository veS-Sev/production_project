// import { type StoryObj } from '@storybook/react'
// eslint-disable-next-line
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import { type Theme } from '../../../lib/theme/ThemeContext'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: any) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  )

// import { type Story } from '@storybook/react'
// import type { Theme } from 'app/providers/ThemeProvider'
// import { ThemeProvider } from 'app/providers/ThemeProvider'

// export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
//   (
//     <ThemeProvider initialTheme={theme}>
//       <div className={`app ${theme}`}>
//         <StoryComponent />
//       </div>
//     </ThemeProvider>
//   )
