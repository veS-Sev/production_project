import type { Meta, StoryObj } from '@storybook/react'
import ForbiddenPage from './ForbiddenPage'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof ForbiddenPage> = {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof ForbiddenPage>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Peach: Story = {
  decorators: [ThemeDecorator(Theme.PEACH)]
}
