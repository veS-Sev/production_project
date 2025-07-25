import type { Meta, StoryObj } from '@storybook/react'
import { ArticleSortSelector } from './ArticleSortSelector'

const meta: Meta<typeof ArticleSortSelector> = {
  title: 'entities/Article/ArticleSortSelector',
  component: ArticleSortSelector,
  decorators: [],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof ArticleSortSelector>

export const Basic: Story = {}
