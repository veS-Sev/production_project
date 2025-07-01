import type { Meta, StoryObj } from '@storybook/react'
import { NotificationList } from './NotificationList'
import { StoreDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof NotificationList> = {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  decorators: [StoreDecorator({})],
  parameters: {
  }
}
export default meta

type Story = StoryObj<typeof NotificationList>
export const Primary: Story = {
  args: {

  }
}
