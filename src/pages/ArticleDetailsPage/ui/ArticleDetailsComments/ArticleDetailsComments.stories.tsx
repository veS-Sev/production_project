import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetailsComments } from './ArticleDetailsComments'
import { StoreDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof ArticleDetailsComments> = {
  title: 'pages/ArticleDetailsPage/ArticleDetailsComments',
  component: ArticleDetailsComments,
  decorators: [StoreDecorator({})],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof ArticleDetailsComments>

export const Primary: Story = {}
