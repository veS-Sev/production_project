import type { Meta, StoryObj } from '@storybook/react'
import { RatingCard } from './RatingCard'

const meta: Meta<typeof RatingCard> = {
  title: 'entities/Rating/RatingCard',
  component: RatingCard,
  args: {
    title: 'Тут заголовок'
  },
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof RatingCard>
export const Basic: Story = {
}
