import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import MainPage from './MainPage'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { RouterDecorator, StoreDecorator } from 'shared/config/storybook'

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
Light.decorators = [ThemeDecorator(Theme.LIGHT),
  StoreDecorator({
  })]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK),
  StoreDecorator({
  })]
export const Peach = Template.bind({})
Peach.args = {}
Peach.decorators = [ThemeDecorator(Theme.PEACH),
  StoreDecorator({
  })
]
