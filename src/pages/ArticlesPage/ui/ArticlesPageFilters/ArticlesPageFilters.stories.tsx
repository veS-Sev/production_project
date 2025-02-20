import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ArticlesPageFilters } from './ArticlesPageFilters'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

export default {
  title: 'pages/ArticlesPage/ArticlesPageFilters',
  component: ArticlesPageFilters,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticlesPageFilters>

const Template: ComponentStory<typeof ArticlesPageFilters> = (args) => <ArticlesPageFilters {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [ThemeDecorator(Theme.LIGHT),
  StoreDecorator({
  })
]
