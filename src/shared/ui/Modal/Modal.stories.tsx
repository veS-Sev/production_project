import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  decorators: [],
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, adipisci ut? Excepturi incidunt possimus ipsa quasi, esse sit sunt expedita necessitatibus laboriosam voluptatibus corporis, eligendi fugiat a molestias iste iure!',
    isOpen: true
  },
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof Modal>

export const Primary: Story = {}
