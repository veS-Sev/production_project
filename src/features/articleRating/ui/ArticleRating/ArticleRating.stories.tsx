import type { Meta, StoryObj } from '@storybook/react'
import ArticleRating from './ArticleRating'
import { StoreDecorator } from '@/shared/config/storybook'

// import { type RateArticleArgs } from '../../model/api/articleRatingApi'

// const rate: RateArticleArgs = {
//   rate: 4,
//   feedbackText: 'Это комментарий к статье 1 от пользователя 1',
//   articleId: '1',
//   userId: '1'
// }
const meta: Meta<typeof ArticleRating> = {
  title: 'features/ArticleRating',
  component: ArticleRating,
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
          { rate: 4 }
        ]
      }
    ]

    /* ... */
  },
  args: {
    articleId: '1'
  }
}
export default meta

type Story = StoryObj<typeof ArticleRating>

export const WithError: Story = {
  parameters: {
    mockData: []
  }
}

export const WithoutRate: Story = {
  parameters: {
    mockData: [{
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [
        { rate: 0 }
      ]
    }]
  }
}
