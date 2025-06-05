import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from '@/app/providers/StoreProvider'
//
import { type Article, ArticleType } from '@/entities/Article'
import { getArticlesPageLimit, getArticlesPageNum, getArticlesPageOrder, getArticlesPageSort, getArticlesPageSearch, getArticlesPageType } from '../../selectors/articlesPageSelectors'
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams'
interface FetchArticlesListProps {
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
Article[],
FetchArticlesListProps,
ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (props, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi
  const limit = getArticlesPageLimit(getState())
  const order = getArticlesPageOrder(getState())
  const sort = getArticlesPageSort(getState())
  const page = getArticlesPageNum(getState())
  const search = getArticlesPageSearch(getState())
  const type = getArticlesPageType(getState())
  try {
    addQueryParams({
      sort, order, search, type
    })
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        q: search,
        _sort: sort,
        _order: order,
        type: type === ArticleType.ALL ? undefined : type
      }
    })

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    return rejectWithValue('error')
  }
})
