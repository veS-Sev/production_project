import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta: Meta<typeof Skeleton> = {
  title: 'shared/Skeleton',
  component: Skeleton,
  decorators: [],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof Skeleton>

export const Normal: Story = {
  args: {
    width: '100%',
    height: 200
  }
}

export const Cercle: Story = {
  args: {
    width: 100,
    height: 100,
    border: '50%'
  }
}
