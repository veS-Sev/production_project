import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { {{name}}Schema } from '../types/{{name}}'
import { type Article } from '../types/article'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
const initialState: {{name}}Schema = {
  isLoading: false,
  data: undefined,
  error: undefined
}

export const {{name}}Slice = createSlice({
  name: '{{name}}',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase( .pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
         .fulfilled,
        (state, action: PayloadAction<>) => {
          state.isLoading = false
          state.data = action.payload
        }
      )
      .addCase( .rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: {{name}}Actions } = {{name}}Slice

export const { reducer: {{name}}Reducer } = {{name}}Slice
