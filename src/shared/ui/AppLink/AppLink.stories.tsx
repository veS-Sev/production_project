import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
  }
}
export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY
  }
}
export const Red: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.RED
  }
}
export const PrimaryDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
  }
}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.SECONDARY
  }
}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const RedDark: Story = {
  args: {
    children: 'Text',
    theme: AppLinkTheme.RED
  }
}
RedDark.decorators = [ThemeDecorator(Theme.DARK)]
