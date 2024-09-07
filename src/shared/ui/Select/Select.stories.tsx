import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Select } from './Select'

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Small = Template.bind({})
Small.args = {
  label: 'Это лейбл)',
  options: [
    { value: '123', content: 'Это первый пункт' },
    { value: '456', content: 'Это второй пункт' }
  ]
}
