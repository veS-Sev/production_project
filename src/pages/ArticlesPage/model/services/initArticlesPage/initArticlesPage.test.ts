import { ArticleView } from 'entities/Article'
import { initArticlesPage } from './initArticlesPage'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('initArticlesPage test', () => {
  test('wasn`t initialized', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        ids: [],
        isLoading: false,
        entities: {},
        view: ArticleView.SMALL,
        page: 2,
        hasMore: true,
        limit: 5,
        _inited: false
      }
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(4)
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 })
  })

  test('has already been initialized', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        ids: [],
        isLoading: false,
        entities: {},
        view: ArticleView.SMALL,
        page: 2,
        hasMore: true,
        limit: 5,
        _inited: true
      }
    })

    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlesList).not.toBeCalled()
  })
})
