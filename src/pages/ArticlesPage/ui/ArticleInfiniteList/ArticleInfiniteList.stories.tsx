import type { Meta, StoryObj } from '@storybook/react'
import { ArticleInfiniteList } from './ArticleInfiniteList'
import { StoreDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof ArticleInfiniteList> = {
  title: 'pages/ArticlesPage/ArticleInfiniteList',
  component: ArticleInfiniteList,
  decorators: [StoreDecorator({})],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof ArticleInfiniteList>

export const Primary: Story = {}
