import { type Story } from '@storybook/react'
import '../../../src/app/styles/index.scss'
import type { Theme } from 'app/providers/ThemeProvider'
import { ThemeProvider } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
<div className={`app ${theme}`}>
<StoryComponent/>
    </div>
    </ThemeProvider>
)
