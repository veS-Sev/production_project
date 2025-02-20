import { addDecorator } from '@storybook/react'
import {
  StyleDecorator,
  ThemeDecorator,
  RouterDecorator,
  SuspenseDecorator
} from '../../src/shared/config/storybook/index'
import { Theme } from 'app/providers/ThemeProvider'

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
addDecorator(SuspenseDecorator)
