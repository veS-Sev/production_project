import type { Meta, StoryObj } from '@storybook/react'
import { NotificationItem } from './NotificationItem'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof NotificationItem> = {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  parameters: {
    /* ... */
  },
  args: {
    data: {
      id: '1',
      title: 'Уведомление 1',
      description: 'Это уведомление 1 для юзера 1',
      userId: '1',
      href: 'http://localhost:3000'
    }
  }
}
export default meta

type Story = StoryObj<typeof NotificationItem>
export const Basic: Story = {
}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const Peach: Story = {
  decorators: [ThemeDecorator(Theme.PEACH)]
}
