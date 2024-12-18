import { createSlice, createEntityAdapter, type PayloadAction } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import { type Comment } from 'entities/Comment'
import { type ArticleDetailsCommentsShcema } from '../types/articleDetailsPageComments'
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id
})

export const getArticleComments = commentsAdapter.getSelectors(
  (state: StateSchema) =>
    state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
)

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsShcema>({
    ids: ['1', '2'],
    entities: {
    },
    isLoading: false,
    error: undefined
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        fetchCommentsByArticleId.fulfilled,
        (state, action: PayloadAction<Comment[]>) => {
          state.isLoading = false
          commentsAdapter.setAll(state, action.payload)
          // state.data = action.payload
        }
      )
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice
