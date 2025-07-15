import type { Meta, StoryObj } from '@storybook/react'
import { StarRating } from './StarRating'

const meta: Meta<typeof StarRating> = {
  title: 'shared/StarRating',
  component: StarRating,
  decorators: [],
  args: {
    size: 30,
    selectedStars: 2
  },
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof StarRating>
export const Basic: Story = {}

export const Size15PX: Story = {
  args: {
    size: 15
  }
}
export const Size45PX: Story = {
  args: {
    size: 45,
    selectedStars: 3
  }
}
