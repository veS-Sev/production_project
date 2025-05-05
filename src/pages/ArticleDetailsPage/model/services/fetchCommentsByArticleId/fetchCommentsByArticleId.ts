import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from '@/app/providers/StoreProvider'
import { type Comment } from '@/entities/Comment/index'

export const fetchCommentsByArticleId = createAsyncThunk<
Comment[],
string | undefined,
ThunkConfig<string>
>('articleDetails/fetchCommentsByArticleId', async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi
  try {
    const response = await extra.api.get<Comment[]>('/comments', {
      // из AxiosRequestConfig
      params: { articleId, _expand: 'user' }
    })
    if (!articleId) {
      return rejectWithValue('error')
    }
    if (!response.data) {
      throw new Error()
    }
    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('error')
  }
})
