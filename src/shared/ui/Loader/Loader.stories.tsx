import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Loader } from './Loader'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator/ThemeDecorator'

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
