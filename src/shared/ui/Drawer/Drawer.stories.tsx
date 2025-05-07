import type { Meta, StoryObj } from '@storybook/react'
import { DrawerAsync as Drawer } from './Drawer'

const meta: Meta<typeof Drawer> = {
  title: 'shared/Drawer',
  component: Drawer,
  decorators: [],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof Drawer>
export const Basic: Story = {}
