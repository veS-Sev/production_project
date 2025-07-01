import type { Meta, StoryObj } from '@storybook/react'
// import withMock from 'storybook-addon-mock'
import { ArticleRecomendationsList } from './ArticleRecomendationsList'
import { StoreDecorator } from '@/shared/config/storybook'
import { type Article } from '@/entities/Article'

const article: Article = {
  id: '1',
  img: '',
  createdAt: '',
  views: 123,
  user: { id: '1', username: '123' },
  blocks: [],
  type: [],
  title: '123',
  subtitle: 'asfsa'
}

const meta: Meta<typeof ArticleRecomendationsList> = {
  title: 'features/ArticleRecomendationsList',
  component: ArticleRecomendationsList,
  decorators: [StoreDecorator({})],
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=3`,
        method: 'GET',
        status: 200,
        response: [
          { ...article, id: '1' },
          { ...article, id: '2' },
          { ...article, id: '3' }
        ]
      }
    ]
  }
}
export default meta

type Story = StoryObj<typeof ArticleRecomendationsList>
export const Basic: Story = {}
