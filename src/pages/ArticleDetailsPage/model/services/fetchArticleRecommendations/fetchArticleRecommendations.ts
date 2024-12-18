import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { type Article } from 'entities/Article'

export const fetchArticleRecommendations = createAsyncThunk<
Article[],
void,
ThunkConfig<string>
>('articleDetails/fetchArticleRecommendations', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi
  try {
    const response = await extra.api.get<Article[]>('/articles', {
      // из AxiosRequestConfig
      params: { _limit: 4 }
    })
    if (!response.data) {
      throw new Error()
    }
    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('error')
  }
})
