import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ArticleListItemSkeleton } from '../ArticleListItemSkeleton/ArticleListItemSkeleton'
import { ArticleView } from '../../model/types/article'

export default {
  title: 'entities/Article/ArticleListItemSkeleton',
  component: ArticleListItemSkeleton,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticleListItemSkeleton>

const Template: ComponentStory<typeof ArticleListItemSkeleton> = (args) => (
  <ArticleListItemSkeleton {...args} />
)

export const Big = Template.bind({})
Big.args = { view: ArticleView.BIG }

export const Small = Template.bind({})
Small.args = { view: ArticleView.SMALL }
