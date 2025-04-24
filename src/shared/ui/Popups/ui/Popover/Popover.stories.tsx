import type { Meta, StoryObj } from '@storybook/react'
import { Popover } from './Popover'

const meta: Meta<typeof Popover> = {
  title: 'shared/Popups/Popover',
  component: Popover,
  decorators: [],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof Popover>
export const Basic: Story = {}
