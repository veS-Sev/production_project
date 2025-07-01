import type { Meta, StoryObj } from '@storybook/react'
import AboutPage from './AboutPage'
import { StoreDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof AboutPage> = {
  title: 'Pages/AboutPage',
  component: AboutPage,
  decorators: [
    StoreDecorator({})
  ],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof AboutPage>

export const Primary: Story = { }
