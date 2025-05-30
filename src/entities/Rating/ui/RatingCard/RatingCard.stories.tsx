import type { Meta, StoryObj } from '@storybook/react'
import { RatingCard } from './RatingCard'
import { ThemeDecorator } from '@/shared/config/storybook'
import { Theme } from '@/app/providers/ThemeProvider'

const meta: Meta<typeof RatingCard> = {
  title: 'entities/Rating/RatingCard',
  component: RatingCard,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: {
    title: 'Тут заголовок'
  },
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof RatingCard>
// export const Light: Story = {}

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] }

export const Peach: Story = { decorators: [ThemeDecorator(Theme.PEACH)] }

export const Light: Story = {
}
