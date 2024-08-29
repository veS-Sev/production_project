import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import MainPage from './MainPage'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../../config/storybook/ThemeDecorator/ThemeDecorator'

export default {
  title: 'Pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage />

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
