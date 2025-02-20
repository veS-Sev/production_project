import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import LoginForm from './LoginForm'
import { StoreDecorator } from '../../../../shared/config/storybook'

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}

Primary.decorators = [StoreDecorator({ loginForm: { username: '123', password: 'nbn' } })]

export const withError = Template.bind({})
withError.args = {}

withError.decorators = [StoreDecorator({ loginForm: { username: '123', password: 'nbn', error: 'Вы ввели неверный логин или пароль' } })]

export const Loading = Template.bind({})
Loading.args = {}

Loading.decorators = [StoreDecorator({ loginForm: { username: '123', password: 'nbn', isLoading: true } })]
