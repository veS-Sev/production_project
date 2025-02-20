import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import ForbiddenPage from './ForbiddenPage'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook'

export default {
  title: 'pages/ForbiddenPage',
  component: ForbiddenPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ForbiddenPage>

const Template: ComponentStory<typeof ForbiddenPage> = (args) => <ForbiddenPage />

export const Light = Template.bind({})
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
