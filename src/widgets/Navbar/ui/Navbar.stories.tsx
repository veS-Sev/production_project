import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Navbar } from './Navbar'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../../config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from '../../../../config/storybook/StoreDecorator'

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.args = {}

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
