import type { Meta, StoryObj } from '@storybook/react'
import { ArticlesViewSelector } from './ArticlesViewSelector'

const meta: Meta<typeof ArticlesViewSelector> = {
  title: 'entities/Article/ArticlesViewSelector',
  component: ArticlesViewSelector,
  decorators: [],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof ArticlesViewSelector>

export const Basic: Story = {}
