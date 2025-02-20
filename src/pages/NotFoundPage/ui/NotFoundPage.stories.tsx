import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { NotFoundPage } from './NotFoundPage'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook'

export default {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [ThemeDecorator(Theme.DARK),
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
