import type { Meta, StoryObj } from '@storybook/react'
import ArticleRating from './ArticleRating'

const meta: Meta<typeof ArticleRating> = {
  title: 'shared/ArticleRating',
  component: ArticleRating,
  decorators: [],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof ArticleRating>
export const Basic: Story = {}
