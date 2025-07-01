import type { Meta, StoryObj } from '@storybook/react'
import { TextSize, TextTheme, TextAlign, Text } from './Text'

const meta: Meta<typeof Text> = {
  title: 'shared/Text',
  component: Text,
  decorators: [],
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

export const Error: Story = {
  args: {
    theme: TextTheme.ERROR,
    title: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
}

export const OnlyText: Story = {
  args: {
    size: TextSize.M,
    align: TextAlign.LEFT,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
}

export const OnlyTitle: Story = {
  args: {
    size: TextSize.M,
    align: TextAlign.LEFT,
    title: 'Lorem ipsum dolor'
  }
}

export const TextSizeL: Story = {
  args: {
    size: TextSize.L,
    align: TextAlign.LEFT,
    title: 'Lorem ipsum dolor',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
}

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
