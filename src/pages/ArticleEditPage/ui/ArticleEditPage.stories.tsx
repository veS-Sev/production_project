import type { Meta, StoryObj } from '@storybook/react'
import ArticleEditPage from './ArticleEditPage'
import { StoreDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof ArticleEditPage> = {
  title: 'pages/ArticleEditPage',
  component: ArticleEditPage,
  decorators: [StoreDecorator({})],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof ArticleEditPage>

export const Primary: Story = {}
