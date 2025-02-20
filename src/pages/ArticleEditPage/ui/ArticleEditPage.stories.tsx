import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import ArticleEditPage from './ArticleEditPage'
import { StoreDecorator } from 'shared/config/storybook'

export default {
  title: 'pages/ArticleEditPage',
  component: ArticleEditPage,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleEditPage>

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [
  StoreDecorator({
  })
]
