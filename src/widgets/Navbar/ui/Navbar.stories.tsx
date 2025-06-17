import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'
import { Theme } from '@/shared/lib/theme/ThemeContext'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({})
  ],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof Navbar>

export const Basic: Story = {}

export const Light: Story = {}

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] }

export const AuthNavbar: Story = { decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData: {} } })] }
