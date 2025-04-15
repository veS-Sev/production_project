import type { Meta, StoryObj } from '@storybook/react'
import { Loader } from './Loader'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'

const meta: Meta<typeof Loader> = {
  title: 'shared/Loader',
  component: Loader,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof Loader>

export const Light: Story = {
}

export const Dark: Story = {
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
