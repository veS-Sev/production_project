import { createAsyncThunk } from '@reduxjs/toolkit'
import type { ThunkConfig } from 'app/providers/StoreProvider'
import { getUserAuthData } from 'entities/User'
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails'
import { type Comment } from 'entities/Comment'
import { useDispatch } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'
export const addCommentForArticle = createAsyncThunk<
Comment, string, ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkApi) => {
  const { extra, rejectWithValue, getState, dispatch } = thunkApi
  const user = getUserAuthData(getState())
  const article = getArticleDetailsData(getState())

  if (!article || !text || !user) {
    return rejectWithValue('no data')
  }

  try {
    const response = await extra.api.post<Comment>('/comments', {
      text,
      articleId: article.id,
      userId: user.id
    })

    dispatch(fetchCommentsByArticleId(article.id))

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('error')
  }
})
