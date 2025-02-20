import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import AdminPanelPage from './AdminPanelPage'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook'

export default {
  title: 'Pages/AdminPanelPage',
  component: AdminPanelPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AdminPanelPage>

const Template: ComponentStory<typeof AdminPanelPage> = (args) => <AdminPanelPage />

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [ThemeDecorator(Theme.LIGHT),
  StoreDecorator({
  })
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK),
  StoreDecorator({
  })
]

export const Peach = Template.bind({})
Peach.args = {}
Peach.decorators = [ThemeDecorator(Theme.PEACH),
  StoreDecorator({
  })
]
