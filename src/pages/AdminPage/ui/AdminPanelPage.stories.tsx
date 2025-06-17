import type { Meta, StoryObj } from '@storybook/react'
import AdminPanelPage from './AdminPanelPage'
import { Theme } from '@/shared/lib/theme/ThemeContext'
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof AdminPanelPage> = {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof AdminPanelPage>

export const Light: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
export const Peach: Story = {
  decorators: [ThemeDecorator(Theme.PEACH)]
}
