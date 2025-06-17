import type { Meta, StoryObj } from '@storybook/react'
import AboutPage from './AboutPage'
import { Theme } from '@/shared/lib/theme/ThemeContext'
import { StoreDecorator } from '@/shared/config/storybook'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'

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
