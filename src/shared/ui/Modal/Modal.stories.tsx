import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
  decorators: [ThemeDecorator(Theme.LIGHT)],
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

export const Dark: Story = {}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
