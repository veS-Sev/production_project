import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { ArticleDetailsSchema } from '../types/articleDetails'
import { type Article } from '../types/article'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
const initialState: ArticleDetailsSchema = {
  isLoading: false,
  data: undefined,
  error: undefined
}

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        fetchArticleById.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.isLoading = false
          state.data = action.payload
        }
      )
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: articleDetailsActions } = articleDetailsSlice

export const { reducer: articleDetailsReducer } = articleDetailsSlice
