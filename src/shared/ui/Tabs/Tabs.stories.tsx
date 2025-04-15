import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof Tabs> = {
  title: 'widgets/Tabs',
  component: Tabs,
  decorators: [],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof Tabs>

// export default {
//   title: 'shared/Tabs',
//   component: Tabs,
//   argTypes: {
//     backgroundColor: { control: 'color' }
//   }
// } as Meta<typeof Tabs>

// const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />

export const Primary: Story = {
  args: {
    tabs: [
      { value: 'tab1', content: 'content1' },
      { value: 'tab2', content: 'content2' },
      { value: 'tab3', content: 'content3' }
    ],
    value: 'tab2',
    onClickTab: action('onClickTab')
  }
}
