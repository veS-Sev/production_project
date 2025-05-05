import type { Meta, StoryObj } from '@storybook/react'
import AboutPage from './AboutPage'
import { Theme } from '@/app/providers/ThemeProvider'
import { StoreDecorator } from '@/shared/config/storybook'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator/RouterDecorator'
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

export const Light: Story = { decorators: [ThemeDecorator(Theme.LIGHT)] }

export const Dark: Story = { decorators: [ThemeDecorator(Theme.DARK)] }
