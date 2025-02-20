import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader'
import { StoreDecorator } from 'shared/config/storybook'

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleDetailsPageHeader>

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />

export const Primary = Template.bind({})
Primary.args = {}
Primary.decorators = [StoreDecorator({

})]
