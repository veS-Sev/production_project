import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'
import { Theme } from '../../lib/theme/ThemeContext'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof Skeleton>

export const Normal: Story = {
  args: {
    width: '100%',
    height: 200
  }
}

export const Cercle: Story = {
  args: {
    width: 100,
    height: 100,
    border: '50%'
  }
}

export const DarkCercle: Story = {
  args: {
    width: 100,
    height: 100,
    border: '50%'
  }
}
DarkCercle.decorators = [ThemeDecorator(Theme.DARK)]

export const Dark: Story = {
  args: {
    width: '100%',
    height: 200
  }
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const PeachCercle: Story = {
  args: {
    width: 100,
    height: 100,
    border: '50%'
  }
}
PeachCercle.decorators = [ThemeDecorator(Theme.PEACH)]

export const Peach: Story = {
  args: {
    width: '100%',
    height: 200
  }
}
Peach.decorators = [ThemeDecorator(Theme.PEACH)]
