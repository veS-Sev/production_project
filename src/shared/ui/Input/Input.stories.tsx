import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  decorators: [],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof Input>

export const Primary: Story = {
  args: {
    placeholder: ' placeholder Text',
    value: '1234',
    autofocus: true
  }
}
