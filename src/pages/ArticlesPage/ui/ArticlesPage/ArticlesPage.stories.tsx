import type { Meta, StoryObj } from '@storybook/react'
import ArticlesPage from './ArticlesPage'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta: Meta<typeof ArticlesPage> = {
  title: 'pages/ArticlesPage/ArticlesPage',
  component: ArticlesPage,
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof ArticlesPage>

export const Primary: Story = {}
