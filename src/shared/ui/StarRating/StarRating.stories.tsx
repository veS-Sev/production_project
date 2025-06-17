import type { Meta, StoryObj } from '@storybook/react'
import { StarRating } from './StarRating'
import { ThemeDecorator } from '../../config/storybook'
import { Theme } from '../../lib/theme/ThemeContext'

const meta: Meta<typeof StarRating> = {
  title: 'shared/StarRating',
  component: StarRating,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  args: {
    size: 30
  },
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof StarRating>
export const Light: Story = {}
export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
export const Pink: Story = {}
Pink.decorators = [ThemeDecorator(Theme.PEACH)]

export const Size15PX: Story = {
  args: {
    size: 15
  }
}
export const Size45PX: Story = {
  args: {
    size: 45
  }
}
