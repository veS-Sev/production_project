import type { Meta, StoryObj } from '@storybook/react'
import { StarRating } from './StarRating'
import { ThemeDecorator } from '@/shared/config/storybook'
import { Theme } from '@/app/providers/ThemeProvider'

const meta: Meta<typeof StarRating> = {
  title: 'shared/StarRating',
  component: StarRating,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof StarRating>
export const LIGHT: Story = {}
export const Dark: Story = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
export const Pink: Story = {}
Pink.decorators = [ThemeDecorator(Theme.DARK)]
