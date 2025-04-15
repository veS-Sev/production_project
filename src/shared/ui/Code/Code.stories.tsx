import type { Meta, StoryObj } from '@storybook/react'
import { Code } from './Code'

const meta: Meta<typeof Code> = {
  title: 'shared/Code',
  component: Code,
  decorators: [],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof Code>

export const Primary: Story = {
  args: {
    text: `\`export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof Code>\``
  }
}
