import type { Meta, StoryObj } from '@storybook/react'
import { NotificationItem } from './NotificationItem'

const meta: Meta<typeof NotificationItem> = {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
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
export const Primary: Story = {
}
