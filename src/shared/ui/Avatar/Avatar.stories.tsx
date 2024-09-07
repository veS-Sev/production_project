import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Avatar } from './Avatar'
import AvatarImage from './scale_1200.png'

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Small = Template.bind({})
Small.args = {
  size: 50,
  src: AvatarImage
}
