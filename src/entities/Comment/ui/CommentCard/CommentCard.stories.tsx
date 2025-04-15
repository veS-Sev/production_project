import type { Meta, StoryObj } from '@storybook/react'
import { CommentCard } from './CommentCard'

const meta: Meta<typeof CommentCard> = {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  decorators: [],
  parameters: {
    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof CommentCard>

// export default {
//   title: 'entities/Comment/CommentCard',
//   component: CommentCard,
//   argTypes: {
//     backgroundColor: { control: 'color' }
//   }
// } as Meta<typeof CommentCard>

// const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Primary: Story = {
  args: {
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
}

export const IsLoading: Story = {
  args: {
    isLoading: true
  }
}
