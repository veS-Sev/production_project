import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import ArticlesPage from './ArticlesPage'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

export default {
  title: 'pages/ArticlesPage/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [ThemeDecorator(Theme.LIGHT),
  StoreDecorator({
  })
]
