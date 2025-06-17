import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '../../lib/theme/ThemeContext'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'
import { TextSize, TextTheme, TextAlign, Text } from './Text'

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof Text>

export const Primary: Story = {
  args: {
    size: TextSize.M,
    align: TextAlign.LEFT,
    theme: TextTheme.PRIMARY,
    title: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
}
export const PrimaryDark: Story = {
  args: {
    size: TextSize.M,
    align: TextAlign.LEFT,
    theme: TextTheme.PRIMARY,
    title: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const PrimaryPeach: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    title: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  decorators: [ThemeDecorator(Theme.PEACH)]
}

export const Error: Story = {
  args: {
    theme: TextTheme.ERROR,
    title: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
}

export const ErrorDark: Story = {
  args: {
    theme: TextTheme.ERROR,
    title: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const ErrorPeach: Story = {
  args: {
    size: TextSize.M,
    align: TextAlign.LEFT,
    theme: TextTheme.ERROR,
    title: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  decorators: [ThemeDecorator(Theme.PEACH)]
}

export const OnlyText: Story = {
  args: {
    size: TextSize.M,
    align: TextAlign.LEFT,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
}

export const OnlyTextDark: Story = {
  args: {
    size: TextSize.M,
    align: TextAlign.LEFT,
    theme: TextTheme.PRIMARY,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const OnlyTitle: Story = {
  args: {
    size: TextSize.M,
    align: TextAlign.LEFT,
    title: 'Lorem ipsum dolor'
  }
}

export const OnlyTitleDark: Story = {
  args: {
    theme: TextTheme.PRIMARY,
    title: 'Lorem ipsum dolor'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const TextSizeL: Story = {
  args: {
    size: TextSize.L,
    align: TextAlign.LEFT,
    title: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
}

export const TextSizeLDark: Story = {
  args: {
    size: TextSize.L,
    align: TextAlign.LEFT,
    title: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
// TextSizeLDark.decorators = [ThemeDecorator(Theme.DARK)]

export const TextSizeM: Story = {
  args: {
    size: TextSize.M,
    align: TextAlign.LEFT,
    title: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
}

export const TextSizeS: Story = {
  args: {
    size: TextSize.S,
    align: TextAlign.LEFT,
    title: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
}
