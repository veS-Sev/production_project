import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  decorators: [],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof Select>

export const Small: Story = {
  args: {
    label: 'Это лейбл)',
    options: [
      { value: '123', content: 'Это первый пункт' },
      { value: '456', content: 'Это второй пункт' }
    ]
  }
}
