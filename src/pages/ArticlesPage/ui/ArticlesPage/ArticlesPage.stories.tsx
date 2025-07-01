import type { Meta, StoryObj } from '@storybook/react'
import ArticlesPage from './ArticlesPage'
import { StoreDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof ArticlesPage> = {
  title: 'pages/ArticlesPage/ArticlesPage',
  component: ArticlesPage,
  decorators: [StoreDecorator({})],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof ArticlesPage>

export const Primary: Story = {}
