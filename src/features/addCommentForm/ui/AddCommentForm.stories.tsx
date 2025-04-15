import type { Meta, StoryObj } from '@storybook/react'
import AddCommentForm from './AddCommentForm'
import { action } from '@storybook/addon-actions'
import { StoreDecorator } from '../../../shared/config/storybook'

const meta: Meta<typeof AddCommentForm> = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  decorators: [StoreDecorator({ user: { authData: {} } })],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof AddCommentForm>

export const Primary: Story = {
  args: {
    onSendComment: action('onSendComment')
  }
}
