import type { Meta, StoryObj } from '@storybook/react'
import { NotificationList } from './NotificationList'
import { StoreDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof NotificationList> = {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [{}

        ]
      }
    ]
  }
}
export default meta

type Story = StoryObj<typeof NotificationList>
export const Primary: Story = {
  parameters: {
    mockData: [
      {
        url: `${__API__}/notifications`,
        method: 'GET',
        status: 200,
        response: [{}

        ]
      }
    ]
  }
}
