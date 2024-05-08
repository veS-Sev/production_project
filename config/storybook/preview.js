import { addDecorator } from '@storybook/react'
import { StyleDecorator } from './StyleDecorator/StyleDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from './ThemeDecorator/ThemeDecorator'
import { RouterDecorator } from './RouterDecorator/RouterDecorator'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)
