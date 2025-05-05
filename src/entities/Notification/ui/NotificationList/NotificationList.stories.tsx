import type { Meta, StoryObj } from '@storybook/react'
import { NotificationList } from './NotificationList'
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook'
import { Theme } from '@/app/providers/ThemeProvider'

const meta: Meta<typeof NotificationList> = {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  decorators: [ThemeDecorator(Theme.LIGHT), StoreDecorator({})],
  parameters: {
  }
}
export default meta

type Story = StoryObj<typeof NotificationList>
export const Basic: Story = {
  args: {

  }
}
