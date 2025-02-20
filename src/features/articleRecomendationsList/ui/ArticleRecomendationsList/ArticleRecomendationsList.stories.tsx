import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import withMock from 'storybook-addon-mock'
import { ArticleRecomendationsList } from './ArticleRecomendationsList'
import { StoreDecorator, ThemeDecorator } from 'shared/config/storybook'
import { Theme } from 'app/providers/ThemeProvider'
import { type Article } from 'entities/Article'

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

export default {
  title: 'features/ArticleRecomendationsList',
  component: ArticleRecomendationsList,
  argTypes: {
    backgroundColor: { control: 'color' }
  },
  decorators: [withMock, StoreDecorator({})],
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
  // decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ArticleRecomendationsList>

const Template: ComponentStory<typeof ArticleRecomendationsList> = (args) => (
  <ArticleRecomendationsList {...args} />
)

export const Light = Template.bind({})
Light.args = {}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Peach = Template.bind({})
Peach.args = {}
Peach.decorators = [ThemeDecorator(Theme.PEACH)]
