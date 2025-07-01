import type { Meta, StoryObj } from '@storybook/react'
import MainPage from './MainPage'
import { StoreDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPager',
  component: MainPage,
  decorators: [StoreDecorator({})],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof MainPage>

export const Basic: Story = {}
