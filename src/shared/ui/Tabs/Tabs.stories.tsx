import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Tabs } from './Tabs'
import { action } from '@storybook/addon-actions'

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const Primary = Template.bind({})
Primary.args = {
  tabs: [
    { value: 'tab1', content: 'content1' },
    { value: 'tab2', content: 'content2' },
    { value: 'tab3', content: 'content3' }
  ],
  value: 'tab2',
  onClickTab: action('onClickTab')
}
