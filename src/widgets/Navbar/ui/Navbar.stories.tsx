import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'
import { StoreDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [
    StoreDecorator({})
  ],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof Navbar>

export const Basic: Story = {}

export const AuthNavbar: Story = { decorators: [StoreDecorator({ user: { authData: {} } })] }
