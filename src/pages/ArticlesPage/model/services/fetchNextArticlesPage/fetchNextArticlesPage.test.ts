import { ArticleView } from 'entities/Article'
import { fetchNextArticlesPage } from './fetchNextArticlesPage'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

jest.mock('../fetchArticlesList/fetchArticlesList')
describe('fetchNextArticlesPage.test', () => {
  test('succes', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        ids: [],
        isLoading: false,
        entities: {},
        view: ArticleView.SMALL,
        page: 2,
        hasMore: true,
        limit: 5
      }
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(4)
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 })
  })

  test('succes', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        ids: [],
        isLoading: false,
        entities: {},
        view: ArticleView.SMALL,
        page: 2,
        hasMore: true,
        limit: 5
      }
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(4)
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 })
  })

  test('fetch Articles List has not been called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        ids: [],
        isLoading: false,
        entities: {},
        view: ArticleView.SMALL,
        page: 2,
        hasMore: true,
        limit: 5
      }
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(4)
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 })
  })

  test('fetch next articles list is loading', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        ids: [],
        isLoading: true,
        entities: {},
        view: ArticleView.SMALL,
        page: 2,
        hasMore: true,
        limit: 5
      }
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(2)
  })
})
