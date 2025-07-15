import type { Meta, StoryObj } from '@storybook/react'
import ArticlesPage from './ArticlesPage'
import { StoreDecorator } from '@/shared/config/storybook'
// import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article'
import { type Article } from '@/entities/Article'
import { ArticleType } from '@/entities/Article'
const article: Article = {
  id: '1',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  createdAt: '',
  views: 123,
  user: { id: '1', username: '123' },
  blocks: [],
  type: [ArticleType.IT],
  title: '123',
  subtitle: 'asfsa'
}

const meta: Meta<typeof ArticlesPage> = {
  title: 'pages/ArticlesPage/ArticlesPage',
  component: ArticlesPage,
  decorators: [StoreDecorator({
    articlesPage: {
      isLoading: false,
      type: ArticleType.IT
    }
  })],
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_expand=user&_limit=9&_page=2&q=&_sort=created&_order=asc`,
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

type Story = StoryObj<typeof ArticlesPage>

export const Primary: Story = {
  // decorators: [StoreDecorator({
  //   articlesPage: {
  //     type: ArticleType.IT
  //   }
  // })],
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_expand=user&_limit=9&_page=2&q=&_sort=created&_order=asc`,
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

export const WithError: Story = {
  decorators: [StoreDecorator({
    articlesPage: {
      isLoading: false,
      error: 'Error hapens'
    }
  })],
  parameters: {
    mockData: []
  }
}

export const Loading: Story = {
  decorators: [StoreDecorator({
    articlesPage: {
      isLoading: true
    }
  })],
  parameters: {
    mockData: []
  }
}
