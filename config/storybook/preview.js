import {
  StyleDecorator,
  ThemeDecorator,
  RouterDecorator,
  SuspenseDecorator
} from '../../src/shared/config/storybook/index'
import { Theme } from '../../src/shared/lib/theme/ThemeContext'
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export default {
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
    SuspenseDecorator
  ]
}
