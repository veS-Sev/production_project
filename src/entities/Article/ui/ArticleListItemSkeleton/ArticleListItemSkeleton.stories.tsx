import type { Meta, StoryObj } from '@storybook/react'
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton'
import { ArticleView } from '../../model/consts/consts'

const meta: Meta<typeof ArticleListItemSkeleton> = {
  title: 'entities/Article/ArticleListItemSkeleton',
  component: ArticleListItemSkeleton,
  decorators: [],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof ArticleListItemSkeleton>

export const Big: Story = { args: { view: ArticleView.BIG } }

export const Small: Story = { args: { view: ArticleView.SMALL } }
