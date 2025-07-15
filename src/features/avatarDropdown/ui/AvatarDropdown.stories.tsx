import type { Meta, StoryObj } from '@storybook/react'
import { AvatarDropdown } from './AvatarDropdown'
import { StoreDecorator } from '@/shared/config/storybook'
import { UserRole } from '@/entities/User'

const items = [
  { disabled: false, content: 'asdfgh' },
  { disabled: true, content: 'second' },
  { disabled: false, content: 'third' }
]
const meta: Meta<typeof AvatarDropdown> = {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  decorators: [StoreDecorator({
    user: {
      authData: {
        id: '1',
        avatar: '',
        username: 'ADMIN',
        roles: [UserRole.ADMIN]
      },
      _inited: true
    }
  }
  )],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof AvatarDropdown>
export const Basic: Story = {
}
