import type { Meta, StoryObj } from '@storybook/react'
import { {{name}} } from './{{name}}'

const meta: Meta<typeof {{name}}> = {
  title: 'shared/{{name}}',
  component: {{name}},
  decorators: [],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof {{ name }}>
export const Basic: Story = {}
