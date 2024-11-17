import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { CommentList } from './CommentList'

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  comments: [
    {
      id: '1Storybook',
      text: 'Тут новый комментарий',
      user: {
        id: '1',
        username: 'Evgenija',
        avatar:
          'https://i.pinimg.com/originals/d2/60/35/d260355157095d3552efa64fbd893a3d.jpg'
      }
    },
    {
      id: '2Storybook',
      text: 'Тут новый комментарий',
      user: {
        id: '1',
        username: 'Evgenija',
        avatar:
          'https://i.pinimg.com/originals/d2/60/35/d260355157095d3552efa64fbd893a3d.jpg'
      }
    },
    {
      id: '3Storybook',
      text: 'Тут новый комментарий',
      user: {
        id: '1',
        username: 'Evgenija',
        avatar:
          'https://i.pinimg.com/originals/d2/60/35/d260355157095d3552efa64fbd893a3d.jpg'
      }
    }
  ],
  isLoading: false
}

export const IsLoading = Template.bind({})
IsLoading.args = {
  comments: [
    {
      id: '1Storybook',
      text: 'Тут новый комментарий',
      user: {
        id: '1',
        username: 'Evgenija',
        avatar:
          'https://i.pinimg.com/originals/d2/60/35/d260355157095d3552efa64fbd893a3d.jpg'
      }
    },
    {
      id: '2Storybook',
      text: 'Тут новый комментарий',
      user: {
        id: '1',
        username: 'Evgenija',
        avatar:
          'https://i.pinimg.com/originals/d2/60/35/d260355157095d3552efa64fbd893a3d.jpg'
      }
    },
    {
      id: '3Storybook',
      text: 'Тут новый комментарий',
      user: {
        id: '1',
        username: 'Evgenija',
        avatar:
          'https://i.pinimg.com/originals/d2/60/35/d260355157095d3552efa64fbd893a3d.jpg'
      }
    }
  ],
  isLoading: true
}
