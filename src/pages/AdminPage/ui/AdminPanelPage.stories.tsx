import type { Meta, StoryObj } from '@storybook/react'
import AdminPanelPage from './AdminPanelPage'
import { StoreDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof AdminPanelPage> = {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
  decorators: [StoreDecorator({})],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof AdminPanelPage>

export const Basic: Story = {}
