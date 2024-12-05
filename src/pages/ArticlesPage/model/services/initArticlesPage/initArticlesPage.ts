import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import {
  getArticlesPageNum,
  getArticlesPageInited
} from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slice/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initArticlesPage = createAsyncThunk<
void, void,
ThunkConfig<string>
>('articlesPage/initArticlesPage', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi
  const page = getArticlesPageNum(getState())
  const inited = getArticlesPageInited(getState())

  if (!inited) {
    dispatch(articlesPageActions.initState())
    dispatch(
      fetchArticlesList({
        page: page + 1
      }))
  }
}
)
