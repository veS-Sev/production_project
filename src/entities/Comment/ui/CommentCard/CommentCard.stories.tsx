import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { CommentCard } from './CommentCard'

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  comment: {
    id: '1Storybook',
    text: 'Тут новый комментарий',
    user: {
      id: '1',
      username: 'Evgenija',
      avatar: 'https://i.pinimg.com/originals/d2/60/35/d260355157095d3552efa64fbd893a3d.jpg'
    }
  },
  isLoading: false
}

export const IsLoading = Template.bind({})
IsLoading.args = {
  isLoading: true
}
