import {
  StyleDecorator,
  ThemeDecorator,
  RouterDecorator,
  SuspenseDecorator
} from '../../src/shared/config/storybook/index'
import { Theme } from '../../src/shared/lib/theme/ThemeContext'
import { withThemeByClassName } from '@storybook/addon-themes'

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    layout: 'foolscreen'
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
    SuspenseDecorator,
    withThemeByClassName({
      themes: {
        light: Theme.LIGHT,
        dark: Theme.DARK,
        peach: Theme.PEACH
      },
      defaultTheme: 'light'
    })
  ]
}
export default preview
