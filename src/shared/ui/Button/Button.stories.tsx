import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonTheme, ButtonSize } from './Button'
import { Theme } from '../../lib/theme/ThemeContext'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Text'
  }
}

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR
  }
}

export const ClearInverted: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED
  }
}

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M
  }
}

export const OutlineSizeL: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
  }
}

export const OutlineSizeXL: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
  }
}

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
  }
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND
  }
}

export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}

export const Disabled: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
    disabled: true
  }
}

export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M
  }
}

export const SquareSizeL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
  }
}

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL
  }
}

export const FullWidth: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
    disabled: true,
    fullWidth: true
  }
}
