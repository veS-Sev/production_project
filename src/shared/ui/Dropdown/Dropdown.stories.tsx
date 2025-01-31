import {
  type ComponentStory,
  type ComponentMeta
} from '@storybook/react'
import { Dropdown } from './Dropdown'

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    )
  ]
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  items: [
    { disabled: false, content: 'asdfgh' },
    { disabled: true, content: 'second' },
    { disabled: false, content: 'third' }
  ],
  trigger: 'Триггер'
}
