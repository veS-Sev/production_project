import { type ComponentStory, type Meta } from '@storybook/react'
import { {{name}} } from './{{name}}'

export default {
  title: 'shared/{{name}}',
  component: {{name}},
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta<typeof {{name}}>

const Template: ComponentStory<typeof {{name}}> = (args) => <{{name}} {...args} />

export const Primary = Template.bind({})
Primary.args = {}
