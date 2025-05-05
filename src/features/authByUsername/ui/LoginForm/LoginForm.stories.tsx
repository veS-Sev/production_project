import type { Meta, StoryObj } from '@storybook/react'
import LoginForm from './LoginForm'
import { StoreDecorator } from '@/shared/config/storybook'

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  // decorators: [
  //   StoreDecorator({ loginForm: { username: '123', password: 'nbn' } })
  // ],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof LoginForm>

export const Primary: Story = { decorators: [StoreDecorator({ loginForm: { username: '123', password: 'nbn' } })] }

export const WithError: Story = { decorators: [StoreDecorator({ loginForm: { username: '123', password: 'nbn', error: 'Вы ввели неверный логин или пароль' } })] }

export const Loading: Story = { decorators: [StoreDecorator({ loginForm: { username: '123', password: 'nbn', isLoading: true } })] }
