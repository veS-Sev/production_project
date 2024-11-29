import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { ArticlesViewSelector } from './ArticlesViewSelector'

export default {
  title: 'shared/ArticlesViewSelector',
  component: ArticlesViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof ArticlesViewSelector>

const Template: ComponentStory<typeof ArticlesViewSelector> = (args) => <ArticlesViewSelector {...args} />

export const Primary = Template.bind({})
Primary.args = {}
