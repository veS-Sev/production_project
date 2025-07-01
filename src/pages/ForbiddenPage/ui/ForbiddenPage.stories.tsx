import type { Meta, StoryObj } from '@storybook/react'
import ForbiddenPage from './ForbiddenPage'
import { StoreDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof ForbiddenPage> = {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
  decorators: [StoreDecorator({})],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof ForbiddenPage>

export const Basic: Story = {}
