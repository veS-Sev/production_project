import type { Meta, StoryObj } from '@storybook/react'
import { ProfileRating } from './ProfileRating'
import { StoreDecorator } from '@/shared/config/storybook'
import { type Rating } from '@/entities/Rating'
const rating: Rating = {
  rate: 4,
  feedBack: 'Тут какой-то отзыв'
}
const meta: Meta<typeof ProfileRating> = {
  title: 'shared/ProfileRating',
  component: ProfileRating,
  decorators: [StoreDecorator({
    user: {
      authData: {
        id: '1'
      }
    }
  })],
  parameters: {
    userId: 1,
    mockData: [
      {
        url: `${__API__}/article-ratings?userId=1&articleId=1`,
        method: 'GET',
        status: 200,
        response: [
          {
            userId: '1',
            profileId: '1'
          }
        ]
      }
    ]

    /* ... */
  }
}
export default meta

type Story = StoryObj<typeof ProfileRating>
export const Basic: Story = {
  args: {
    profileId: '1'
    // data: rating,
    // isLoading: false,
    // isError: false
  }
}
