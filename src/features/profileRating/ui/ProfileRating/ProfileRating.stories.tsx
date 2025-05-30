import type { Meta, StoryObj } from '@storybook/react'
import { ProfileRating } from './ProfileRating'

const meta: Meta<typeof ProfileRating> = {
  title: 'shared/ProfileRating',
  component: ProfileRating,
  decorators: [],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof ProfileRating>
export const Basic: Story = {}
