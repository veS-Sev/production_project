import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import {
  getArticlesPageNum,
  getArticlesPageInited
} from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { type URLSearchParams } from 'url'
import { type ArticleType, type ArticleSortField } from 'entities/Article'
import { type SortOrder } from 'shared/types'

export const initArticlesPage = createAsyncThunk<
void,
URLSearchParams,
ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkApi) => {
  const { getState, dispatch } = thunkApi
  const inited = getArticlesPageInited(getState())
  const orderFromURL = searchParams.get('order') as SortOrder
  const sortFromURL = searchParams.get('sort') as ArticleSortField
  const searchFromURL = searchParams.get('search')
  const typeFromURL = searchParams.get('type') as ArticleType
  if (orderFromURL) {
    dispatch(articlesPageActions.setOrder(orderFromURL))
  }
  if (sortFromURL) {
    dispatch(articlesPageActions.setSort(sortFromURL))
  }
  if (searchFromURL) {
    dispatch(articlesPageActions.setSearch(searchFromURL))
  }

  if (typeFromURL) {
    dispatch(articlesPageActions.setType(typeFromURL))
  }

  if (!inited) {
    dispatch(articlesPageActions.initState())
    dispatch(fetchArticlesList({}))
  }
})
